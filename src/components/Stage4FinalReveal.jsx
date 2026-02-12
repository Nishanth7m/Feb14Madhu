import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export function Stage4FinalReveal() {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(true);

    // Simple confetti burst
    confetti({
      particleCount: 160,
      spread: 80,
      origin: { y: 0.6 },
      scalar: 1.1,
      colors: ["#0ea5e9", "#38bdf8", "#7dd3fc", "#facc6b", "#fef3c7"],
    });
  };

  return (
    <section
      id="plan"
      className="relative pt-14 sm:pt-16 pb-28 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <div className="mb-8 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-slate-900">
          The Final Reveal
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          A little shimmering secret waiting at the end of it all.
        </p>
      </div>

      <div className="flex justify-center">
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          animate={{
            scale: [1, 1.06, 1],
            boxShadow: [
              "0 0 0 0 rgba(250, 204, 21, 0.35)",
              "0 0 0 12px rgba(250, 204, 21, 0)",
              "0 0 0 0 rgba(250, 204, 21, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="gold-gradient text-sm sm:text-base font-semibold text-slate-900 rounded-full px-7 py-3 sm:px-9 sm:py-3.5 border border-amber-300/70"
        >
          Our Valentine&apos;s Plan
        </motion.button>
      </div>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-xl mx-auto glass-panel rounded-3xl p-6 sm:p-7 text-center"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-sky-500 mb-3">
              Surprise
            </p>
            <h3 className="font-display text-xl sm:text-2xl text-slate-900 mb-3">
              Traveling to{" "}
              <span className="text-sky-600">“Murugan Temple”</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-700 mb-4">
              then a movie or a quiet park{" "}
              <span className="font-semibold text-sky-600">
                wherever you feel happiest
              </span>
              , just the two of us, letting the whole day belong to us.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

