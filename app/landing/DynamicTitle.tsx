import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const dynamicTitles: string[] = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Developer",
  "Problem-Solver",
  "Tennis Enthusiast",
  "Life Student",
];

function DynamicTitle() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % dynamicTitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      key={activeIndex} // Ensures animation runs when text changes
      className="ml-8 text-6xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {dynamicTitles[activeIndex]}
    </motion.p>
  );
}

export default DynamicTitle;
