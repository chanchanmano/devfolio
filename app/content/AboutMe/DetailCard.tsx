const DETAIL_SECTIONS = [
  {
    label: "What I build",
    value:
      "Robust REST services, agentic AI systems, and backend workflows that reduce manual effort and hold up in production.",
  },
  {
    label: "Backend strengths",
    value:
      "Python, Django, Node.js, PostgreSQL/MySQL, Redis, and Elasticsearch for systems that need reliability, observability, and clean data flows.",
  },
  {
    label: "Agentic AI",
    value:
      "LangChain and LangGraph orchestration, agent memory frameworks, and evaluation systems, most recently built for SAP's Joule assistant.",
  },
  {
    label: "Current chapter",
    value:
      "I am pursuing a Master of Science in Computer Science at UC Davis (GPA 3.85/4, expected June 2027), focused on distributed database systems and machine learning, while researching real-time audio and observability for agentic AI systems.",
  },
  {
    label: "Open source",
    value:
      "Contributor to Apache ResilientDB (ReSQL), which graduated from the Apache Incubator to a top-level Apache project and was named among the ASF's top projects this year.",
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
          A full-stack engineer focused on dependable services and agentic AI systems.
        </h2>
        <p className="page-copy">
          I have 2.5 years of experience building production-scale healthcare
          SaaS at CrelioHealth, and most recently built agent memory,
          notification, and evaluation systems for SAP&apos;s Joule assistant
          as an AI Software Developer Intern. My work has included Django REST
          services, event-driven integrations, React interfaces,
          indexing-heavy upload pipelines, and workflow automation for
          diagnostic lab operations.
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
