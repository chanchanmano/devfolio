import { motion } from "framer-motion";
import { PROJECTS } from "./constants";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <motion.p
      className=""
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex justify-between">
        {PROJECTS.map((project, index) => {
          return (
            <ProjectCard
              title={project?.title}
              content={project?.content}
              // @ts-ignore
              icons={project.icons}
              expandedContent=""
            />
          );
        })}
      </div>
    </motion.p>
  );
}

export default Projects;
