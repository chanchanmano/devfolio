import { Route, Routes } from "react-router";
import Projects from "~/content/Projects/Projects";
import Skills from "~/content/Skills/Skills";
import Hello from "./Hello";
import AboutMe from "~/content/AboutMe/AboutMe";
import WorkEx from "~/content/WorkEx/WorkEx";
import Misc from "~/content/Misc/Misc";

function ContentBox() {
  return (
    <div id="content-box"   className="mx-4 mt-12 sm:mx-8 sm:mt-16 lg:mx-16 lg:mt-24 xl:mx-20 xl:mt-18 2xl:mx-40 2xl:mt-32">
      <Routes>
        <Route path="*" element={<Hello />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/workex" element={<WorkEx />} />
        <Route path="/misc" element={<Misc />} />
      </Routes>
    </div>
  );
}

export default ContentBox;
