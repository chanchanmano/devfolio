import { motion } from "framer-motion";
import { SKILLS_DETAILS } from "./constants";

function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <p className="page-eyebrow">Skills</p>
        <h2 className="page-heading max-w-4xl">
          Tools I reach for when the product, team, and scale demand them.
        </h2>
        <p className="page-copy">
          Most of my work spans backend services, product-facing UI, data
          stores, and deployment support around them.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {SKILLS_DETAILS.map((skill) => (
          <section key={skill.skillCategory} className="surface-card p-6 sm:p-8">
            <p className="page-eyebrow">{skill.skillCategory}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skill.toolIcons.map(({ Icon, name }) => (
                <div key={name} className="label-chip">
                  <Icon size={18} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
