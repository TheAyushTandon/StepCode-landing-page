'use client';

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Loader from "@/components/layout/Loader";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Roadmap from "@/components/sections/Roadmap";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col min-h-screen w-full overflow-x-hidden"
        >
          <Navbar />
          <ScrollProgress />
          <main className="flex-grow w-full flex flex-col items-center justify-start overflow-x-hidden">
            <Hero />
            <Features />
            <Roadmap />
            <CTA />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

