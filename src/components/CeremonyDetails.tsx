import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, MapPin, Heart, Sparkles } from 'lucide-react';

export const CeremonyDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Premium ambient backdrop */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-brand-primary/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="text-brand-primary uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                The Celebration
              </span>
              <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-brand-primary/60 to-transparent" />
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display text-stone-800 mb-8 leading-[1.1] drop-shadow-sm">
              Celebrating <br />
              <span className="italic font-light text-brand-primary">Our Wedding Day</span>
            </h2>

            <p className="text-stone-800 font-serif text-lg sm:text-xl leading-relaxed mx-auto max-w-xl">
              We are honored to invite you to join us in celebrating our wedding day at a grand gathering filled with love, laughter, and beautiful memories.
            </p>
          </div>

          {/* Centered Timeline */}
          <div className="relative space-y-12 ml-10 sm:ml-12 border-l-[1.5px] border-brand-primary/40 pl-10 sm:pl-12 py-4 max-w-xl mx-auto">

            {/* Calendar */}
            <div className="relative group">
              <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-primary/30 shadow-lg flex items-center justify-center group-hover:border-brand-primary group-hover:shadow-[0_4px_15px_rgba(70,130,180,0.3)] transition-all duration-500">
                <Calendar className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-gold-deep transition-colors duration-500">Thursday, November 5</h4>
                <p className="text-stone-800 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">The Year Two Thousand Twenty Six</p>
              </div>
            </div>

            {/* Clock */}
            <div className="relative group">
              <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-primary/30 shadow-lg flex items-center justify-center group-hover:border-brand-primary group-hover:shadow-[0_4px_15px_rgba(70,130,180,0.3)] transition-all duration-500">
                <Clock className="w-5 h-5 text-brand-gold-deep group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-gold-deep transition-colors duration-500">05:00 PM Onwards</h4>
                <p className="text-stone-800 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">Welcome & Arrival</p>
              </div>
            </div>

            {/* Location */}
            <div className="relative group">
              <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-primary/30 shadow-lg flex items-center justify-center group-hover:border-brand-primary group-hover:shadow-[0_4px_15px_rgba(70,130,180,0.3)] transition-all duration-500">
                <MapPin className="w-5 h-5 text-brand-gold-deep group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-gold-deep transition-colors duration-500">Amagi Aria</h4>
                <p className="text-stone-800 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">Kurana, Negombo, Sri Lanka</p>
              </div>
            </div>

            {/* Celebration Events */}
            <div className="relative group">
              <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-primary/30 shadow-lg flex items-center justify-center group-hover:border-brand-primary group-hover:shadow-[0_4px_15px_rgba(70,130,180,0.3)] transition-all duration-500">
                <Heart className="w-5 h-5 text-brand-pink fill-brand-pink/20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-gold-deep transition-colors duration-500">Celebration Reception</h4>
                <p className="text-stone-800 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold mb-2">06:00 PM - 11:00 PM</p>
                <p className="text-stone-800 font-serif italic text-base leading-relaxed">
                  Followed by a celebratory dinner, cake cutting, and music festivities by the lagoon.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

