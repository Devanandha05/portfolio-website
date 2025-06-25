import { motion } from "framer-motion";
const disableAnimations = true; 


const frontendSkills = [
  { name: "React", knowledge: "Intermediate", icon: "/react-icon.png", fact: "✅ 15+ components built" },
  { name: "Tailwind CSS", knowledge: "Intermediate", icon: "/tailwind-logo.png", fact: "🎨 Clean UI layouts" },
  { name: "HTML5", knowledge: "Proficient", icon: "/html-logo.png", fact: "📄 Semantic markup pro" },
  { name: "CSS", knowledge: "Intermediate", icon: "/css.png", fact: "💅 Custom animations created" },
  { name: "JavaScript", knowledge: "Intermediate", icon: "/js-logo.png", fact: "💡 5+ APIs integrated" },
];

const programmingLanguages = [
  { name: "Java", knowledge: "Intermediate", icon: "/java.jpg", fact: "OOP Projects done" },
  { name: "Python", knowledge: "Beginner", icon: "/Python.jpg", fact: "🐍 Learning data handling" },
  {name: "C++", knowledge:"Proficient", icon: "/cpp.jpg", fact:"30+ programs written"}
]

const databases = [
  { name: "MongoDB", knowledge: "Basic Understanding", icon: "/mongodb.png", fact: "📦 Used in invoice app" },
  { name: "SQL", knowledge: "Intermediate", icon: "/mysql.jpg", fact: "🗂 Structured data queries" },
]

const Tools = [
  { name: "Github", knowledge: "Basic Understanding", icon: "/github.jpg", fact: "🔧 Version control daily" },
  { name: "VS Code", knowledge: "Intermediate", icon: "/vscode-logo.jpg", fact: "🔧 Version control daily" },
  { name: "Cursor AI", knowledge: "Intermediate", icon: "/cursor-logo.jpg", fact: "🔧 Version control daily" },
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
    {...(!disableAnimations && {
      whileInView: { opacity: 1, y: 0 },
      initial: {opacity: 0, y: 40 },
      transition: { duration: 0.4 },
    })}
      className="group perspective"
      id="skills"
    >
      <div className="relative w-full h-40 transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f8f8f8] border-black/10 dark:bg-white/10 border dark:border-white/10 rounded-xl shadow-lg backface-hidden p-4">
          <img src={skill.icon} alt={skill.name} className="w-12 h-12 rounded-lg object-contain mb-2" />
          <h3 className="text-[#121212] dark:text-white text-lg font-semibold">{skill.name}</h3>
          <div className="w-full h-2 bg-white/40 rounded-full mt-2 overflow-hidden">
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
      {...(!disableAnimations && {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true },
      })}
      className="bg-black/5 text-black dark:bg-[#160822] py-24 px-6 dark:text-white"
    >

<div className="max-w-6xl mx-auto space-y-12">
  <h2 className="text-3xl font-bold text-center mb-10">Skills & Tools</h2>

  {/* First Row: Frontend + Languages */}
  <div className="flex flex-col md:flex-row gap-10">
    {/* Frontend */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold mb-4">Frontend</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {frontendSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>

    {/* Languages */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold mb-4">Languages</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
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
      <h3 className="text-xl font-semibold mb-4">Databases</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {databases.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>

    {/* Tools */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold mb-4">Other Tools</h3>
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
