'use client';

import { Github, Twitter, MessageSquare, ArrowUp } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#080808] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-16">
          {/* Logo and Slogan */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
            <span className="font-heading font-black text-2xl tracking-tighter text-text-primary">
              STEP<span className="text-[#C1121F]">CODE</span>
            </span>
            <p className="text-sm text-text-secondary max-w-sm font-light leading-relaxed">
              StepCode is an interactive, project-driven software engineering academy that empowers developers to skip passive learning and construct real code.
            </p>
          </div>

          {/* Slogan Statement */}
          <div className="col-span-12 md:col-span-6 flex flex-col md:items-end justify-between h-full gap-6">
            <div className="text-left md:text-right">
              <span className="text-[10px] font-mono tracking-widest text-[#C1121F] font-semibold uppercase">
                THE PHILOSOPHY
              </span>
              <p className="font-heading font-black text-2xl md:text-3xl text-white mt-2 leading-tight">
                Build.<br />
                Don't binge tutorials.<br />
                <span className="text-[#C1121F]">Build.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Middle Line Divider */}
        <div className="h-[1px] bg-white/5 w-full my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary font-mono">
          <div>
            <span>© {new Date().getFullYear()} StepCode Inc. All rights reserved.</span>
          </div>

          {/* Socials & Top Scroll */}
          <div className="flex items-center gap-6">
            <motion.a 
              href="#" 
              whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-red p-1 rounded"
              aria-label="StepCode Twitter Profile"
            >
              <Twitter size={16} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-red p-1 rounded"
              aria-label="StepCode GitHub Organization"
            >
              <Github size={16} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-red p-1 rounded"
              aria-label="StepCode Discord Community"
            >
              <MessageSquare size={16} />
            </motion.a>
            <button 
              onClick={scrollToTop} 
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer hover-underline-animation focus:outline-none py-1 px-2 rounded"
              aria-label="Scroll Back To Top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={12} className="ml-0.5" />
            </button>
          </div>
        </div>

        {/* Large watermark text logo */}
        <div className="mt-16 w-full flex justify-center select-none pointer-events-none opacity-[0.02]">
          <h1 className="font-heading font-black text-[13vw] leading-none tracking-tighter text-white">
            STEPCODE
          </h1>
        </div>

      </div>
    </footer>
  );
}
