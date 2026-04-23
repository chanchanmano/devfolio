import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const dynamicTitles = [
  "Software Engineer",
  "Backend Builder",
  "Full Stack Developer",
  "System Thinker",
  "Problem Solver",
  "Lifelong Student",
];

function DynamicTitle() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % dynamicTitles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[3.5rem]" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.p
          key={activeIndex}
          className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          {dynamicTitles[activeIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default DynamicTitle;
