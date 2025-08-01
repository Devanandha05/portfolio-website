import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profilepic from "../assets/pfp.png";
import resume from "../assets/resume.pdf";

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateButton(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const nameWords = ["DEVANANDHA", "S"];
  const letterVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -3 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative bg-gradient-to-r from-[#0e1321] via-[#0f1532] to-[#0f1a36]
 text-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12">
      
      {/* Text Content */}
      <div className="z-10 w-full md:w-1/2 text-center md:text-right mt-10 md:mt-0">
        
        {/* Intro Line */}
        <motion.h2
          initial={{ opacity: 0, y: 20, letterSpacing: "-0.05em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-4xl md:text-6xl font-light tracking-wider text-gray-300"
        >
          I'M
        </motion.h2>

        {/* Animated Gradient Name */}
        <div className="flex flex-wrap justify-center md:justify-end mt-3 mb-4 text-5xl md:text-7xl font-bold 
        bg-gradient-to-br from-[#d2cfcf] via-[#f7f0f0] to-[#c8c9ce] bg-clip-text text-transparent">
          {nameWords.map((word, wi) => (
            <div key={wi} className="flex font-bodyfont  mr-2">
              {word.split("").map((char, i) => (
                <motion.span
                  key={`${wi}-${i}`}
                  custom={i + wi * 10}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </div>


        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg font-headingfont sm:text-base lg:text-xl font-medium text-gray-300"
        >
          FULL STACK WEB DEVELOPER
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-end"
        >
          {/* Metallic "Hire Me" Button */}
          <a
            href="#contact"
            className="relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-br 
              from-[#ffffff] via-[#d4d4d4] to-[#b6b6b6]
               text-black font-bold shadow-[0_4px_30px_rgba(255,255,255,0.2)] backdrop-blur-md 
               hover:brightness-110 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">HIRE ME</span>
          </a>

          {/* Metallic border "View Resume" Button */}
          <a
            href={resume}
            target="_blank"
            className="relative overflow-hidden px-6 py-3 rounded-xl border border-gray-400 text-white font-medium bg-white/10 hover:scale-105 transition "
          >
            <span className="relative z-10">VIEW RESUME</span>
          </a>
        </motion.div>

      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full md:w-1/2 flex justify-center md:justify-end mb-0 md:mb-0"
      >
        <div className="relative w-[300px] md:w-[500px] rounded-2xl overflow-hidden">
          <img
            src={profilepic}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
