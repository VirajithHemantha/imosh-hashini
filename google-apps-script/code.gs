/**
 * Google Apps Script to handle RSVP and Wishes submissions from the Wedding/Engagement invitation site.
 * 
 * Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1CxKFSRS_tH1oN17ivWxAyTf1L4djjGOhERgsEUsPJu8/edit
 * 2. Go to Extensions -> Apps Script.
 * 3. Clear any existing code in the editor and paste this code.
 * 4. Click Save (Disk icon).
 * 5. Click Deploy -> New deployment.
 * 6. Select type: Web App.
 * 7. Configure:
 *    - Description: Wedding/Engagement Form API
 *    - Execute as: Me (your email)
 *    - Who has access: Anyone
 * 8. Click Deploy, authorize permissions, and copy the "Web app URL" (ends in /exec).
 * 9. Paste this URL in your project's .env file:
 *    VITE_GOOGLE_SCRIPT_URL="YOUR_WEB_APP_URL"
 */

const SPREADSHEET_ID = '1CxKFSRS_tH1oN17ivWxAyTf1L4djjGOhERgsEUsPJu8';

function doPost(e) {
  try {
    // 1. Parse parameters
    const sheetName = ((e && e.parameter && e.parameter.sheet) || 'general').trim().toLowerCase();
    const payloadJson = (e && e.parameter && e.parameter.payload) || '{}';
    const payload = JSON.parse(payloadJson);

    // 2. Add server-side timestamp to the payload if not present
    if (!payload['timestamp']) {
      payload['timestamp'] = new Date().toLocaleString();
    }

    // 3. Open the spreadsheet and get/create the specific sheet tab
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
    }

    // 4. Read existing headers (or create if empty)
    let headers = [];
    if (sheet.getLastRow() > 0) {
      headers = sheet.getRange(1, 1, 1, Math.max(1, sheet.getLastColumn())).getValues()[0];
      // Clean up headers (remove empty values at the end)
      headers = headers.filter(function (h) { return h !== ''; });
    }

    // 5. Ensure all payload keys have matching headers
    let headersUpdated = false;
    const keys = Object.keys(payload);
    
    // Sort keys to have 'timestamp' first for clean ordering
    keys.sort(function (a, b) {
      if (a === 'timestamp') return -1;
      if (b === 'timestamp') return 1;
      return a.localeCompare(b);
    });

    keys.forEach(function (key) {
      const displayHeader = formatHeaderName(key);
      if (headers.indexOf(displayHeader) === -1) {
        headers.push(displayHeader);
        headersUpdated = true;
      }
    });

    // 6. If headers were added or sheet is brand new, write headers to Row 1
    if (headersUpdated || sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      // Format headers: Bold, slightly darker gray background
      sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight('bold')
        .setBackground('#e2e8f0')
        .setHorizontalAlignment('left');
    }

    // 7. Map payload values to headers in the correct column order
    const rowData = headers.map(function (header) {
      // Find key matching this header
      const matchingKey = keys.find(function (k) {
        return formatHeaderName(k) === header;
      });
      const val = matchingKey ? payload[matchingKey] : '';
      return val !== null && val !== undefined ? val : '';
    });

    // 8. Append the row of data
    sheet.appendRow(rowData);

    return jsonResponse({ ok: true, message: 'Data saved successfully to ' + sheetName });
  } catch (error) {
    return jsonResponse({
      ok: false,
      error: String(error.message || error)
    });
  }
}

function doGet(e) {
  return jsonResponse({
    ok: true,
    message: 'Engagement Form Handler is active. Send POST requests to save RSVP or Blessings data.',
    timestamp: new Date().toISOString()
  });
}

/**
 * Format key names into pretty headers (e.g. "fullName" -> "Full Name")
 */
function formatHeaderName(key) {
  if (key === 'timestamp') return 'Timestamp';
  if (key === 'fullName') return 'Full Name';
  if (key === 'guests') return 'Guests';
  if (key === 'dietaryNotes') return 'Dietary Notes';
  if (key === 'submittedAt') return 'Submitted At (ISO)';
  
  // Generic title-casing for other keys (like wishes form: name, message)
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, function (str) { return str.toUpperCase(); })
    .trim();
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
