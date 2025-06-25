import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-[#f4fbfb] dark:bg-gradient-to-tr from-[#32113d] to-[#2f1842] text-gray-800 dark:text-[#f8f8f8]"
    >
<div className="grid md:grid-cols-[2fr_1fr] gap-20 items-center">
{/* Left Column – Text */}
        <motion.div 
          className='mx-3'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
            I’m a passionate <span className="font-semibold text-indigo-600 dark:text-indigo-400">BCA Graduate</span> who builds efficient, scalable, and beautiful digital experiences.
            I specialize in both frontend and backend technologies — delivering intuitive interfaces, and seamless user interactions.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
            With hands-on experience across <strong>Java</strong>, <strong>Python</strong>, <strong>C++</strong>,
            and modern web stacks like <strong>React</strong>, <strong>MongoDB</strong>, <strong>SQL</strong>, and <strong>TailwindCSS</strong>,
            I bridge design and logic to build end-to-end applications that solve real-world problems.
          </p>
          <ul className="space-y-2 list-disc list-inside text-base md:text-lg text-gray-800 dark:text-gray-200">
            <li>🧠 Proficient in OOP with Java, Python, and C++</li>
            <li>🛠️ Full-stack development using React and Python</li>
            <li>🗄️ Database expertise in MongoDB and SQL</li>
            <li>🎨 Responsive UI/UX with HTML, CSS, and TailwindCSS</li>
            <li>🚀 Focused on performance, clean code & scalability</li>
          </ul>
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
