import type { Route } from "./+types/home";
import { Landing } from "../landing/Landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "aryan.dev" },
    { name: "description", content: "An e-resume for my developer life" },
    {}
  ];
}

export default function Home() {
  return <Landing />;
}
