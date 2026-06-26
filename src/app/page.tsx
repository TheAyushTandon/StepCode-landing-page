'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col min-h-screen w-full"
        >
          <Navbar />
          <ScrollProgress />
          <main className="flex-grow w-full flex flex-col items-center justify-start">
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

