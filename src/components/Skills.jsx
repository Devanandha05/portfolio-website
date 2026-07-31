import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    proficiency: "Advanced",
    tooltip: "Used in 4 projects (Portfolio, Dashboard UI, Tic-Tac-Toe)",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    proficiency: "Advanced",
    tooltip: "Used for polished UI systems and responsive layouts",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    proficiency: "Advanced",
    tooltip: "Core language for interactive web experiences",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E44D26",
    proficiency: "Proficient",
    tooltip: "Used for semantic structure and accessible page layouts",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    color: "#1572B6",
    proficiency: "Proficient",
    tooltip: "Used for modern styling, animations, and visual polish",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    proficiency: "Intermediate",
    tooltip: "Used for scripting, automation, and problem solving",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
    proficiency: "Intermediate",
    tooltip: "Data Structures & Algorithms, Problem Solving",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#00758F",
    proficiency: "Intermediate",
    tooltip: "Used for database design and query-driven projects",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    proficiency: "Familiar",
    tooltip: "Explored for document-based data storage and CRUD workflows",
  },
  {
    name: "Git/GitHub",
    icon: SiGithub,
    color: "#111111",
    proficiency: "Proficient",
    tooltip: "Used for version control and collaborative development",
  },
];

const featuredStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
];

const exploringSkills = [
  { name: "TypeScript", icon: SiJavascript, color: "#3178C6" },
  { name: "Next.js", icon: SiReact, color: "#000000" },
  { name: "AI APIs", icon: SiPython, color: "#8A2BE2" },
];

function SkillCloud() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-l from-[#d2d3d6] via-[#dee4e8] to-[#d6d6e0] px-6 py-24 transition-colors duration-300 dark:bg-gradient-to-r dark:from-[#0c142a] dark:via-[#121132] dark:to-[#212951]"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-5xl font-bold bg-gradient-to-br from-[#151237] via-[#11102b] to-[#747ac0] bg-clip-text text-transparent dark:from-[#f2efef] dark:via-[#7a7676] dark:to-[#cec8c8] md:text-5xl">
          SKILLS & TOOLS
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-700 dark:text-slate-300">
          A mix of core strengths, practical experience, and a few tools I am actively exploring.
        </p>

        <div className="mb-10 rounded-[2rem] border border-indigo-200/70 bg-gradient-to-r from-[#f8f4ff] via-[#eef5ff] to-[#fef3ff] p-6 shadow-[0_20px_60px_rgba(79,60,193,0.12)] dark:border-indigo-500/20 dark:from-[#16183d] dark:via-[#171a43] dark:to-[#22275b]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">
                Core Tech Stack
              </p>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                The tools I rely on most often
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {featuredStack.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
                >
                  <Icon size={20} color={color} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map(({ name, icon: Icon, color, proficiency, tooltip }) => (
            <div
              key={name}
              title={tooltip}
              className="group flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-slate-100 p-2 dark:bg-slate-800">
                  <Icon size={26} color={color} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">{name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {tooltip.length > 38 ? `${tooltip.slice(0, 38)}...` : tooltip}
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                {proficiency}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-slate-300/70 bg-slate-50/70 p-6 dark:border-slate-700 dark:bg-slate-900/40">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
            Currently Exploring
          </p>
          <div className="flex flex-wrap gap-3">
            {exploringSkills.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <Icon size={16} color={color} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillCloud;
