import React from "react";
import { motion } from "framer-motion";

const hearts = [
  { id: 1, left: "10%", size: 24, delay: 0 },
  { id: 2, left: "30%", size: 18, delay: 1.4 },
  { id: 3, left: "55%", size: 28, delay: 0.7 },
  { id: 4, left: "72%", size: 20, delay: 2.1 },
  { id: 5, left: "85%", size: 16, delay: 0.3 },
  { id: 6, left: "18%", size: 14, delay: 2.8 },
  { id: 7, left: "45%", size: 22, delay: 0.5 },
  { id: 8, left: "68%", size: 16, delay: 1.8 },
  { id: 9, left: "92%", size: 20, delay: 1.1 },
];

const unicorns = [
  { id: "u1", left: "22%", size: 26, delay: 1.2 },
  { id: "u2", left: "60%", size: 30, delay: 2.4 },
  { id: "u3", left: "80%", size: 24, delay: 0.9 },
];

export function FloatingHeartsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-sky-400"
          style={{ left: heart.left, bottom: "-80px", fontSize: heart.size }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: -280,
            opacity: [0, 1, 0.95, 0],
          }}
          transition={{
            duration: 14 + heart.id * 0.5,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>♥</span>
        </motion.div>
      ))}

      {unicorns.map((uni, index) => (
        <motion.div
          key={uni.id}
          className="absolute text-sky-500"
          style={{ left: uni.left, bottom: "-90px", fontSize: uni.size }}
          initial={{ y: 0, opacity: 0, rotate: -8 }}
          animate={{
            y: -300,
            opacity: [0, 1, 0.95, 0],
            rotate: [-8, 6, -4],
          }}
          transition={{
            duration: 18 + index * 2,
            delay: uni.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>🦄</span>
        </motion.div>
      ))}
    </div>
  );
}

