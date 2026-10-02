import type { Project } from "./constants";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-card flex h-full flex-col justify-between gap-8 p-6 sm:p-8">
      <div className="space-y-4">
        <p className="page-eyebrow">{project.category}</p>
        <h3 className="text-2xl font-semibold tracking-[-0.05em]">
          {project.title}
        </h3>
        <p className="page-copy max-w-none text-[1rem]">{project.content}</p>
        <p className="page-copy max-w-none text-[0.98rem]">
          {project.expandedContent}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {project.icons.map((Icon, index) => (
          <span key={`${project.title}-${index}`} className="icon-pill">
            <Icon size={20} />
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
