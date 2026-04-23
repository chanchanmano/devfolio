import type { ComponentType } from "react";
import {
  Django,
  Docker,
  MongoDB,
  NodeJs,
  PostgreSQL,
  React,
  Solidity,
} from "developer-icons";

export type IconComponent = ComponentType<Record<string, unknown>>;

export type Project = {
  title: string;
  content: string;
  expandedContent: string;
  icons: IconComponent[];
};

export const PROJECTS: Project[] = [
  {
    title: "Drug Supply Chain Tracking on a Decentralized Network",
    content:
      "A React and Node.js-based web3 application for securing the movement of goods across a drug supply chain with multiple real-world participants.",
    expandedContent:
      "I led smart contract development in Solidity, built backend logic in Node.js, designed the MongoDB schema, and later published the work in the Indonesian Journal of Electrical Engineering and Computer Science in January 2024.",
    icons: [NodeJs, React, Solidity, MongoDB],
  },
  {
    title: "A.L.A.N",
    content:
      "A modular assistant prototype with wake word detection, speech-to-text, text-to-speech, Groq Mixtral-based responses, and session memory.",
    expandedContent:
      "The architecture uses ports and adapters so STT, TTS, and wake-word engines can be swapped independently, while leaving room for autonomous routines such as reminders, notes, and self-triggered tasks.",
    icons: [MongoDB, NodeJs, React],
  },
  {
    title: "SmashingBugs",
    content:
      "A ticket tracking platform for organizations with JWT authentication, role-based access control, and modular REST APIs.",
    expandedContent:
      "Built with Django REST Framework, PostgreSQL, Docker Compose, and a responsive ReactJS frontend for real-time ticket management across isolated, reproducible environments.",
    icons: [Django, Docker, PostgreSQL, React],
  },
];
