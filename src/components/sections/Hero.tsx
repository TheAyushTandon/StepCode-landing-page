'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 pt-32 pb-16 overflow-hidden"
    >
      
      {/* Liquid Ambient Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C1121F]/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-white/2 blur-[100px] pointer-events-none z-0" />

      {/* Background Tilted Doodle in the center (Desktop only) */}
      <div 
        className="hidden lg:flex absolute inset-0 justify-center items-center pointer-events-none z-0 overflow-hidden opacity-80"
      >
        <Image 
          src="/clean-center-doodle.png" 
          alt="StepCode Journey Doodle" 
          width={1350}
          height={800}
          priority
          className="w-full max-w-[1250px] xl:max-w-[1350px] h-auto object-contain select-none translate-y-35 -translate-x-8" 
        />
      </div>

      {/* Main Grid Layout matching the mockup */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:min-h-[580px] items-stretch relative z-10 my-auto">
        
        {/* Left Side: Questioning Headings (Cleaned-up Line breaks & Size) */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex flex-col justify-start text-left lg:self-start lg:pt-4 z-10"
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.3rem] xl:text-[2.8rem] text-white tracking-tight leading-[1.2] lg:leading-[1.25] uppercase">
            <span className="block font-semibold md:whitespace-nowrap">You're working hard.</span>
            <span className="block font-semibold md:whitespace-nowrap">But are you learning</span>
            <span className="block text-[#C1121F] font-black md:whitespace-nowrap">the Right Skills?</span>
          </h1>
        </motion.div>

        {/* Mobile-only Journey Doodle (Renders between columns on smaller viewports) */}
        <div className="flex lg:hidden justify-center items-center pointer-events-none z-0 py-2 opacity-60">
          <Image 
            src="/clean-center-doodle.png" 
            alt="StepCode Journey Doodle" 
            width={450}
            height={270}
            priority
            className="w-full max-w-[340px] h-auto object-contain select-none" 
          />
        </div>

        {/* Right Side: Career Destination Headings (Cleaned-up Line breaks & Size) */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col justify-end text-left lg:text-right lg:self-end lg:pb-0 z-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.3rem] xl:text-[2.8rem] text-white tracking-tight leading-[1.2] lg:leading-[1.25] lg:translate-y-20 uppercase">
            <span className="block font-semibold md:whitespace-nowrap">StepCode helps you build</span>
            <span className="block font-semibold md:whitespace-nowrap">skills & projects that</span>
            <span className="block text-[#C1121F] font-black md:whitespace-nowrap">Get You Hired.</span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
