import { Link } from "react-router";
import DynamicTitle from "./DynamicTitle";
import SocialLinks from "./SocialLinks";

const QUICK_FACTS = [
  {
    label: "Location",
    value: "Davis, California.",
  },
  {
    label: "Experience",
    value: "2.5 years building production-scale SaaS, plus an AI Software Developer internship at SAP.",
  },
  {
    label: "Graduate study",
    value: "M.S. in Computer Science at UC Davis (GPA 3.85/4), expected June 2027.",
  },
  {
    label: "Core stack",
    value: "Python, Django, Node.js, React, LangChain, LangGraph, PostgreSQL, Redis, Docker.",
  },
  {
    label: "Open source",
    value: "Contributor to Apache ResilientDB, a top-level Apache project named among the ASF's top projects this year.",
  },
];

function Hello() {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] lg:items-end">
      <div className="space-y-10">
        <div className="space-y-6">
          <p className="page-eyebrow">Software Engineer · Agentic AI · Davis, CA</p>
          <div className="space-y-4">
            <h1 className="page-title max-w-4xl">
              Building production software that stays reliable under real operational load.
            </h1>
            <p className="page-copy">
              I&apos;m Aryan Madhur Hamine, a UC Davis Computer Science graduate
              student with 2.5 years of experience shipping production
              healthcare-tech SaaS. I built agent memory, notification, and
              evaluation systems for SAP&apos;s Joule assistant, contribute to
              Apache ResilientDB, which graduated from the Apache Incubator to
              a top-level Apache project and was named among the ASF&apos;s top
              projects this year, and I&apos;m researching real-time audio and
              observability for agentic AI systems at UC Davis. My work spans
              REST services, event-driven integrations, data-intensive
              workflows, and full-stack applications using Python, Django,
              Node.js, React, LangChain, LangGraph, PostgreSQL/MySQL, Redis,
              Elasticsearch, and AWS.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="page-eyebrow">Currently leaning into</p>
          <DynamicTitle />
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/projects" className="button-primary">
            View projects
          </Link>
          <Link to="/aboutme" className="button-secondary">
            Learn more
          </Link>
          <a
            href="/Aryan-Hamine-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            Resume
          </a>
        </div>

        <SocialLinks />
      </div>

      <aside className="surface-card p-5 sm:p-6">
        <div className="overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface-strong)]">
          <img
            src="/hello-appmoji.png"
            alt="Illustrated avatar of Aryan"
            className="aspect-[4/5] w-full object-contain p-6"
          />
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {QUICK_FACTS.map((fact) => (
            <div key={fact.label} className="metric-card">
              <p className="metric-label">{fact.label}</p>
              <p className="metric-value">{fact.value}</p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default Hello;
