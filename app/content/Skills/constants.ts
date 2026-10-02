import type { ComponentType } from "react";
import {
  AWS,
  Django,
  Docker,
  Elastic,
  Electron,
  ExpressJsLight,
  Git,
  Java,
  JavaScript,
  MongoDB,
  MySQL,
  NodeJs,
  PostgreSQL,
  Python,
  React,
  Redis,
  Solidity,
  TypeScript,
} from "developer-icons";

export type IconComponent = ComponentType<Record<string, unknown>>;

export type SkillGroup = {
  skillCategory: string;
  toolIcons: Array<{
    Icon?: IconComponent;
    name: string;
  }>;
};

export const SKILLS_DETAILS: SkillGroup[] = [
  {
    skillCategory: "Programming Languages",
    toolIcons: [
      { Icon: Python, name: "Python" },
      { Icon: JavaScript, name: "JavaScript" },
      { Icon: TypeScript, name: "TypeScript" },
      { Icon: Java, name: "Java" },
      { Icon: Solidity, name: "Solidity" },
    ],
  },
  {
    skillCategory: "Frameworks",
    toolIcons: [
      { Icon: Django, name: "Django" },
      { Icon: NodeJs, name: "Node.js" },
      { Icon: Electron, name: "Electron" },
      { Icon: ExpressJsLight, name: "Express" },
      { Icon: React, name: "ReactJS" },
      { name: "LangChain" },
      { name: "LangGraph" },
    ],
  },
  {
    skillCategory: "Database Technologies",
    toolIcons: [
      { Icon: MySQL, name: "MySQL" },
      { Icon: PostgreSQL, name: "PostgreSQL" },
      { Icon: MongoDB, name: "MongoDB" },
      { Icon: Redis, name: "Redis" },
      { Icon: Elastic, name: "Elasticsearch" },
      { name: "ChromaDB" },
    ],
  },
  {
    skillCategory: "Cloud & DevOps",
    toolIcons: [
      { Icon: AWS, name: "AWS (S3, Lambda)" },
      { Icon: Docker, name: "Docker" },
      { Icon: Git, name: "Git / GitHub" },
    ],
  },
];
