import { motion } from 'framer-motion';

const softSkillGroups = [
  {
    title: 'Thinking',
    skills: ['Analytical Thinking', 'Problem Solving', 'Attention to Detail'],
  },
  {
    title: 'Collaboration',
    skills: ['Communication', 'Teamwork', 'Adaptability'],
  },
  {
    title: 'Growth',
    skills: ['Continuous Learning', 'Ownership', 'Quick Learner'],
  },
];

const timelineSteps = [
  {
    title: 'Graduation',
    body: 'Completed BCA with a strong foundation in programming, databases, and software development.',
  },
  {
    title: 'Technical Foundation',
    body: 'Built projects using React, Flask, JavaScript, HTML, CSS, Python, and SQL while strengthening full-stack development skills.',
  },
  {
    title: 'Professional Growth',
    body: 'Earned AI and software development certifications while continuously expanding knowledge in modern development practices.',
  },
  {
    title: 'Currently',
    body: 'Working as an Analyst Trainee at Cognizant in the Mainframe ADM domain, supporting enterprise applications and production systems.',
  },
];

const philosophyCards = [
  {
    title: 'Reliable Solutions',
    text: 'Building software that prioritizes maintainability, accuracy, and long-term reliability.',
  },
  {
    title: 'Continuous Learning',
    text: 'Consistently improving technical skills through hands-on projects, certifications, and real-world experience.',
  },
  {
    title: 'Modern Development',
    text: 'Combining traditional enterprise technologies with modern web development and AI-assisted workflows.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 md:px-20 bg-gradient-to-l from-[#d2d3d6] via-[#dee4e8] to-[#d6d6e0] text-gray-800 dark:bg-gradient-to-r dark:from-[#0c142a] dark:via-[#121132] dark:to-[#212951] dark:text-[#f8f8f8]"
    >
      <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/20" />
      <div className="absolute right-[-6rem] bottom-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-500/20" />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="mb-12 ml-4 text-5xl font-bold leading-tight bg-gradient-to-br from-[#151237] via-[#2d2c53] to-[#747ac0] bg-clip-text text-transparent dark:from-[#828186] dark:via-[#cfcfe1] dark:to-[#aaacba] md:mb-16 md:text-6xl">
          ABOUT ME
        </h2>

        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <motion.div
            className="rounded-[2rem] border border-white/40 bg-white/60 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-lg font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">
              Analyst Trainee • Full-Stack Developer • Lifelong Learner
            </p>

            <p className="mb-6 text-md leading-relaxed text-slate-700 dark:text-slate-200 md:text-2xl">
            I am an Analyst Trainee at Cognizant with a background in full-stack web development and enterprise application support. My experience spans modern web
            technologies, mainframe systems, and AI-assisted development. I enjoy solving real-world problems through clean, maintainable code while continuously 
            expanding my technical expertise across software engineering disciplines.</p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Quick Stats</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Analyst Trainee at Cognizant</li>
                  <li>• Multiple AI & development certifications</li>
                  <li>• BCA Graduate</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Current Focus</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Enterprise application support</li>
                  <li>• Full-stack web development</li>
                  <li>• AI-assisted software development</li>
                </ul>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              <a
                href="/Devanandha_Resume.txt"
                download
                className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:scale-[1.02]"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white/50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-purple-500 hover:shadow-purple-500/20 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white/50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-purple-500 hover:shadow-purple-500/20 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
              >
                GitHub
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {philosophyCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-slate-200/70 bg-white/40 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
                  <h3 className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-100">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{card.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-slate-950 p-4 shadow-[0_20px_60px_rgba(34,211,238,0.12)]">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-xs uppercase tracking-[0.3em] text-slate-400">terminal</span>
              </div>
              <pre className="overflow-x-auto text-sm leading-7 text-cyan-200">
{`const developer = {
  name: "Devanandha S.",
  role: "Analyst Trainee @ Cognizant",
  degree: "BCA Graduate",
  expertise: [
    "Mainframe",
    "React",
    "Python",
    "JavaScript",
    "AI-Assisted Development"
  ],
  status: "Open to Software Engineering Opportunities"
};`}
              </pre>
            </div>

            <div className="rounded-[2rem] border border-white/40 bg-white/60 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50">
              <img
                src="/profile-placeholder.svg"
                alt="Profile illustration"
                className="h-72 w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="rounded-[2rem] border border-white/40 bg-white/60 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50">
              <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-100">My Journey</h3>
              <div className="space-y-4">
                {timelineSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-3">
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">{step.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/40 bg-white/60 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50">
              <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-100">Expertise</h3>
              <div className="space-y-4">
                {softSkillGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{group.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-slate-300/70 bg-white/5 px-3 py-2 text-sm font-medium text-slate-700 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 dark:border-slate-700 dark:text-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
