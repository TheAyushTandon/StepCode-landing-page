'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function Navbar() {
  const navItems = ['Roadmaps', 'Projects', 'Mentors', 'Universities', 'About'];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [coords, setCoords] = useState<{ left: number; width: number } | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('lenis-stopped');
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.classList.remove('lenis-stopped');
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.classList.remove('lenis-stopped');
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

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

  const handleScrollTo = (item: string) => {
    let id = '';
    if (item === 'Roadmaps') id = 'roadmaps';
    else if (item === 'Projects') id = 'projects';
    else if (item === 'Mentors') id = 'projects'; // Mentors inside features
    else if (item === 'Universities') id = 'cta';  // Fallback to waitlist CTA
    else if (item === 'About') id = 'cta';

    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const containerVariants = {
    hidden: { scaleX: shouldReduceMotion ? 1 : 0, opacity: 0 },
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 180, damping: 15 }
    }
  } as const;

  return (
    <>
      <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between filter drop-shadow-xl transition-all duration-300 ease-out ${
        isScrolled 
          ? 'h-[72px] bg-[#080808]/85 backdrop-blur-md border-b border-white/5' 
          : 'h-[96px] bg-transparent border-b border-transparent'
      }`}
    >
      {/* Brand logo */}
      <motion.div 
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.05 }}
        className={`font-heading font-black text-xl md:text-2xl tracking-tighter text-white cursor-pointer select-none origin-left transition-transform duration-300 ${
          isScrolled ? 'scale-90' : 'scale-100'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        tabIndex={0}
        role="button"
        aria-label="StepCode Home"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
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
          {coords && !shouldReduceMotion && (
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
              onClick={() => handleScrollTo(item)}
              className={`relative text-xs font-black uppercase tracking-widest cursor-pointer transition-all duration-300 z-10 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full ${
                isScrolled ? 'px-4 py-1.5' : 'px-6 py-2'
              }`}
              style={{
                color: isHovered && !shouldReduceMotion ? '#080808' : '#ffffff',
              }}
            >
              {item}
            </motion.button>
          );
        })}
      </motion.nav>

      {/* Desktop Waitlist button */}
      <motion.div
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.05 }}
        className={`hidden md:block origin-right transition-transform duration-300 ${
          isScrolled ? 'scale-90' : 'scale-100'
        }`}
      >
        <button 
          onClick={() => {
            const el = document.getElementById('cta');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative overflow-hidden bg-black text-white border border-white/10 px-6 py-2 rounded text-xs font-black uppercase tracking-wider cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red"
        >
          {/* Sliding red background fill */}
          <span className="absolute inset-0 w-full h-full bg-[#C1121F] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
          <span className="relative z-10">Join Waitlist</span>
        </button>
      </motion.div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex md:hidden flex-col items-center justify-center w-11 h-11 relative focus:outline-none z-50 btn-tactile cursor-pointer bg-white/5 border border-white/10 rounded-full"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
      >
        <span className={`w-5 h-[2px] bg-white absolute transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
        <span className={`w-5 h-[2px] bg-white absolute transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`w-5 h-[2px] bg-white absolute transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
      </button>
    </header>

    {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center px-6 md:hidden"
            style={{ backgroundColor: '#080808' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Background ambient spots */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#C1121F]/10 blur-[100px] pointer-events-none" />

            <nav className="flex flex-col items-center gap-4 z-10 w-full max-w-[280px]">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : idx * 0.05 + 0.1, type: 'spring', stiffness: 200, damping: 18 }}
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      handleScrollTo(item);
                    }, 100);
                  }}
                  className="text-xl font-heading font-black uppercase tracking-widest text-white hover:text-accent-red transition-colors py-3 w-full text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red rounded"
                >
                  {item}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : navItems.length * 0.05 + 0.1, type: 'spring', stiffness: 200, damping: 18 }}
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => {
                    const el = document.getElementById('cta');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="group mt-6 relative overflow-hidden bg-[#C1121F] text-white border border-transparent px-8 py-3.5 rounded text-xs font-black uppercase tracking-wider w-full text-center active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {/* Sliding black background fill */}
                <span className="absolute inset-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10">Join Waitlist</span>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
