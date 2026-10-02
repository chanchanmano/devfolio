import type { ComponentType } from "react";
import {
  CPlusPlus,
  Django,
  Docker,
  MongoDB,
  NodeJs,
  PostgreSQL,
  Python,
  React,
  Solidity,
} from "developer-icons";

export type IconComponent = ComponentType<Record<string, unknown>>;

export type Project = {
  title: string;
  category: string;
  content: string;
  expandedContent: string;
  icons: IconComponent[];
};

export const PROJECTS: Project[] = [
  {
    title: "Aura - Policy-Driven Selective Observability for Agentic AI",
    category: "Personal Project",
    content:
      "A stateful policy engine that escalates telemetry detail at runtime on agent-semantic failure signals, gating field-level payload capture instead of flat traces.",
    expandedContent:
      "In a 10,000-event evaluation it retained ~96% diagnosability while cutting telemetry volume ~34%. I built a travel-agent harness with LangGraph and LangChain (200 runs, 9 failure scenarios) backed by ChromaDB memory, multi-tool orchestration, and ICS calendar export, plus a deterministic per-run evaluator for rubric scores, hallucination ratios, and PII detection.",
    icons: [Python],
  },
  {
    title: "Cochlearity - Gaze-Steered AR Audio Pipeline",
    category: "Research",
    content:
      "Real-time, end-to-end pipeline for an assistive AR hearing system at Miller Lab, UC Davis, combining a multichannel mic array, gaze-driven steering, and on-device speech recognition.",
    expandedContent:
      "I'm integrating eye-tracker gaze input with a configuration-driven backend for swappable spatial filtering, neural speech separation (FasNet/TasNet), and ASR.",
    icons: [Python],
  },
  {
    title: "ReSQL - SQL Service Layer for Apache ResilientDB",
    category: "Open Source · Apache TLP",
    content:
      "Open-source contribution adding a SQL service layer that embeds DuckDB as an in-process analytical backend on top of ResilientDB's distributed BFT ledger. ResilientDB graduated from the Apache Incubator to a top-level Apache project and was named among the Apache Software Foundation's top projects this year.",
    expandedContent:
      "Implemented DuckDB storage integration, proto definitions, and Bazel build wiring, and refactored runtime config so SQL execution can be selectively enabled via flags without affecting KV apps or core consensus, enabling relational schemas and SQL semantics over the key-value execution model.",
    icons: [CPlusPlus],
  },
  {
    title: "Drug Supply Chain Tracking on a Decentralized Network",
    category: "Published Research",
    content:
      "A React and Node.js-based web3 application for securing the movement of goods across a drug supply chain with multiple real-world participants.",
    expandedContent:
      "I led smart contract development in Solidity, built backend logic in Node.js, designed the MongoDB schema, and later published the work in the Indonesian Journal of Electrical Engineering and Computer Science in January 2024.",
    icons: [NodeJs, React, Solidity, MongoDB],
  },
  {
    title: "A.L.A.N",
    category: "Personal Project",
    content:
      "A modular assistant prototype with wake word detection, speech-to-text, text-to-speech, Groq Mixtral-based responses, and session memory.",
    expandedContent:
      "The architecture uses ports and adapters so STT, TTS, and wake-word engines can be swapped independently, while leaving room for autonomous routines such as reminders, notes, and self-triggered tasks.",
    icons: [MongoDB, NodeJs, React],
  },
  {
    title: "SmashingBugs",
    category: "Personal Project",
    content:
      "A ticket tracking platform for organizations with JWT authentication, role-based access control, and modular REST APIs.",
    expandedContent:
      "Built with Django REST Framework, PostgreSQL, Docker Compose, and a responsive ReactJS frontend for real-time ticket management across isolated, reproducible environments.",
    icons: [Django, Docker, PostgreSQL, React],
  },
];
