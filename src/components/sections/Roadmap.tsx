'use client';

import { Fragment } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { 
  Github, 
  Code, 
  Target, 
  User, 
  Play, 
  FileText, 
  BookOpen, 
  Laptop, 
  Database, 
  Globe, 
  Building2, 
  Users, 
  Handshake 
} from 'lucide-react';

export default function Roadmap() {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      number: '01',
      title: 'AI Analyzes You',
      iconSrc: '/1.png',
      description: 'We analyze your GitHub, skills, goals, and experience to understand you better.',
      tabs: ['github', 'code', 'target', 'user'],
    },
    {
      number: '02',
      title: 'Your Personal Roadmap',
      iconSrc: '/2.png',
      description: 'We create a personalized roadmap with the exact skills, resources, and steps you need.',
      tabs: ['play', 'file-text', 'book-open'],
    },
    {
      number: '03',
      title: 'Build Real Projects',
      iconSrc: '/3.png',
      description: 'Work on industry-grade projects that strengthen your skills and build your portfolio.',
      tabs: ['laptop', 'database', 'globe'],
    },
    {
      number: '04',
      title: 'Get Discovered',
      iconSrc: '/4.png',
      description: 'Get discovered by top companies through verified skills and real project experience.',
      tabs: ['building', 'users', 'handshake'],
    },
  ];

  const renderTabIcon = (tabName: string) => {
    const iconProps = { className: "w-4 h-4 text-black/60 group-hover:text-[#C1121F] transition-colors duration-200" };
    switch (tabName) {
      case 'github': return <Github {...iconProps} />;
      case 'code': return <Code {...iconProps} />;
      case 'target': return <Target {...iconProps} />;
      case 'user': return <User {...iconProps} />;
      case 'play': return <Play {...iconProps} />;
      case 'file-text': return <FileText {...iconProps} />;
      case 'book-open': return <BookOpen {...iconProps} />;
      case 'laptop': return <Laptop {...iconProps} />;
      case 'database': return <Database {...iconProps} />;
      case 'globe': return <Globe {...iconProps} />;
      case 'building': return <Building2 {...iconProps} />;
      case 'users': return <Users {...iconProps} />;
      case 'handshake': return <Handshake {...iconProps} />;
      default: return null;
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 }
    }
  };

  return (
    <section 
      id="roadmaps" 
      className="scroll-mt-24 relative w-full pt-56 pb-72 md:py-48 z-20"
    >
      {/* Overlapping Jagged Torn Paper Background */}
      <div 
        className="absolute -top-8 md:-top-16 -bottom-64 md:-bottom-16 left-0 right-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/torn-paper-bg.png')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="max-w-[1350px] w-full mx-auto px-6 relative z-10 text-center pt-20 md:pt-0">
        
        {/* Section Headline */}
        <div className="flex flex-col items-center mb-28 mt-36 md:mt-0 md:mb-20 select-none">
          <motion.h2 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-2xl md:text-3xl text-black uppercase tracking-wide relative inline-block pb-3"
          >
            How <span className="text-[#C1121F]">StepCode</span> Works
            {/* Red Underline Doodle */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#C1121F] rounded-full" />
          </motion.h2>
        </div>

        {/* Timeline container with scroll reveal stagger */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative flex flex-col md:flex-row justify-between items-start mt-8 w-full"
        >

          {/* Steps and connecting lines */}
          {steps.map((step, idx) => (
            <Fragment key={step.number}>
              {idx > 0 && (
                /* Connecting dashed line with start circle and arrowhead (visible only on desktop) */
                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.12 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden md:flex flex-1 items-center z-0 origin-left mx-2 h-[260px]"
                >
                  {/* Start hollow circle */}
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-black bg-white shrink-0" />
                  {/* Dashed line */}
                  <div className="flex-1 h-0 border-t-2 border-dashed border-black" />
                  {/* Arrowhead */}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 -ml-1">
                    <path d="M 2 2 L 10 6 L 2 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              )}
              
              <motion.div 
                variants={itemVariants}
                className={`flex items-center relative z-10 w-full md:w-[200px] shrink-0 gap-4 md:gap-0 mb-16 last:mb-0 md:mb-0 ${
                  idx % 2 === 0 ? 'flex-row text-left' : 'flex-row-reverse text-right'
                } md:flex-col md:text-center`}
              >
                {/* Icon Image Rendered Directly */}
                <div className="w-[170px] h-[170px] md:w-[260px] md:h-[260px] mb-0 md:mb-4 hover:scale-110 active:scale-95 transition-transform duration-200 select-none flex items-center justify-center cursor-pointer shrink-0">
                  <img src={step.iconSrc} alt={step.title} className="w-full h-full object-contain" loading="lazy" />
                </div>

                {/* Content Column */}
                <div className={`flex flex-col ${
                  idx % 2 === 0 ? 'items-start' : 'items-end'
                } md:items-center flex-1 min-w-0`}>
                  {/* Step number */}
                  <span className="font-mono text-xs font-bold text-[#C1121F] mb-1">
                    {step.number}
                  </span>

                  {/* Step title */}
                  <h3 className="font-heading font-black text-lg text-black mb-2 uppercase">
                    {step.title}
                  </h3>

                  {/* Step description in highlighted black/grey text */}
                  <p className="text-black/75 text-xs font-medium leading-relaxed max-w-[140px] md:max-w-[180px]">
                    {step.description}
                  </p>

                  {/* Interactive Icon Tabs Capsule */}
                  <div className="mt-4 bg-white border border-black/10 rounded-xl shadow-sm px-3 py-1.5 flex items-center justify-center gap-3 hover:border-black/25 hover:shadow transition-all duration-300">
                    {step.tabs.map((tab) => (
                      <motion.div
                        key={tab}
                        whileHover={{ scale: 1.25 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer group"
                      >
                        {renderTabIcon(tab)}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Fragment>
          ))}

        </motion.div>

      </div>
    </section>
  );
}
