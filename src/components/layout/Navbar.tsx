'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const navItems = ['Roadmaps', 'Projects', 'Mentors', 'Universities', 'About'];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [coords, setCoords] = useState<{ left: number; width: number } | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>, idx: number) => {
    setHoveredIndex(idx);
    const rect = e.currentTarget.getBoundingClientRect();
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const parentRect = parent.getBoundingClientRect();
      setCoords({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  };

  const containerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 280,
        damping: 24,
        when: "beforeChildren",
        staggerChildren: 0.05,
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 180, damping: 15 }
    }
  } as const;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between filter drop-shadow-xl transition-all duration-300 ease-out ${
        isScrolled 
          ? 'h-[72px] bg-[#080808]/85 backdrop-blur-md border-b border-white/5' 
          : 'h-[96px] bg-transparent border-b border-transparent'
      }`}
    >
      {/* Brand logo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.05 }}
        className={`font-heading font-black text-xl md:text-2xl tracking-tighter text-white cursor-pointer select-none origin-left transition-transform duration-300 ${
          isScrolled ? 'scale-90' : 'scale-100'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        STEPCODE
      </motion.div>

      {/* Centered navigation items with sliding hover pill */}
      <motion.nav 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ originX: 0.5 }}
        className={`hidden md:flex items-center relative rounded-full border border-white/5 bg-black/10 transition-all duration-300 ${
          isScrolled ? 'gap-1 px-1 py-1' : 'gap-4 px-2.5 py-1.5'
        }`}
        onMouseLeave={() => {
          setHoveredIndex(null);
          setCoords(null);
        }}
      >
        {/* Sliding white pill */}
        <AnimatePresence>
          {coords && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, left: coords.left, width: coords.width }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute bg-white rounded-full h-[calc(100%-8px)] top-1 z-0"
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 28,
              }}
            />
          )}
        </AnimatePresence>

        {navItems.map((item, idx) => {
          const isHovered = hoveredIndex === idx;
          return (
            <motion.button
              key={item}
              variants={itemVariants}
              onMouseEnter={(e) => handleMouseEnter(e, idx)}
              className={`relative text-xs font-black uppercase tracking-widest cursor-pointer transition-all duration-300 z-10 select-none ${
                isScrolled ? 'px-4 py-1.5' : 'px-6 py-2'
              }`}
              style={{
                color: isHovered ? '#080808' : '#ffffff',
              }}
            >
              {item}
            </motion.button>
          );
        })}
      </motion.nav>

      {/* Waitlist button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.05 }}
        className={`origin-right transition-transform duration-300 ${
          isScrolled ? 'scale-90' : 'scale-100'
        }`}
      >
        <button 
          onClick={() => {
            const el = document.getElementById('cta');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-black hover:bg-black/90 text-white border border-white/10 px-6 py-2 rounded text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.5)] active:scale-95"
        >
          Join Waitlist
        </button>
      </motion.div>
    </header>
  );
}
