const projects = [
  {
    title: "Productivity & Sustainability optimizer",
    description: "WebApp showcasing skills in React and Python Flask.",
    image: "/ecodo.png",
    tags: ["AI", "Machine Learning"],
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/Devanandha05/Ecodo",
  },
    {
      title: "Coffee Shop Landing Page",
      description: "Modern and responsive coffee shop website using React & Tailwind.",
      image: "/coffee.png",
      tags: ["React", "Tailwind"],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-repo",
    },
    {
      title: "Yoga Landing Page",
      description: "Modern, minimal Landing page showcasing frontend skills.",
      image: "/yoga.png",
      tags: ["HTML", "CSS"],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/Devanandha05/yoga-landing-page",
    },
    {
      title: "Font Generator",
      description: "Responsive Font generator website using Javascript.",
      image: "/font-generator.png",
      tags: ["Havascript", "Canvas"],
      demoLink: " https://devanandha05.github.io/customfont-creator/",
      codeLink: "https://github.com/Devanandha05/customfont-creator",
    },
    // Add more as needed
  ];

  import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-[#ebfbe8] dark:bg-[#1e102a] text-gray-800 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="mx-4 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}//20
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-100 dark:bg-[#1c1c1c]"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white px-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
