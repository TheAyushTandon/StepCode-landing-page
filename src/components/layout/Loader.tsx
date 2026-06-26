'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const startTime = Date.now();
    const duration = 2500; // 2.5s duration for a smooth experience

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(pct);

      // Progress updated successfully

      if (pct < 100) {
        timer = setTimeout(updateProgress, 16);
      } else {
        // Hold at 100% briefly for visual satisfaction before signaling completion
        timer = setTimeout(() => {
          onComplete();
        }, 300);
      }
    };

    timer = setTimeout(updateProgress, 16);
    
    // Disable scrolling when the loader is active
    document.documentElement.classList.add('lenis-stopped');
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.documentElement.classList.remove('lenis-stopped');
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  // Main backdrop variants for slide-up exit
  const backdropVariants = {
    initial: { y: 0 },
    exit: { 
      y: '-100%',
      transition: {
        duration: 0.95,
        ease: [0.76, 0, 0.24, 1] as const
      }
    }
  } as const;

  // Content fade variants
  const contentVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: -20,
      transition: { duration: 0.4, ease: 'easeIn' }
    }
  } as const;

  return (
    <motion.div
      variants={backdropVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black select-none"
    >
      {/* SVG Rough Edge Filter */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="rough-edge">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.04" 
              numOctaves="3" 
              result="noise" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="4.5" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-center text-center px-6"
      >
        {/* Logo Illustration */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6 flex items-center justify-center filter drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
          <Image
            src="/loader-logo.png"
            alt="StepCode Logo"
            fill
            priority
            className="object-contain brightness-200 contrast-125"
          />
        </div>

        {/* DISTRESSED BRICK TEXT */}
        <h1 
          className="text-white text-5xl md:text-7xl font-brick tracking-widest font-normal uppercase select-none mb-8"
          style={{ 
            filter: 'url(#rough-edge)',
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
          }}
        >
          STEPCODE
        </h1>

        {/* LOADING BAR SECTION */}
        <div className="w-[280px] md:w-[360px] flex flex-col items-center">
          {/* Track */}
          <div className="w-full h-[5px] bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
            {/* Fill */}
            <div 
              className="absolute top-0 left-0 h-full bg-primary-red transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Percentage */}
          <div className="flex justify-end w-full text-[9px] font-mono tracking-widest text-text-secondary uppercase mt-3">
            <span className="font-bold text-white font-mono">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
