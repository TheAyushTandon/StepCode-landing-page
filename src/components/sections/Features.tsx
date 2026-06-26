'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
  bgTitle: string;
  features: {
    label: string;
    options: string[];
  }[];
  btnText: string;
  themeColor: string;
  index: number;
}

function FeatureCard({ iconSrc, title, description, bgTitle, features, btnText, themeColor, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ type: 'spring', stiffness: 80, damping: 15, delay: index * 0.1 }}
      className="stepcode-card-container z-10"
    >
      <div 
        className="stepcode-card" 
        style={{ '--card-theme-color': themeColor } as React.CSSProperties}
      >
        <div className="photo">
          <img src={iconSrc} alt={title} />
        </div>
        
        <div className="content">
          <div className="title">{title}</div>
          <div className="bg-title">{bgTitle}</div>
          
          {features.map((feat, fIdx) => (
            <div key={fIdx} className="feature">
              <div>{feat.label}:</div>
              {feat.options.map((opt, oIdx) => (
                <span key={oIdx}>{opt}</span>
              ))}
            </div>
          ))}
          
          <button className="btn-action">{btnText}</button>
        </div>
      </div>
    </motion.div>
  );
}

const StarDivider = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#C1121F] mx-8 shrink-0 self-center opacity-75" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

export default function Features() {
  const featuresList = [
    {
      iconSrc: '/card-book.png',
      title: 'Structured Roadmaps',
      description: 'Follow proven paths designed by experts.',
      bgTitle: 'AIM',
      themeColor: '#C1121F',
      btnText: 'Start Learning',
      features: [
        { label: 'lvl', options: ['beg', 'int', 'adv'] },
        { label: 'track', options: ['fe', 'be', 'sys'] }
      ]
    },
    {
      iconSrc: '/card-code.png',
      title: 'Real Projects',
      description: 'Build industry ready projects for your portfolio.',
      bgTitle: 'BUILD',
      themeColor: '#C1121F',
      btnText: 'Build Now',
      features: [
        { label: 'stack', options: ['react', 'next', 'node'] },
        { label: 'diff', options: ['easy', 'med', 'hard'] }
      ]
    },
    {
      iconSrc: '/card-users.png',
      title: 'Mentorship',
      description: "Learn from mentors who've been there.",
      bgTitle: 'GROW',
      themeColor: '#C1121F',
      btnText: 'Get Mentored',
      features: [
        { label: 'type', options: ['1-1', 'slack', 'q&a'] },
        { label: 'help', options: ['24/7'] }
      ]
    },
    {
      iconSrc: '/card-briefcase.png',
      title: 'Placement Support',
      description: 'Get resume reviews, interviews, and more.',
      bgTitle: 'HIRE',
      themeColor: '#C1121F',
      btnText: 'Get Hired',
      features: [
        { label: 'prep', options: ['cv', 'mock', 'ref'] },
        { label: 'port', options: ['full'] }
      ]
    },
  ];

  const marqueeItems = [
    "Structured Roadmaps",
    "Real-World Projects",
    "1-on-1 Mentorship",
    "Placement Support",
    "Curated DSA Sheets",
    "Resume Reviews",
    "Mock Interviews",
    "Portfolio Builders",
  ];

  return (
    <section id="projects" className="relative w-full pt-16 pb-28 bg-[#080808] overflow-hidden">
      
      {/* Infinite Loop Marquee */}
      <div className="w-full overflow-hidden bg-[#0d0d0d] border-y border-white/5 py-5 mb-24 relative z-20 flex select-none">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-pointer">
          {/* First set */}
          {marqueeItems.map((item, idx) => (
            <div key={`first-${idx}`} className="flex items-center">
              <span className="text-white/40 font-heading font-black text-sm uppercase tracking-[0.2em]">{item}</span>
              <StarDivider />
            </div>
          ))}
          {/* Second set for seamless loop */}
          {marqueeItems.map((item, idx) => (
            <div key={`second-${idx}`} className="flex items-center">
              <span className="text-white/40 font-heading font-black text-sm uppercase tracking-[0.2em]">{item}</span>
              <StarDivider />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Headline */}
        <h2 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase mb-20 text-center">
          Everything You Need, <span className="text-[#C1121F]">All in One Place.</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
              bgTitle={feature.bgTitle}
              features={feature.features}
              btnText={feature.btnText}
              themeColor={feature.themeColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
