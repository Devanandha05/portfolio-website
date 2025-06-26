import { motion } from "framer-motion";
import githubIcon from '../assets/github.jpg';
import linkedinIcon from '../assets/linkedin.png';
import emailIcon from '../assets/email.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#32113d] to-[#2f1842] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Copyright */}
        <div className="text-sm text-[#f8f8f8]">
          © {new Date().getFullYear()} <span className="font-semibold">Devanandha S.</span> All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-4 items-center justify-center">
          <a
            href="https://github.com/Devanandha05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src={githubIcon}
              alt="GitHub profile"
              className="w-6 h-6 rounded-lg object-contain"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/s-devanandha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn profile"
              className="w-6 h-6 object-contain"
            />
          </a>
          <a
            href="mailto:sdvanandha@gmail.com"
            aria-label="Email"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src={emailIcon}
              alt="Send email"
              className="w-6 h-6 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
