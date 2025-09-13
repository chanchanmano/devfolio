import { type RouteConfig, route } from "@react-router/dev/routes";
import projectRoutes from "./content/Projects/routes";
import skillRoutes from "./content/Skills/routes";

export default [
  route("/", "./routes/home.tsx", // Wrap all routes with Landing as the layout
    [
      route("", "./landing/Hello.tsx"),
      route("aboutme", "./content/AboutMe/AboutMe.tsx"),
      route("projects", "./content/Projects/Projects.tsx"),
      route("skills", "./content/Skills/Skills.tsx"),
      route("workex", "./content/WorkEx/WorkEx.tsx"),
      route("misc", "./content/Misc/Misc.tsx"),
    ],
  ),
] satisfies RouteConfig;
