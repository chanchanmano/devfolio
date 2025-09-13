import { useState } from "react";

export default function DetailCard() {
  const [funkyFonts, setFunkyFonts] = useState(true);

  return (
    <section id="about" className="text-gray-300 flex justify-between">
      <div className="max-w-3xl px-4 space-y-6">
        <p>
          Hi, I’m{" "}
          <span className="font-semibold text-amber-50">Aryan Hamine</span>, a{" "}
          <span className={funkyFonts ? "font-pacifico text-pink-300" : ""}>
            passionate
          </span>{" "}
          software developer with experience in{" "}
          <span className={funkyFonts ? "font-architect text-sky-300" : ""}>
            full-stack
          </span>{" "}
          development. I enjoy designing scalable systems, exploring new
          technologies, and building tools that solve real-world problems.
        </p>

        <p>
          I recently worked at{" "}
          <span className="font-semibold text-amber-50">CrelioHealth</span>, as{" "}
          an{" "}
          <span className={funkyFonts ? "font-mono text-lime-300" : ""}>
            SDE - II
          </span>{" "}
          where I helped build diagnostic lab solutions using modern web stacks.
          I’ve also worked on projects combining{" "}
          <span
            className={
              funkyFonts ? "font-orbitron text-purple-300" : "font-semibold"
            }
          >
            Django, React, MySQL, MongoDB, Elasticsearch, and Redis
          </span>
          . It has allowed me to build features that are scalable and
          production-fit serving{" "}
          <span className={funkyFonts ? "font-pacifico text-pink-300" : ""}>
            thousands of users.
          </span>{" "}
        </p>

        <p>
          I'm particularly interested in the intersection of{" "}
          <span
            className={funkyFonts ? "font-pacifico text-rose-300" : "italic"}
          >
            healthcare and technology
          </span>
          , and I’m currently doing my Masters in Computer Science at{" "}
          <span className={funkyFonts ? "font-architect text-amber-300" : ""}>
            UC Davis
          </span>
          .
        </p>

        <p>
          When I’m not coding, you’ll find me{" "}
          <span className={funkyFonts ? "font-orbitron text-blue-300" : ""}>
            reading history books
          </span>
          , playing{" "}
          <span className={funkyFonts ? "font-pacifico text-green-300" : ""}>
            management simulation games
          </span>
          , or exploring new tools to improve{" "}
          <span className={funkyFonts ? "font-architect text-fuchsia-300" : ""}>
            productivity
          </span>
          .
        </p>

        {/* Toggle at the end */}
        {/* <div className="flex items-center pt-6">
          <label className="text-sm mr-2 text-gray-400">Make it boring</label>
          <input
            type="checkbox"
            checked={!funkyFonts}
            onChange={() => setFunkyFonts((prev) => !prev)}
            className="accent-amber-400 w-4 h-4"
          />
        </div> */}
      </div>
      <img src={ funkyFonts ? "/fun_picture.jpeg" : "/Aryan passport.jpg"  } className="mr-20 w-1/4" />
    </section>
  );
}
