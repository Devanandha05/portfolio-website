import badge from '../assets/claude-badge.png';

const certificates = [
  {
    name: 'Claude Certified Developer Certification',
    image: badge,
    skills: ['Claude', 'AI Integration', 'Prompt Engineering'],
    link: 'https://www.credly.com/users/devanandha-s',
  },
  {
    name: 'AI-Assisted Developer - Claude Certification',
    image: badge,
    skills: ['Claude', 'Claude Code', 'Prompt Engineering'],
    link: 'https://example.com/certificates/ai-assisted-developer',
  },
  {
    name: 'Full Stack Web Development MERN Stack Certification',
    image: badge,
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    link: 'https://example.com/certificates/full-stack-web-development',
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6 md:px-20 bg-gradient-to-r from-[#f5f7fa] via-[#eef2f7] to-[#e8edf4] dark:from-[#0b1020] dark:via-[#10172a] dark:to-[#151d36] text-gray-800 dark:text-[#f8f8f8]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-br from-[#151237] via-[#2d2c53] to-[#747ac0] dark:from-[#828186] dark:via-[#cfcfe1] dark:to-[#aaacba] bg-clip-text text-transparent">
          CERTIFICATIONS
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {certificates.map((item, index) => (
            <div
              key={item.name}
              className="rounded-2xl border border-gray-300/70 dark:border-white/10 bg-white/70 dark:bg-white/10 backdrop-blur-lg shadow-lg overflow-hidden"
            >
              <div className="h-44 bg-gradient-to-br from-[#d6e2ff] via-[#f5f7ff] to-[#dbeafe] dark:from-[#1e2a4a] dark:via-[#24345c] dark:to-[#2e3b63] flex items-center justify-center border-b border-gray-200 dark:border-white/10">
                <div className="w-4/5 h-28 rounded-xl border-2 border-dashed border-gray-400 dark:border-gray-500 flex items-center justify-center text-center px-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300 mb-2">
                    Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300 mb-2">
                    Verifying Link
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Verification
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
