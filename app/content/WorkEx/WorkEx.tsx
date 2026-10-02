import type { ComponentType } from "react";
import {
  AWS,
  Django,
  Docker,
  Elastic,
  ExpressJsLight,
  Git,
  HTML5,
  JavaScript,
  MongoDB,
  MySQL,
  NodeJs,
  PostgreSQL,
  Python,
  React,
  Redis,
} from "developer-icons";
import { motion } from "framer-motion";

type IconComponent = ComponentType<Record<string, unknown>>;

type WorkExperience = {
  company: string;
  role: string;
  duration: string;
  skills: IconComponent[];
  description: string[];
};

const workExperience: WorkExperience[] = [
  {
    company: "SAP, Palo Alto, CA, USA",
    role: "AI Software Developer Intern",
    duration: "July 2026 - September 2026",
    skills: [Python, Git],
    description: [
      "Architected an autonomous LangGraph batch notification pipeline on the Joule learning assistant that processes learner data uploads through a two-tier orchestration graph, handles each learner in parallel, and reliably delivers notifications through a retry-backed sender with exponential backoff.",
      "Designed a reusable memory framework on HANA Cloud that gives the AI agent persistent, tenant-isolated storage with content-hash keying and freshness control, exposed through LangChain tools for cross-conversation recall of user preferences.",
      "Raised the agent's automated test pass rate from 16% to 94% by fixing cases blocking the CI/CD pipeline, benchmarked frontier models, and hardened safety guardrails against out-of-scope responses by reworking the system prompt.",
    ],
  },
  {
    company: "CrelioHealth, Pune, India",
    role: "Software Engineer (SDE-II)",
    duration: "April 2023 - August 2025",
    skills: [
      AWS,
      Django,
      Docker,
      Elastic,
      JavaScript,
      MySQL,
      MongoDB,
      PostgreSQL,
      Python,
      React,
      Redis,
    ],
    description: [
      "Engineered Storage Manager, a unified Django REST service handling 1M+ uploads with Elasticsearch indexing and MySQL-based lab tracking, delivering roughly 40% faster throughput and full upload traceability.",
      "Enabled 10k+ patients per month to access medical imaging and reduced support tickets by 30% by shipping a secure PACS/DICOM sharing portal with authenticated links and audit logs.",
      "Eliminated manual webhook recovery and improved integration reliability by 95%, saving 20+ engineer-hours weekly, by replacing Mirth retry workflows with a Django-DocumentDB dashboard and AWS EventBridge-powered auto-retry flows.",
      "Reduced billing errors and removed manual steps by automating reflex-testing rules over MySQL and caching thresholds in Redis for real-time evaluation.",
      "Developed Smart Reports, a configurable report builder replacing rigid templates, owning the dynamic React frontend, metadata-driven backend APIs, and long-term system design.",
    ],
  },
  {
    company: "Outshade Digital Media, Hyderabad, India (Remote)",
    role: "Full Stack Developer Intern",
    duration: "January 2022 - March 2022",
    skills: [AWS, ExpressJsLight, HTML5, JavaScript, MySQL, NodeJs, React],
    description: [
      "Delivered a client-management dashboard in Node.js and MySQL that consolidated diverse client data and added a rule-based reminder scheduler for better follow-through.",
      "Built a clinic management application on the MERN stack for receptionist-led patient registration and appointment follow-up, with patient file uploads provisioned through AWS S3.",
    ],
  },
];

const WorkExperienceTimeline = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <p className="page-eyebrow">Experience</p>
        <h2 className="page-heading max-w-4xl">
          Shipping agentic AI systems, healthcare tooling, and full-stack
          products that stay stable under real load.
        </h2>
        <p className="page-copy">
          My recent experience spans agent memory, notification, and
          evaluation systems for SAP&apos;s Joule assistant, alongside
          healthcare tooling, automation, and full-stack delivery in systems
          that need to be stable under real operational pressure.
        </p>
      </div>

      <div className="grid gap-5">
        {workExperience.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="surface-card p-6 sm:p-8"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-2">
                <p className="page-eyebrow">{experience.duration}</p>
                <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                  {experience.role}
                </h3>
                <p className="text-base text-[var(--muted)]">
                  {experience.company}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {experience.skills.map((Icon, index) => (
                  <span
                    key={`${experience.company}-icon-${index}`}
                    className="icon-pill"
                  >
                    <Icon size={18} />
                  </span>
                ))}
              </div>
            </div>

            <ul className="mt-6 grid gap-3">
              {experience.description.map((point) => (
                <li key={point} className="flex gap-3 text-[var(--muted)]">
                  <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span className="leading-7">{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkExperienceTimeline;
