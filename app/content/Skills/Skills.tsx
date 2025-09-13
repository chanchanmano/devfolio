import styles from "./styles.module.css";
import classNames from "classnames/bind";
import { SKILLS_DETAILS } from "./constants";
import { motion } from "framer-motion";

const cx = classNames.bind(styles);

function Skills() {
  return (
    <motion.p
      className=""
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col space-y-10">
        {SKILLS_DETAILS.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center ${cx("skill-card")} p-8 space-x-10`}
          >
            <div className="text-3xl">{skill.skillCategory}</div>
            <div className="flex flex-wrap gap-6 items-center">
              {skill.toolIcons.map(({ Icon, name }, idx) => (
                <div key={idx} className="relative group">
                  <Icon
                    size={50}
                    className="transition-transform group-hover:scale-110"
                  />
                  <div className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-gray-800 text-white text-xs px-2 py-1 rounded-md transition-all z-10 whitespace-nowrap">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.p>
  );
}

export default Skills;
