import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-gradient-to-l from-[#d2d3d6] via-[#dee4e8] to-[#d6d6e0]
      dark:bg-gradient-to-r dark:from-[#0c142a] dark:via-[#121132] dark:to-[#212951] text-gray-800 dark:text-[#f8f8f8]"
    >
      <h2 className="text-5xl md:text-6xl font-bold 
      bg-gradient-to-br from-[#151237] via-[#2d2c53] to-[#747ac0]
       dark:from-[#828186] dark:via-[#cfcfe1] dark:to-[#aaacba] 
       bg-clip-text text-transparent ml-4 mb-8 md:mb-20 leading-tight">
    ABOUT ME
  </h2>
<div className="grid md:grid-cols-2 gap-20 items-center">
{/* Left Column – Text */}
<motion.div 
  className="mx-3"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
  viewport={{ once: true }}
>

  <p className="text-lg md:text-3xl font-medium text-gray-800 dark:text-gray-200 md:ml-2 mb-4">
  BCA Graduate · Full-Stack Developer · Tech Enthusiast
  </p>

  <p className="text-lg md:text-xl text-gray-800 dark:text-gray-400 mb-6">
    I craft intuitive digital products using both frontend and backend technologies — blending design with logic to solve real problems.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg md:text-xl text-gray-800 dark:text-gray-300">
    <div>
      <h3 className="font-semibold mb-2">🚀 Skills</h3>
      <ul className="space-y-2 list-disc list-inside">
        <li>React, Python, Tailwind CSS</li>
        <li>Java, C++, OOP Principles</li>
        <li>MongoDB, SQL</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">💡 Strengths</h3>
      <ul className="space-y-2 list-disc list-inside">
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
        <div className="flex flex-wrap gap-4">
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
              className="px-4 py-4 rounded-full bg-white/20 dark:bg-white/10 
              border border-gray-300 dark:border-white/20 text-lg font-medium
              text-gray-800 dark:text-white backdrop-blur-lg shadow-lg"
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
