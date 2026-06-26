'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Use a smooth spring physics animation for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <div className="fixed bottom-8 right-8 z-40 flex items-center justify-end pointer-events-none select-none">
      {/* Minimalist Scroll progress track: 1.5 inches / 60px wide, very thin */}
      <div className="w-[60px] h-[3px] bg-white/10 rounded-full overflow-hidden border border-white/5 relative">
        {/* Scroll progress fill: scales from left to right */}
        <motion.div 
          className="absolute top-0 left-0 h-full w-full bg-primary-red origin-left"
          style={{ scaleX }}
        />
      </div>
    </div>
  );
}
