import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const dissolveVariants = {
  initial: { opacity: 1, filter: "blur(0px)", scale: 1 },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(12px)",
    transition: { duration: 0.9, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export function Stage1Gatekeeper({ onUnlock, isVisible }) {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [celebrating, setCelebrating] = useState(false);

  // handleUnlock: change the expected answer string here
  const handleUnlock = (e) => {
    e.preventDefault();
    const normalized = answer.trim().toLowerCase();

    // TODO: Replace "coffee shop" with your real inside-joke answer
    const correctAnswer = "coffee day";

    if (normalized === correctAnswer.toLowerCase()) {
      setError("");
      setCelebrating(true);

      // Little blue-heart confetti burst
      confetti({
        particleCount: 130,
        spread: 70,
        origin: { y: 0.4 },
        scalar: 0.9,
        colors: ["#0ea5e9", "#38bdf8", "#e0f2fe", "#facc15"],
      });

      // Give her a few seconds to see the appreciation before moving on
      setTimeout(() => {
        onUnlock();
      }, 4000);

      return;
    }

    // Cycle through gentle hint messages on every wrong attempt
    const hints = [
      "Did you forget? Think of the very first place our story started.",
      "Go back to our days and replay that first moment in your head.",
      "Close your eyes and picture where you first saw me.",
    ];

    setError(hints[attempt % hints.length]);
    setAttempt(attempt + 1);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-sky-100 via-sky-50 to-white"
      variants={dissolveVariants}
      initial="initial"
      animate="initial"
      exit="exit"
    >
      <div className="px-6">
        <div className="glass-panel max-w-xl mx-auto rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center space-y-6">
          <p className="text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase text-sky-600">
            Welcome Maha
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight">
            One Secret Question
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-md">
            To step into our little universe, you have to remember{" "}
            <span className="font-semibold text-sky-600">
              where it all truly began.
            </span>
          </p>
          <p className="text-xs sm:text-sm text-sky-500/90 max-w-md">
            This Heart Message from Nishanth 💙🦄
          </p>

          <form
            onSubmit={handleUnlock}
            className="w-full space-y-4 sm:space-y-5 mt-2"
          >
            <label className="block text-xs font-medium tracking-[0.24em] uppercase text-slate-500 text-left">
              Where was the first place we met?
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full rounded-2xl border border-sky-200 bg-white/80 px-4 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent placeholder:text-slate-400"
              placeholder="Type the place here..."
            />

            {error && !celebrating && (
              <p className="text-xs text-sky-600 text-left">{error}</p>
            )}

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-sky-500 px-5 py-3 text-sm sm:text-base font-medium text-white shadow-soft shadow-sky-300/50 hover:bg-sky-600 transition"
            >
              Unlock our Valentine&apos;s world
            </motion.button>

            {celebrating && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex flex-col items-center space-y-2"
              >
                <div className="flex gap-2 text-sky-400 text-lg">
                  <motion.span
                    initial={{ y: 4, scale: 0.9 }}
                    animate={{ y: [-2, 2, -2], scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ♥
                  </motion.span>
                  <motion.span
                    initial={{ y: -2, scale: 0.9 }}
                    animate={{ y: [2, -2, 2], scale: [1.05, 1, 1.05] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  >
                    ♥
                  </motion.span>
                  <motion.span
                    initial={{ y: 3, scale: 0.9 }}
                    animate={{ y: [-1, 3, -1], scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  >
                    ♥
                  </motion.span>
                </div>
                <p className="text-sm text-sky-700 font-medium">
                  I knew you&apos;d never forget that. Scroll down and see what&apos;s next.
                </p>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
}

