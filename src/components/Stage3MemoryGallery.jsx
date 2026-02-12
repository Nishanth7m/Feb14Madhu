import React from "react";
import { motion } from "framer-motion";

const memories = [
  {
    id: 1,
    src: "/images/hand-memory-1.png",
    title: "Only your hand can stop my trembling",
    caption:
      "My hands were trembling, a physical manifestation of everything I couldn't put into words. But the second your fingers interlaced with mine, the shaking stopped.",
    heightClass: "h-52 sm:h-64",
  },
  {
    id: 2,
    src: "/images/first-selfie-2.png",
    title: "This is our first selfie.",
    caption:
      "Not a place or a building, but a specific seat on a moving bus. The feeling of a trembling hand finally finding stillness inside of hers. Our first selfie where the world outside is blurred, but everything inside the frame is perfectly clear.",
    heightClass: "h-64 sm:h-72",
  },
  {
    id: 3,
    src: "/images/park-memory-3.png",
    title: "This is the unforgettable incident as we talked a lot .",
    caption:
      "The act of breathing. A silent exchange between two souls when words are no longer enough. That moment on our first journey where your lips became my oxygen, turning my shivering nerves into a deep, steady peace.",
    heightClass: "h-72 sm:h-80",
  },
  {
    id: 4,
    src: "/images/second-trip-4.png",
    title: "I need to travel with you forever.",
    caption:
      "The act of passing from one place to another. A journey that has no final stop. My lifelong commitment to sitting by your side, sharing the same air, and keeping our hands intertwined through every turn the road takes.",
    heightClass: "h-60 sm:h-72",
  },
  {
    id: 5,
    src: "/images/paapa-memory-5.png",
    title: "You saved my number with this image.",
    caption:
      "The moment I realized I was more than just a name to you. You saved me as 'Paapa,' and in that one word, you gave me a reason to be strong.",
    heightClass: "h-64 sm:h-72",
  },
  {
    id: 6,
    src: "/images/bus-memory-6.png",
    title: "While this travel you placed a hickey on my neck.",
    caption:
      "That mark you left on my neck—it’s more than just a love bite; it’s a silent signature. It’s your way of saying that I belong to you, just as much as you belong to me.",
    heightClass: "h-52 sm:h-60",
  },
];

export function Stage3MemoryGallery() {
  return (
    <section
      id="memories"
      className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-slate-900">
            Memory Flip Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
            Hover (or tap on mobile) to flip each moment and read the little
            caption behind it.
          </p>
        </div>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            className="mb-4 break-inside-avoid"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="flip-card rounded-3xl overflow-hidden bg-transparent">
              <div className="flip-inner">
                <div className="flip-front relative">
                  <div
                    className={`relative ${memory.heightClass} w-full overflow-hidden bg-slate-200`}
                  >
                    <img
                      src={memory.src}
                      alt={memory.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-xs tracking-[0.2em] uppercase text-sky-200 mb-1">
                        Memory
                      </p>
                      <h3 className="font-display text-sm sm:text-base text-white">
                        {memory.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flip-back absolute inset-0">
                  <div
                    className={`relative ${memory.heightClass} w-full bg-gradient-to-b from-sky-50 to-white flex flex-col justify-between p-4 sm:p-5`}
                  >
                    <div>
                      <p className="text-xs tracking-[0.3em] uppercase text-sky-500 mb-2">
                        The story behind it
                      </p>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {memory.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

