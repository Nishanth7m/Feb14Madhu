import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Stage1Gatekeeper } from "./components/Stage1Gatekeeper";
import { Stage2Bouquet } from "./components/Stage2Bouquet";
import { Stage3MemoryGallery } from "./components/Stage3MemoryGallery";
import { Stage4FinalReveal } from "./components/Stage4FinalReveal";
import { FloatingHeartsBackground } from "./components/FloatingHeartsBackground";

function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-50/50 to-white text-slate-800 soft-scrollbar">
      <FloatingHeartsBackground />

      <AnimatePresence>
        {!unlocked && (
          <Stage1Gatekeeper
            key="gatekeeper"
            isVisible={!unlocked}
            onUnlock={() => setUnlocked(true)}
          />
        )}
      </AnimatePresence>

      <main className="relative z-0">
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-6 sm:pt-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex items-center justify-between gap-4"
        >
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-sky-500">
              Our Valentine&apos;s Day
            </p>
            <h1 className="font-display text-2xl sm:text-3xl text-slate-900 mt-1">
              A little world just for us
            </h1>
          </div>
          <nav className="hidden sm:flex items-center gap-4 text-xs text-slate-500">
            <a href="#bouquet" className="hover:text-sky-500 transition">
              Flowers
            </a>
            <a href="#memories" className="hover:text-sky-500 transition">
              Memories
            </a>
            <a href="#plan" className="hover:text-sky-500 transition">
              Plan
            </a>
          </nav>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-8 sm:mt-10"
        >
          <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
            <div className="flex-1">
              <p className="text-xs tracking-[0.32em] uppercase text-sky-500 mb-2">
                Welcome
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-slate-900 mb-3">
                A soft little timeline of us.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                I wanted to gather a few of our favorite things—flowers that
                feel like you, memories I don&apos;t want to forget, and the
                plan for tonight—into one quiet, gentle place. It&apos;s just
                us here.
              </p>
            </div>

            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center">
              <motion.div
                aria-hidden="true"
                className="text-sky-500"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="block text-5xl sm:text-6xl md:text-7xl drop-shadow-md">
                  ♥
                </span>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <Stage2Bouquet />
        <Stage3MemoryGallery />
        <Stage4FinalReveal />

        <footer className="mt-10 sm:mt-14 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto border-t border-sky-100 pt-5 sm:pt-6 flex justify-center">
            <p className="text-[11px] sm:text-xs tracking-[0.18em] uppercase text-slate-500 text-center">
              Nishanth <span className="text-sky-500">💙</span> Maha · March 15 2024 · ∞
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

