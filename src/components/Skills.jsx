import { motion } from "framer-motion";
import reactIcon from '../assets/react-icon.png'
import tail from '../assets/tailwind-logo.png'
import html from '../assets/html-logo.png'
import css from '../assets/css.png'
import js from '../assets/js-logo.png'
import java from '../assets/java.jpg'
import python from '../assets/Python.jpg'
import cpp from '../assets/cpp.jpg'
import mongo from '../assets/mongodb.png'
import sql from '../assets/mysql.jpg'
import git from "../assets/github.jpg";
import vs from "../assets//vscode-logo.jpg";
import cursor from "../assets/cursor-logo.jpg";

const frontendSkills = [
  { name: "React", knowledge: "Intermediate", icon: reactIcon, fact: "✅ 15+ components built" },
  { name: "Tailwind CSS", knowledge: "Intermediate", icon: tail, fact: "🎨 Two projects done" },
  { name: "HTML5", knowledge: "Proficient", icon: html, fact: "📄 Semantic markup pro" },
  { name: "CSS", knowledge: "Intermediate", icon: css, fact: "💅 Custom animations created" },
  { name: "JavaScript", knowledge: "Intermediate", icon: js, fact: "💡 2 APIs integrated" },
];

const programmingLanguages = [ 
  { name: "Java", knowledge: "Intermediate", icon: java, fact: "OOP Projects done" },
  { name: "Python", knowledge: "Beginner", icon: python, fact: "🐍 Learning data handling" },
  { name: "C++", knowledge: "Proficient", icon: cpp, fact: "30+ programs written" }
];


const databases = [
  { name: "MongoDB", knowledge: "Basic Understanding", icon: mongo, fact: "📦 Used in a Full stack project" },
  { name: "MySQL", knowledge: "Intermediate", icon: sql, fact: "🗂Skilled in SQL queries" }
];

const Tools = [
  { name: "Github", knowledge: "Basic Understanding", icon: git, fact: "🔧 Basic operations" },
  { name: "VS Code", knowledge: "Intermediate", icon: vs, fact: "" },
  { name: "Cursor AI", knowledge: "Intermediate", icon: cursor, fact: "" }
];


const getKnowledgePercent = (level) => {
  switch (level) {
    case "Beginner": return "20%";
    case "Basic Understanding": return "35%";
    case "Intermediate": return "60%";
    case "Proficient": return "85%";
    default: return "50%";
  }
};

const SkillCard = ({ skill }) => {
  return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 60 }}
        transition={{ duration: 0.6 }}
        className="group perspective"
        id="skills"
      >
    
      <div className="relative w-full h-40 transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f8f8f8] border-black/10 dark:bg-white/10 border dark:border-white/10 rounded-xl shadow-lg backface-hidden p-4">
          <img src={skill.icon} alt={skill.name} className="w-12 h-12 rounded-lg object-contain mb-2" />
          <h3 className="text-[#121212] dark:text-[#ffffff] text-lg font-semibold">{skill.name}</h3>
          <div className="w-full h-2 bg-[#a0b5d5] rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-[#4074d4] rounded-full"
              style={{ width: getKnowledgePercent(skill.knowledge) }}
            />
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#5f1fc7] text-white rounded-xl shadow-md rotate-y-180 backface-hidden p-4">
        <h3 className="text-white text-lg font-semibold mb-4">{skill.name}</h3>
        <p className="text-sm font-semibold">{skill.knowledge}</p>
          
          <p className="mt-2 text-xs text-center">{skill.fact}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <motion.section
        initial= {{ opacity: 1, y: 0 }}
        whileInView= {{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport= {{ once: true }}
      className="bg-[#e5e8d8] text-black dark:bg-[#160822] py-24 px-6 dark:text-white"
    >

<div className="max-w-6xl mx-auto space-y-12">
  <h2 className="text-3xl font-bold text-center mb-8">Skills & Tools</h2>
  {/* First Row: Frontend + Languages */}
  <div className="flex flex-col md:flex-row gap-20 mb-2">
    {/* Frontend */}
    <div className="flex-1">
      <h3 className="text-2xl font-semibold mb-0">Frontend</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {frontendSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>

    {/* Languages */}
    <div className="flex-1">
      <h3 className="text-2xl font-semibold mb-0">Languages</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 mb-6 gap-6">
        {programmingLanguages.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  </div>

  {/* Second Row: Databases + Tools */}
  <div className="flex flex-col md:flex-row gap-10">
    {/* Databases */}
    <div className="flex-1">
      <h3 className="text-2xl font-semibold mt-5 mb-0">Databases</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
        {databases.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>

    {/* Tools */}
    <div className="flex-1">
      <h3 className="text-2xl font-semibold mt-4 mb-0">Other Tools</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {Tools.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  </div>
</div>

    </motion.section>
  );
}
