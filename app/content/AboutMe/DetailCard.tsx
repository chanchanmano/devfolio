const DETAIL_SECTIONS = [
  {
    label: "What I build",
    value:
      "Robust REST services, full-stack applications, and backend workflows that reduce manual effort and hold up in production.",
  },
  {
    label: "Backend strengths",
    value:
      "Python, Django, Node.js, PostgreSQL/MySQL, Redis, and Elasticsearch for systems that need reliability, observability, and clean data flows.",
  },
  {
    label: "Current chapter",
    value:
      "I am currently pursuing a Master of Science in Computer Science at the University of California, Davis, expected in June 2027.",
  },
  {
    label: "How I like to work",
    value:
      "I tend to enjoy systems with clear ownership, thoughtful abstractions, event-driven integrations, and product decisions grounded in real operator needs.",
  },
];

export default function DetailCard() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="page-eyebrow">About</p>
        <h2 className="page-heading max-w-3xl">
          A full-stack engineer focused on dependable services and practical product systems.
        </h2>
        <p className="page-copy">
          I have 2.5 years of experience building production-scale SaaS, most
          recently at CrelioHealth. My work has included Django REST services,
          event-driven integrations, React interfaces, indexing-heavy upload
          pipelines, and workflow automation for diagnostic lab operations.
        </p>
      </div>

      <div className="surface-card p-6 sm:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          {DETAIL_SECTIONS.map((section) => (
            <div key={section.label} className="space-y-2">
              <p className="metric-label">{section.label}</p>
              <p className="page-copy max-w-none text-[0.98rem]">
                {section.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
