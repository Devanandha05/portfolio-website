import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-gradient-to-l from-[#c5c6ca] via-[#cfd6db] to-[#c8c8cc]
      dark:bg-gradient-to-r dark:from-[#0c142a] dark:via-[#121132] dark:to-[#212951] text-gray-800 dark:text-[#f8f8f8]"
    >
<div className="grid md:grid-cols-[2fr_1fr] gap-20 items-center">
{/* Left Column – Text */}
<motion.div 
  className="mx-3"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#151237] via-[#11102b] to-[#747ac0] dark:from-[#828186] dark:via-[#cfcfe1] dark:to-[#aaacba] bg-clip-text text-transparent mb-8 leading-tight">
    ABOUT ME
  </h2>

  <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">
    BCA Graduate · Full-Stack Developer · Tech Enthusiast
  </p>

  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6">
    I craft intuitive digital products using both frontend and backend technologies — blending design with logic to solve real problems.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base md:text-lg text-gray-700 dark:text-gray-300">
    <div>
      <h3 className="font-semibold mb-2">🚀 Skills</h3>
      <ul className="space-y-1 list-disc list-inside">
        <li>React, Python, Tailwind CSS</li>
        <li>Java, C++, OOP Principles</li>
        <li>MongoDB, SQL</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">💡 Strengths</h3>
      <ul className="space-y-1 list-disc list-inside">
        <li>Strong analytical thinking</li>
        <li>Problem-solving mindset</li>
        <li>Clean, scalable code</li>
      </ul>
    </div>
  </div>
</motion.div>

        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        >
        <div className="flex flex-wrap gap-3">
          {[
            "Problem Solving",
            "Critical Thinking",
            "Communication",
            "Eagerness to Learn",
            "Adaptability",
            "Fast Learner",
            "Teamwork",
            "Collaboration",
            "Attention to Detail",
            "Creativity",
            "Innovation",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-3 rounded-full bg-white/20 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-lg font-medium text-gray-800 dark:text-white backdrop-blur-lg shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>

        </motion.div>
      </div>
    </section>
  );
}
