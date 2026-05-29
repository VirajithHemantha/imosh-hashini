import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { CornerFlowers } from './CornerFlowers';

export const HeroContent: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. Mobile View: Display invitation card image 1.png */}
      <div className="block md:hidden w-full h-screen bg-brand-ivory relative">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="/1.png"
            alt="Engagement Invitation"
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </motion.div>

        {/* Subtle Mobile Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 pointer-events-none">
          <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-brand-primary font-bold">Scroll</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-brand-primary to-transparent animate-bounce" />
        </div>
      </div>

      {/* 2. Desktop/Tablet View: Render text-based layouts */}
      <div className="hidden md:flex relative min-h-screen py-24 sm:py-32 flex-col items-center justify-center w-full bg-brand-ivory">
        <CornerFlowers position="all" opacity={0.8} scale={1.8} />
        {/* Background Image with Elegant Overlays */}
        <div className="absolute inset-0 z-0 bg-brand-ivory">
          <div className="absolute inset-0 bg-brand-ivory/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-primary/5" />
          <div className="absolute inset-0 bg-brand-primary/5 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Subtle top decoration */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-brand-primary/60 to-transparent" />
              <Heart className="w-5 h-5 text-brand-pink fill-brand-pink/40 drop-shadow-sm" />
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-brand-primary/60 to-transparent" />
            </div>

            <span className="text-brand-primary uppercase tracking-[0.6em] text-xs sm:text-sm font-medium mb-10 block drop-shadow-sm font-sans">
              The Celebration of Love
            </span>

            <div className="relative mb-12 w-full flex justify-center">
              <h1 className="relative text-4xl sm:text-7xl lg:text-8xl font-display text-stone-800 leading-tight drop-shadow-sm">
                Imosh & Hashini
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <div className="hidden sm:block h-[1px] w-24 bg-gradient-to-r from-transparent to-brand-primary/40" />
              <p className="text-xl sm:text-3xl font-serif italic text-stone-700 tracking-wide px-4 text-center max-w-2xl leading-relaxed">
                Together with our families, we joyfully invite you to join us
              </p>
              <div className="hidden sm:block h-[1px] w-24 bg-gradient-to-l from-transparent to-brand-primary/40" />
            </div>

            {/* Enhanced Date pill with premium glass effect */}
            <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/40 via-brand-primary-light/40 to-brand-primary/40 rounded-full blur-[8px] opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 transform group-hover:scale-105" />
              <div className="relative px-8 sm:px-16 py-4 sm:py-6 bg-white/70 backdrop-blur-lg border border-brand-primary/50 rounded-full shadow-[0_8px_30px_rgba(70,130,180,0.1)] flex items-center justify-center">
                <span className="relative text-2xl sm:text-4xl font-serif text-brand-primary tracking-[0.3em] font-medium drop-shadow-sm flex items-center gap-4">
                  <Sparkles className="w-4 h-4 text-brand-primary-light" />
                  05 . 11 . 2026
                  <Sparkles className="w-4 h-4 text-brand-primary-light" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
