import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, SkipForward } from 'lucide-react';

interface IntroVideoProps {
  onComplete: () => void;
}

const VIDEO_SRC = '/give_beautiful_live_video_202604291917.mp4';

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSkip = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
  }, []);

  const startPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS Safari: play() must run in the same user-gesture turn; start muted, then unmute.
    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (!playPromise) return;

    playPromise
      .then(() => {
        setIsPlaying(true);
        video.muted = false;
      })
      .catch((err) => {
        console.error('Video play failed:', err);
        video.muted = true;
        video
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => handleSkip());
      });
  }, [handleSkip]);

  const handleStart = () => {
    setHasStarted(true);
    startPlayback();
  };

  return (
    <div className="fixed inset-0 z-[200] bg-gradient-to-br from-[#1D3557] via-[#457B9D] to-[#2C3E50] flex items-center justify-center overflow-hidden">
      {/* Video stays mounted from first paint so iOS can preload and play on tap synchronously */}
      <motion.div
        initial={false}
        animate={{
          opacity: hasStarted && isPlaying ? 1 : 0,
        }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className={`absolute inset-0 bg-black ${hasStarted ? 'z-0' : '-z-10'}`}
        aria-hidden={!hasStarted}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          // @ts-expect-error legacy iOS inline playback attribute
          webkit-playsinline="true"
          muted
          preload="auto"
          onLoadedData={() => setIsVideoReady(true)}
          onCanPlay={() => setIsVideoReady(true)}
          onPlaying={() => setIsPlaying(true)}
          onEnded={onComplete}
          onError={() => {
            console.error('Intro video failed to load');
            setTimeout(handleSkip, 500);
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/40" />

        {hasStarted && (
          <button
            type="button"
            onClick={handleSkip}
            className="absolute top-6 right-6 z-20 flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white/90 text-[10px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 active:scale-95"
            aria-label="Skip intro video"
          >
            <span>Skip</span>
            <SkipForward className="w-3.5 h-3.5" />
          </button>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            transition={{ duration: 1.2 }}
            className="relative z-10 flex flex-col items-center gap-10 px-6 text-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-brand-primary-light/5 blur-[100px] rounded-full pointer-events-none" />

              <h2 className="relative text-brand-primary-muted uppercase tracking-[0.7em] text-[10px] sm:text-xs font-bold mb-4 sm:mb-8 drop-shadow-md">
                Engagement Invitation
              </h2>
              <h1 className="relative text-6xl sm:text-[9rem] font-display text-white tracking-widest mb-4 drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                IMOSH & HASHINI
              </h1>
              <div className="w-32 h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mt-10 shadow-[0_0_15px_rgba(70,130,180,0.5)]" />
            </motion.div>
 
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              onClick={handleStart}
              disabled={!isVideoReady}
              className="group relative px-12 sm:px-20 py-6 bg-white/5 hover:bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full transition-all duration-700 hover:scale-110 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden disabled:opacity-50 disabled:cursor-wait disabled:hover:scale-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-brand-primary-deep/10 to-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex items-center gap-5">
                <span className="text-white tracking-[0.3em] font-bold text-[10px] uppercase drop-shadow-md">
                  {isVideoReady ? 'Enter Engagement Invitation' : 'Loading…'}
                </span>
                <Play className="w-4 h-4 text-brand-primary-light fill-brand-primary-light transition-transform group-hover:scale-125" />
              </div>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
            </motion.button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-60" />
      </div>
    </div>
  );
};
