import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-primary/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center mb-16 sm:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6 mt-4">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-primary/60" />
            <span className="text-brand-primary uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">Guest of Honor & Parents</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-brand-primary/60 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-7xl font-display text-stone-800 tracking-tight drop-shadow-sm">
            Imosh <span className="italic text-brand-primary font-light mx-2">&</span> Hashini
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-4 relative z-10 max-w-4xl mx-auto">
        {/* Groom Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-right flex-1 lg:pr-10 w-full"
        >
          <div className="mb-4 flex flex-col items-center lg:items-end">
            <span className="text-brand-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">The Groom</span>
            <h3 className="text-4xl sm:text-5xl font-display text-stone-800 mb-2 drop-shadow-sm">Imosh</h3>
            <p className="text-stone-500/90 font-serif italic text-sm sm:text-base text-center lg:text-right max-w-xs leading-relaxed">
              Son of Mr. J.C. Weerasinghe<br />& Mrs. Priyanga
            </p>
          </div>
        </motion.div>

        {/* Symmetrical Heart Divider */}
        <div className="flex flex-col items-center justify-center flex-shrink-0 relative">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-brand-primary/40 to-transparent hidden lg:block" />
          <Heart className="w-8 h-8 text-brand-pink fill-brand-pink/20 my-4 animate-pulse drop-shadow-sm" />
          <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-brand-primary/40 to-transparent hidden lg:block" />
          
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent lg:hidden opacity-60" />
        </div>

        {/* Bride Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center lg:text-left flex-1 lg:pl-10 w-full"
        >
          <div className="mb-4 flex flex-col items-center lg:items-start">
            <span className="text-brand-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">The Bride</span>
            <h3 className="text-4xl sm:text-5xl font-display text-stone-800 mb-2 drop-shadow-sm">Hashini</h3>
            <p className="text-stone-500/90 font-serif italic text-sm sm:text-base text-center lg:text-left max-w-xs leading-relaxed">
              Daughter of Mr. D. B. Chinthaka Dewarathne<br />& Mrs. Ayesha
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
