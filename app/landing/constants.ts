import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const SOCIAL_LINKS = [
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/aryan-hamine/",
    label: "LinkedIn",
  },
  { icon: faGithub, url: "https://github.com/chanchanmano", label: "GitHub" },
  { icon: faEnvelope, url: "mailto:haminearyan@gmail.com", label: "Email" },
];


export const NAVBAR_SECTIONS = [
  {
    text: "overview",
    link: "",
  },
  {
    text: "about",
    link: "aboutme",
  },
  {
    text: "experience",
    link: "workex",
  },
  {
    text: "blog",
    link: "blog",
  },
  {
    text: "skills",
    link: "skills",
  },
  {
    text: "projects",
    link: "projects",
  },
];
