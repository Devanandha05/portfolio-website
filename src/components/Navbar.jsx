import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
<nav
      className={`w-full fixed top-0 left-0 z-50 px-6 md:px-10 flex justify-between items-center py-4 transition-colors duration-300 ${
        scrolled
          ? "hidden"
          : "bg-transparent text-white"
      }`}
    >      <h1 className="text-3xl font-bold">DS</h1>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-12 text-xl">
      <li>
        <a
          href="#about"
          className="relative after:absolute after:left-0 after:-bottom-1 after:h-[4px] after:w-0 after:bg-[#f8f8f8] after:transition-all after:duration-300 hover:after:w-full"
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="relative after:absolute after:left-0 after:-bottom-1 after:h-[4px] after:w-0 after:bg-[#f8f8f8] after:transition-all after:duration-300 hover:after:w-full"
        >
          My Skills
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="relative after:absolute after:left-0 after:-bottom-1 after:h-[4px] after:w-0 after:bg-[#f8f8f8] after:transition-all after:duration-300 hover:after:w-full"
        >
          Projects
        </a>
      </li>
    </ul>


      {/* Contact Button (always visible) */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        className="hidden md:inline-block px-6 py-2 border border-gradient dark:border-white rounded-xl text-white hover:bg-white hover:text-black transition font-medium backdrop-blur-sm bg-white/10"
      >
        Reach Out
      </motion.a>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-b from-[#3b1555] via-[#300948] to-[#2f0135] text-white px-6 py-4 flex flex-col gap-4 md:hidden backdrop-blur-md">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-dBlue">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-dBlue">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-dBlue">Projects</a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="w-28 mt-2 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition font-medium backdrop-blur-sm bg-white/10"
          >
            Reach Out
          </motion.a>
        </div>
      )}
    </nav>
  );
}
