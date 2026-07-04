'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

// Paste the URL you copied in Step 2 here
const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbwSVcVntk4B39RdicE_RbF63epsu3Ms_djMwVnsWjNOzC12z_cUsa-uMcaw5QitZ306/exec';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  async function sendEmailToGoogleSheet(userEmail: string) {
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      // Using 'text/plain' to help avoid CORS preflight issues with Apps Script
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({ email: userEmail }),
    });

    const data = await response.json();
    return data;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const data = await sendEmailToGoogleSheet(email.trim());

      if (data?.result === 'success') {
        setSubmitted(true);
        setEmail('');
      } else {
        console.error('Error saving email:', data?.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="cta"
      className="scroll-mt-24 relative w-full pt-72 pb-24 md:py-36 bg-[#080808] border-t border-white/5 flex flex-col items-center justify-center text-center px-6"
    >
      {/* Red ambient spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary-red/5 blur-[120px] pointer-events-none" />

<<<<<<< HEAD
      <div className="max-w-xl mx-auto relative z-10 w-full">
=======
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-xl mx-auto relative z-10 w-full"
      >
        
>>>>>>> 8257dcc (feat: mobile responsive polish, smooth scroll, and layout refinements)
        {/* Title */}
        <motion.h2 
          variants={itemVariants}
          className="font-heading font-black tracking-tight leading-[1.1] uppercase mb-6 flex flex-col items-center select-none"
        >
          <span className="text-[6.2vw] xs:text-2xl sm:text-3xl md:text-5xl text-white">Every skill</span>
          <span className="text-[6.2vw] xs:text-2xl sm:text-3xl md:text-5xl text-white mt-1">you learn today</span>
          <span className="text-[6.2vw] xs:text-2xl sm:text-3xl md:text-5xl text-[#C1121F] mt-1 whitespace-nowrap">builds your tomorrow.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-text-secondary text-sm font-light leading-relaxed mb-10 max-w-md mx-auto"
        >
          Be the first to know when new roadmaps, mentorship groups and exclusive resources drop. <span className="font-bold text-white">Learn ahead. Stay ahead.</span>
        </motion.p>

        {/* Waitlist Form */}
        <motion.div 
          variants={itemVariants}
          className="w-full flex justify-center min-h-[64px]"
        >
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              onClick={!isExpanded ? () => setIsExpanded(true) : undefined}
<<<<<<< HEAD
              className="relative overflow-hidden border shadow-2xl select-none group w-full max-w-md flex items-center"
              animate={{
=======
              onFocus={!isExpanded ? () => setIsExpanded(true) : undefined}
              tabIndex={!isExpanded ? 0 : undefined}
              onKeyDown={(e) => {
                if (!isExpanded && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  setIsExpanded(true);
                }
              }}
              className="relative overflow-hidden border shadow-2xl select-none group w-full max-w-md flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary"
              animate={{ 
>>>>>>> 8257dcc (feat: mobile responsive polish, smooth scroll, and layout refinements)
                width: isExpanded ? '100%' : '160px',
                backgroundColor: isExpanded ? 'rgba(17, 17, 17, 1)' : 'rgba(17, 17, 17, 0)',
                borderColor: isExpanded ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.2)',
              }}
              whileHover={{
                borderColor: isExpanded ? 'rgba(255,255,255,0.05)' : '#C1121F',
              }}
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
            >
              {!isExpanded ? (
                <motion.div
                  key="btn-content"
                  className="w-full h-full flex items-center justify-center relative overflow-hidden py-4 cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Sliding Background Fill Layer */}
                  <span className="absolute inset-0 bg-[#C1121F] -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                  <span className="relative z-10 text-white text-xs font-black uppercase tracking-widest">
                    Subscribe
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="form-content"
                  className="flex flex-row items-center w-full p-1.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 px-4 flex-1 py-1">
                    <Mail size={16} className="text-text-secondary shrink-0" />
                    <input
                      type="email"
                      required
                      autoFocus
                      placeholder="ENTER EMAIL ADDRESS"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent border-none text-xs text-text-primary placeholder:text-text-secondary/30 outline-none w-full font-bold tracking-wider uppercase focus:ring-0"
                    />
                  </div>

                  <button
                    type="submit"
<<<<<<< HEAD
                    disabled={isSubmitting}
                    className="bg-[#C1121F] hover:bg-[#C1121F]/90 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shrink-0 transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
=======
                    className="bg-[#C1121F] hover:bg-[#C1121F]/90 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shrink-0 cursor-pointer btn-tactile focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
>>>>>>> 8257dcc (feat: mobile responsive polish, smooth scroll, and layout refinements)
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'JOIN WAITLIST'}
                    {!isSubmitting && <ArrowRight size={14} className="stroke-[3px]" />}
                  </button>
                </motion.div>
              )}
            </motion.form>
          ) : (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-3 px-5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center gap-2 font-medium uppercase font-mono tracking-wider"
            >
              <Sparkles size={14} />
              Welcome to early access. Launching Q3 2026.
            </motion.div>
          )}
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="mt-4 text-[9px] text-text-secondary/30 font-mono uppercase tracking-widest select-none"
        >
          No spam. Cancel at any time. Secure waitlist logs.
        </motion.p>
      </motion.div>
    </section>
  );
}
