import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-l from-[#c5c6ca] via-[#cfd6db] to-[#c8c8cc]
    dark:bg-gradient-to-r dark:from-[#0c142a] dark:via-[#121132] dark:to-[#212951] 
    text-gray-900 dark:text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        {/* Social Links */}
        <div className="flex text-xl gap-4 items-center justify-center">
          <a
            href="https://github.com/Devanandha05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:shadow-[0_4px_20px_rgba(225,255,255,0.2)]
             transition"
          >
            <FaGithub size={28}/>
          </a>
          <a
            href="https://www.linkedin.com/in/s-devanandha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:shadow-[0_4px_20px_rgba(225,255,255,0.2)] transition"
          >
           <FaLinkedin size={28}/>
          </a>
          <a
            href="mailto:sdvanandha@gmail.com"
            aria-label="Email"
            className="hover:shadow-[0_4px_20px_rgba(225,255,255,0.2)] transition"
          >
            <FaEnvelope size={28}/>
          </a>
        </div>
        {/* Copyright */}
        <div className="text-base text-[#212121] dark:text-[#f8f8f8]">
          © {new Date().getFullYear()} <span className="font-semibold">Devanandha S.</span> All rights reserved.
        </div>
      </div>
    </footer>
  );
}
