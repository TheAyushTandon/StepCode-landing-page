'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';

export default function Roadmap() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      iconSrc: '/roadmap-compass.png',
      description: 'Find the right path for your goals.',
    },
    {
      number: '02',
      title: 'Learn',
      iconSrc: '/roadmap-book.png',
      description: 'Master concepts with curated resources.',
    },
    {
      number: '03',
      title: 'Build',
      iconSrc: '/roadmap-code.png',
      description: 'Build projects and strengthen your skills.',
    },
    {
      number: '04',
      title: 'Launch',
      iconSrc: '/roadmap-rocket.png',
      description: 'Get placed and start your career.',
    },
  ];

  return (
    <section 
      id="roadmaps" 
      className="relative w-full py-36 md:py-48 z-20 overflow-visible"
    >
      {/* Overlapping Jagged Torn Paper Background */}
      <div 
        className="absolute -top-10 md:-top-16 -bottom-10 md:-bottom-16 left-0 right-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/torn-paper-bg.png')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10 text-center">
        
        {/* Section Headline */}
        <h2 className="font-heading font-black text-2xl md:text-3xl text-[#C1121F] uppercase tracking-wide mb-16 select-none">
          FOLLOW A PROVEN PATH
        </h2>

        {/* Timeline container */}
        <div className="relative flex flex-col md:flex-row justify-between items-start mt-8">

          {/* Steps and connecting lines */}
          {steps.map((step, idx) => (
            <Fragment key={step.number}>
              {idx > 0 && (
                /* Connecting line segment between items (visible only on desktop) */
                <div 
                  className="hidden md:block flex-1 h-[3px] bg-black z-0" 
                  style={{ marginTop: '42px' }} 
                />
              )}
              
              <div className="flex flex-col items-center text-center relative z-10 w-full md:w-[180px] shrink-0">
                {/* Icon Image Rendered Directly */}
                <div className="w-[84px] h-[84px] mb-4 hover:scale-110 transition-transform duration-200 select-none flex items-center justify-center">
                  <img src={step.iconSrc} alt={step.title} className="w-full h-full object-contain" />
                </div>

                {/* Step number */}
                <span className="font-mono text-xs font-bold text-black/50 mb-1">
                  {step.number}
                </span>

                {/* Step title */}
                <h3 className="font-heading font-black text-lg text-black mb-2 uppercase">
                  {step.title}
                </h3>

                {/* Step description in highlighted red text */}
                <p className="text-[#C1121F] text-xs font-bold leading-relaxed max-w-[180px]">
                  {step.description}
                </p>
              </div>
            </Fragment>
          ))}

        </div>

      </div>
    </section>
  );
}
