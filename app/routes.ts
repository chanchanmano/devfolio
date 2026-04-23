import { index, layout, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  layout("./routes/home.tsx", [
    index("./landing/Hello.tsx"),
    route("aboutme", "./content/AboutMe/AboutMe.tsx"),
    route("blog", "./content/Blog/BlogIndex.tsx"),
    route("blog/editor", "./content/Blog/BlogEditor.tsx"),
    route("blog/:slug", "./content/Blog/BlogArticle.tsx"),
    route("projects", "./content/Projects/Projects.tsx"),
    route("skills", "./content/Skills/Skills.tsx"),
    route("workex", "./content/WorkEx/WorkEx.tsx"),
    route("misc", "./content/Misc/Misc.tsx"),
  ]),
] satisfies RouteConfig;
