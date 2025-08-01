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

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB", level: 50 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", level: 85 },
  { name: "HTML5", icon: SiHtml5, color: "#E44D26", level: 98 },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 80 },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 40 },
  { name: "Python", icon: SiPython, color: "#3776AB", level: 50 },
  { name: "C++", icon: SiCplusplus, color: "#00599C", level: 90 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 80 },
  { name: "MySQL", icon: SiMysql, color: "#00758F", level: 80 },
  { name: "GitHub", icon: SiGithub, color: "#111111", level: 85 },
];

const leftSkills = skills.slice(0,5);
const rightSkills = skills.slice(5);

function SkillCloud() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-l from-[#d2d3d6] via-[#dee4e8] to-[#d6d6e0] 
      dark:bg-gradient-to-r dark:from-[#0c142a] dark:via-[#121132] dark:to-[#212951] transition-colors duration-300">
      
      <h2 className="text-center mb-5 text-5xl md:text-5xl font-bold bg-gradient-to-br from-[#151237] via-[#11102b] to-[#747ac0] bg-clip-text text-transparent dark:from-[#f2efef] dark:via-[#7a7676] dark:to-[#cec8c8]">
        SKILLS & TOOLS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 px-4 max-w-5xl mx-auto mt-16 space-y-6">
      {[leftSkills, rightSkills].map((group, colIndex) => (
          <div key={colIndex} className="space-y-8 dark:text-[#f5f5f5]">
            {group.map(({ name, icon: Icon, color, level }, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex items-center min-w-[150px] gap-2 ">
                  <Icon size={40} color={color} className="dark:bg-[#f3f3f3] dark:rounded-full dark:p-2"/>
                  <span className="font-medium text-base md:text-lg">{name}</span>
                </div>

                <div className="flex-1 bg-gray-300/40 dark:bg-white/10 rounded-full overflow-hidden h-3 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#86e1fd] via-[#4f3cc1] to-[#9172ef]"
                  />
                </div>

                <span className="min-w-[40px] text-base text-right">{level}%</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillCloud;
