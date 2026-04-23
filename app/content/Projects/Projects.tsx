import { motion } from "framer-motion";
import { PROJECTS } from "./constants";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <p className="page-eyebrow">Projects</p>
        <h2 className="page-heading max-w-4xl">
          Work centered on reliability, real users, and operational clarity.
        </h2>
        <p className="page-copy">
          A mix of healthcare-oriented products, systems experiments, and tools
          built to make difficult workflows simpler to trust and maintain.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
