import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flowers = [
  {
    id: "rose",
    name: "Rose",
    reason: "Because you turned ordinary days into something quietly, impossibly romantic.",
    color: "from-sky-100 to-sky-50",
  },
  {
    id: "tulip",
    name: "Tulip",
    reason: "Because you are soft and steady, the kind of love that feels like coming home.",
    color: "from-sky-50 to-blue-50",
  },
  {
    id: "sunflower",
    name: "Sunflower",
    reason: "Because you always find a way to tilt everything toward the light.",
    color: "from-sky-100 to-sky-50",
  },
  {
    id: "orchid",
    name: "Orchid",
    reason: "Because there’s a quiet, rare kind of beauty in the way you exist in the world.",
    color: "from-blue-50 to-sky-50",
  },
  {
    id: "peony",
    name: "Peony",
    reason: "Because your laugh, your eyes, your presence—everything about you feels effortlessly full and soft.",
    color: "from-sky-100 to-white",
  },
  {
    id: "lilac",
    name: "Lilac",
    reason: "Because even the smallest moments with you are scented with something gentle and unforgettable.",
    color: "from-sky-50 to-blue-50",
  },
];

const modalVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: 14,
    scale: 0.98,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

function FlowerIcon({ id }) {
  // Minimalist SVGs with slightly different silhouettes
  const stroke = "#0ea5e9";
  const fill = "none";

  switch (id) {
    case "rose":
      return (
        <svg viewBox="0 0 64 64" className="w-10 h-10">
          <g stroke={stroke} strokeWidth="1.8" fill={fill} strokeLinecap="round">
            <path d="M20 25c4-7 9-9 13-9 7 0 11 5 11 11 0 7-5 13-13 13S18 33 18 27c0-1 .1-1.9.3-2.8" />
            <path d="M32 40c0 7-1 13-7 18" />
            <path d="M32 40c1 5 4 11 9 16" />
            <path d="M22 48c3-1 6-1 10-1 4 0 7 0 10 1" />
          </g>
        </svg>
      );
    case "tulip":
      return (
        <svg viewBox="0 0 64 64" className="w-10 h-10">
          <g stroke={stroke} strokeWidth="1.8" fill={fill} strokeLinecap="round">
            <path d="M22 18c0 10 4 17 10 17s10-7 10-17l-4 3-3-4-3 4-3-4-3 4z" />
            <path d="M32 35c0 6-1 14-7 19" />
            <path d="M32 35c1 6 4 12 9 17" />
            <path d="M24 46c2-1 5-2 8-2s6 1 8 2" />
          </g>
        </svg>
      );
    case "sunflower":
      return (
        <svg viewBox="0 0 64 64" className="w-10 h-10">
          <g stroke={stroke} strokeWidth="1.8" fill={fill} strokeLinecap="round">
            <circle cx="32" cy="24" r="7" />
            <path d="M32 12l3 4-3 2-3-2z" />
            <path d="M44 24l-4 3-2-3 2-3z" />
            <path d="M32 36l-3-4 3-2 3 2z" />
            <path d="M20 24l4-3 2 3-2 3z" />
            <path d="M32 31c0 6-1 14-7 19" />
            <path d="M32 31c1 6 4 12 9 17" />
            <path d="M24 42c2-1 5-2 8-2s6 1 8 2" />
          </g>
        </svg>
      );
    case "orchid":
      return (
        <svg viewBox="0 0 64 64" className="w-10 h-10">
          <g stroke={stroke} strokeWidth="1.8" fill={fill} strokeLinecap="round">
            <path d="M32 18c-2 0-4 2-4 4 0 3 2 5 4 5s4-2 4-5c0-2-2-4-4-4z" />
            <path d="M26 24c-3-3-7-3-9-1-2 2-1 5 2 7 3 2 7 2 9-1" />
            <path d="M38 24c3-3 7-3 9-1 2 2 1 5-2 7-3 2-7 2-9-1" />
            <path d="M32 27c0 6-1 14-7 19" />
            <path d="M32 27c1 6 4 12 9 17" />
          </g>
        </svg>
      );
    case "peony":
      return (
        <svg viewBox="0 0 64 64" className="w-10 h-10">
          <g stroke={stroke} strokeWidth="1.8" fill={fill} strokeLinecap="round">
            <path d="M24 26c0-5 3-9 8-9s8 4 8 9-3 9-8 9-8-4-8-9z" />
            <path d="M22 26c-1-7 3-12 10-12 7 0 11 5 10 12" />
            <path d="M32 35c0 6-1 14-7 19" />
            <path d="M32 35c1 6 4 12 9 17" />
            <path d="M24 46c2-1 5-2 8-2s6 1 8 2" />
          </g>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" className="w-10 h-10">
          <g stroke={stroke} strokeWidth="1.8" fill={fill} strokeLinecap="round">
            <path d="M24 24c0-4 3-7 8-7s8 3 8 7-3 7-8 7-8-3-8-7z" />
            <path d="M32 31c0 6-1 14-7 19" />
            <path d="M32 31c1 6 4 12 9 17" />
          </g>
        </svg>
      );
  }
}

export function Stage2Bouquet() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="bouquet"
      className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-slate-900">
            Pick a Flower
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
            Every bloom hides a little sentence about why you are my favorite
            human.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        {flowers.map((flower) => (
          <motion.button
            key={flower.id}
            onClick={() => setSelected(flower)}
            whileHover={{ y: -6, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-sky-50/80 border border-sky-200/80 px-3 py-4 sm:px-4 sm:py-5 flex flex-col items-center text-center cursor-pointer"
          >
            <motion.div
              layoutId={`flower-${flower.id}-icon`}
              className="mb-3 text-sky-500"
            >
              <FlowerIcon id={flower.id} />
            </motion.div>
            <span className="text-xs sm:text-sm font-medium text-slate-800">
              {flower.name}
            </span>
            <span className="mt-1 text-[10px] tracking-[0.24em] uppercase text-sky-500/80">
              Tap to bloom
            </span>

            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-sky-50/60 via-transparent to-sky-200/40" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/25 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className={`glass-panel max-w-md w-full rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${selected.color}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div layoutId={`flower-${selected.id}-icon`}>
                  <FlowerIcon id={selected.id} />
                </motion.div>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-sky-500">
                    {selected.name}
                  </p>
                  <h3 className="font-display text-xl text-slate-900">
                    Why I love you (one of many)
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {selected.reason}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="mt-5 inline-flex text-xs sm:text-sm font-medium text-sky-600 hover:text-sky-700"
              >
                Close and pick another
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

