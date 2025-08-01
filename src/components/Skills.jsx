import React from "react";
import { motion } from "framer-motion";
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

const icons = [
  { Icon: SiReact, color: "#61DAFB", style: "translate-x-2 -translate-y-1" },
  { Icon: SiTailwindcss, color: "#38BDF8", style: "-translate-x-2" },
  { Icon: SiHtml5, color: "#E44D26", style: "translate-y-2" },
  { Icon: SiCss3, color: "#1572B6", style: "-translate-y-1 translate-x-1" },
  { Icon: SiJavascript, color: "#F7DF1E", style: "translate-x-3" },
  { Icon: SiPython, color: "#3776AB", style: "-translate-x-3 -translate-y-1" },
  { Icon: SiMongodb, color: "#47A248", style: "translate-y-3" },
  { Icon: SiMysql, color: "#00758F", style: "-translate-y-2 translate-x-1" },
  { Icon: SiGithub, color: "#111111", style: "translate-x-2 translate-y-1" },
  { Icon: SiCplusplus, color: "#00599C", style: "-translate-x-1" },
];

function SkillCloud() {
  return (
    <section className="py-24 px-6 bg-gradient-to-l from-[#c5c6ca] via-[#cfd6db] to-[#c8c8cc] 
    dark:bg-gradient-to-r dark:from-[#0c142a] dark:via-[#121132] dark:to-[#212951] transition-colors duration-300">
      <h2 className="text-center mb-5 text-5xl md:text-5xl font-bold bg-gradient-to-br from-[#151237] via-[#11102b] to-[#747ac0] bg-clip-text text-transparent dark:from-[#f2efef] dark:via-[#7a7676] dark:to-[#cec8c8]">
       SKILLS & TOOLS
      </h2>

      <div className="max-w-3xl mx-auto mt-16 relative flex flex-wrap justify-center gap-8">
        {icons.map(({ Icon, color, style }, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className={`text-4xl p-4 rounded-full 
              ${style}
              bg-gradient-to-br 
              from-[#ffffffdd] via-[#d4d4d4cc] to-[#bdbdbdcc] 
              dark:from-[#1f233d] dark:via-[#2e324a] dark:to-[#3c415a] 
              ring-1 ring-white/40 dark:ring-white/10
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.4),_2px_2px_8px_rgba(0,0,0,0.2)] 
              dark:shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),_2px_2px_12px_rgba(0,255,255,0.1)]
              backdrop-blur-sm
              transition`}
          >
            <Icon size={42} color={color} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillCloud;
