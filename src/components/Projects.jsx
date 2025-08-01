import ecodo from '../assets/ecodo.png';
import tictac from '../assets/tictactoe.png'
import yoga from '../assets/yoga.png';
import font from '../assets/font-generator.png';
import portfolio from '../assets/portfolio.png';
import dashboard from '../assets/client-dark.png';

const projects = [
  {
    title: "Productivity & Sustainability optimizer",
    description: "WebApp showcasing skills in React and Python Flask.",
    image: ecodo,
    tags: ["AI", " Machine Learning"],
    codeLink: "https://github.com/Devanandha05/Ecodo",
  },
    {
      title: "4x4 Tic-Tac-Toe",
      description: "",
      image: tictac,
      tags: ["Python Flask ","React", " Tailwind CSS"],
      demoLink: "https://686f9a4881c8d29ca02a4fd7--tic-tac-toe4x4.netlify.app/",
      codeLink: "https://github.com/Devanandha05/tictactoe-backend",
    },
    {
      title: "Portfolio Website",
      description: "Responsive Portfolio website with Dark/Light Theme.",
      image: portfolio ,
      tags: ["React", " Tailwind CSS"],
      demoLink: " https://devanandha05.github.io/portfolio-website/",
      codeLink: "https://github.com/Devanandha05/portfolio-website",
    },
    {
      title: "SerenYu Landing Page",
      description: "Modern, minimal Landing page showcasing frontend skills.",
      image: yoga,
      tags: ["HTML", " CSS"],
      demoLink: "https://devanandha05.github.io/yoga-landing-page/",
      codeLink: "https://github.com/Devanandha05/yoga-landing-page",
    },
    {
      title: "Font Generator",
      description: "Responsive Font generator website using Javascript.",
      image: font ,
      tags: ["Javascript", " Canvas"],
      demoLink: " https://devanandha05.github.io/customfont-creator/",
      codeLink: "https://github.com/Devanandha05/customfont-creator",
    },
    {
      title: "Freelancer Dashboard UI",
      description: "A complete modern,minimal Dashboard UI with Dark/Light mode toggle showcasing React and Tailwind skills.",
      image: dashboard,
      tags: ["React js", " Tailwind CSS", "Framer motion"],
      demoLink: "https://sdvananda.gumroad.com/l/aowey",
      codeLink: "https://github.com/Devanandha05/freelance-panel-lite",
    },
    // Add more as needed
  ];
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gradient-to-l
     from-[#d2d3d6] via-[#dee4e8] to-[#d6d6e0] 
    dark:bg-gradient-to-r dark:from-[#0c142a] dark:via-[#121132] dark:to-[#212951] text-gray-800 dark:text-white">
      <h2 className="text-5xl font-bold mb-10 text-center
          bg-gradient-to-br from-[#151237] via-[#11102b] to-[#747ac0] 
          dark:from-[#e0e0e0] dark:to-[#aaaaaa] 
          bg-clip-text text-transparent">
          PROJECTS
        </h2>
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
              <p className='text-base text-white font-medium'>| {project.tags} |</p>
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
