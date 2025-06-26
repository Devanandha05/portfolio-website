import { motion } from "framer-motion"; 
import blob from "../assets/blob.png";
import profilepic from "../assets/portrait-black-nobg1.png";
import blob1 from "../assets/white-blob.png"

export default function Hero() {
  return (
    <section className="relative overflow-hidden 
      bg-gradient-to-b from-[#331b2b] via-[#643581] to-[#2f1842]
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
          className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-light tracking-wide text-gray-200"
        >
          I'M <span className="font-bold">DEVANANDHA S</span>
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
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-end"
        >
          <a href="#contact" className=" px-6 py-2 rounded-full font-medium shadow-md bg-[#f8f8f8] text-[#121212] hover:bg-[#c5b6c1] hover:text-[#222] transition">
            HIRE ME
          </a>
          <a href="/resume.pdf" target="_blank" className="px-6 py-2 rounded-full border border-white font-medium text-white hover:border-2 dark:hover:bg-white/10 transition">
            VIEW RESUME
          </a>
        </motion.div>
      </div>

      {/* Right: Profile Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.90 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-72 h-82 mt-0 md:mt-0 md:w-[400px] md:h-[550px] mb-0 md:mb-0 flex-shrink-0"
    >
      {/* White Amoeba-style Blob Behind Image */}
<div className="absolute -top-10 -left-20 w-[460px] h-[580px] z-0">
  <img src={blob1} alt="blob1" />
</div>
<div className="absolute -top-2 -left-24 w-[460px] h-[580px] z-0">
  <img src={blob} alt="blob2" />
</div>
<div className="hidden md:block absolute top-20 -left-22 w-[480px] h-[600px] z-0">
  <img src={blob} alt="blob3" />
</div>
<div className="hidden md:block absolute top-36 -left-28 w-[420px] h-[500px] z-0">
  <img src={blob1} alt="blob4" />
</div>

      {/* Profile Image Container */}
      <div className="relative z-10 w-72 h-82 md:w-full md:h-full overflow-hidden rounded-3xl md:rounded-xl mx-auto md:mx-0">
        {/* Dark Theme Image */}
        <img
          src={profilepic}
          alt="Profile Dark"
          className="w-full h-full object-cover dark:block"
        />
      </div>
    </motion.div>

    </section>
  );
}
