import { motion } from "framer-motion"; 
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useState } from 'react'
import blob from "../assets/blob.png";
import profilepic from "../assets/portfolio-pic.png";
import blob1 from "../assets/white-blob.png";
import resume from "../assets/resume.pdf";

export default function Hero() {
  const [animateButton, setAnimateButton] = useState(false);

// Start button pulse animation after 3s of no interaction
useEffect(() => {
  const timer = setTimeout(() => {
    setAnimateButton(true);
  }, 3000);

  return () => clearTimeout(timer); // Cleanup
}, []);

  return (
    <section className="relative overflow-hidden 
      bg-gradient-to-b from-[#3b1555] via-[#300948] to-[#2f0135]
      min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-0">

    {/* Animated Blurred Dots */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 0.4, y: 10 }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      className="absolute top-20 left-10 w-40 h-40 rounded-full 
        bg-gradient-to-tr from-purple-400 to-slate-700 
        dark:from-purple-600 dark:to-indigo-800 
        filter blur-3xl opacity-40"
    />

    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 0.6, y: -8 }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      className="absolute bottom-32 right-20 w-24 h-24 rounded-full 
        bg-gradient-to-br from-purple-400 to-slate-700 
        dark:from-purple-600 dark:to-indigo-800
        filter blur-3xl opacity-60"
    />

    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 0.3, y: 6 }}
      transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full 
        bg-gradient-to-br from-purple-400 to-slate-700 
        dark:from-purple-600 dark:to-indigo-800 
        filter blur-[120px] opacity-50"
    />


      {/* Left: Text Content */}
      <div className="z-10 w-full md:w-1/2 text-center md:text-right mt-6 md:mt-0">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-light tracking-wide text-gray-200"
      >
        <span className="mr-2">I'M</span>
        <span className="font-bold text-white">
          <Typewriter
            words={['DEVANANDHA S']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={1500}
          />
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-2 text-lg sm:text-base lg:text-xl font-medium text-gray-300"
      >
        FULL STACK WEB DEVELOPER
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-7 mb-10 flex flex-col sm:flex-row gap-2 justify-center md:justify-end"
      >
        <a
          href="#contact"
          className={`px-6 py-2 rounded-xl font-medium shadow-md bg-[#f8f8f8] text-[#121212] hover:bg-[#c5b6c1] hover:text-[#222] transition ${
            animateButton ? 'animate-pulse' : ''
          }`}
        >
          HIRE ME
        </a>

        <a
          href={resume}
          target="_blank"
          className="px-6 py-2 rounded-xl border border-white font-medium text-white hover:border-2 dark:hover:bg-white/10 transition"
        >
          VIEW RESUME
        </a>
      </motion.div>
    </div>

      {/* Right: Profile Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.90 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full h-96 mt-0 md:mt-0 md:w-[650px] md:h-[550px] mb-0 md:mb-0 flex-shrink-0"
    >
      {/* White Amoeba-style Blob Behind Image 
      <svg 
      className="absolute w-[480px] -top-12 -left-24 md:w-[680px] md:h-[700px] z-0 fill-[#4B32A8]"
      viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#8A3FFC" d="M45.1,-42.7C60.3,-30,75.6,-15,77.7,2.1C79.8,19.1,68.6,38.3,53.4,52.9C38.3,67.6,19.1,77.7,-0.8,78.5C-20.8,79.3,-41.6,70.9,-55.1,56.2C-68.7,41.6,-75.1,20.8,-74.6,0.5C-74.1,-19.9,-66.8,-39.7,-53.3,-52.4C-39.7,-65.2,-19.9,-70.7,-2.4,-68.3C15,-65.9,30,-55.4,45.1,-42.7Z" transform="translate(100 100)" />
      </svg> 
       */}
      {/* Profile Image Container */}
      <div className="relative z-10 w-full h-82 md:w-[600px] md:h-full overflow-hidden mx-auto md:m-auto">
        {/* Dark Theme Image */}
        <img
          src={profilepic}
          alt="Profile Dark"
          className="w-full h-full object-cover md:my-0 dark:block"
        />
      </div>
    </motion.div>

    </section>
  );
}
