import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-brand-ivory overflow-hidden">
      {/* Main Image Container */}
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/1.png"
          alt="Wedding Invitation Card"
          className="h-full w-full object-contain max-h-screen select-none pointer-events-none"
        />
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20">
        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.4em] text-brand-primary font-bold drop-shadow-sm">Discover</span>
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-brand-primary to-transparent animate-bounce" />
      </div>
    </div>
  );
};
