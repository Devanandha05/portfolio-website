import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
<section 
  id="contact"
  className="py-20 px-6 md:px-20 
    bg-gradient-to-l from-[#c5c6ca] via-[#cfd6db] to-[#c8c8cc] 
    dark:bg-gradient-to-r dark:from-[#0c142a] dark:via-[#121132] dark:to-[#212951]
    text-gray-900 dark:text-white"
>
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="max-w-6xl mx-auto"
  >
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 flex flex-col items-center md:items-start">
      <h2 className="text-5xl font-bold mb-10 text-center md:text-left 
          bg-gradient-to-r 
          from-[#1d1334]  via-[#32696a] to-[#18173b] 
          dark:from-[#e0e0e0] dark:to-[#aaaaaa] 
          bg-clip-text text-transparent">
          Let's discuss something cool together!
        </h2>
        <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        >
        <div className="flex flex-wrap gap-3">
          {[
            "Ecommerce website",
            "Portfolio Website",
            "Saas Website",
            "Landing Page",
            "Blog Website",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-3 rounded-xl bg-white/30 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-base font-medium text-gray-800 dark:text-white backdrop-blur-lg shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>

        </motion.div>
      </div>
      <div>
        <form
          action="https://formspree.io/f/mgvypyrl"
          method="POST"
          className="flex flex-col space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-5 py-3 rounded-lg
              bg-white/30 text-black 
              dark:bg-[#1b1f2c]/60 dark:text-white 
              shadow-inner shadow-white/40 
              dark:shadow-[inset_0_0_10px_rgba(0,255,255,0.1)]
              backdrop-blur-md
              ring-1 ring-white/50 dark:ring-cyan-500 
              focus:outline-none focus:ring-2 focus:ring-cyan-200 
              transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-5 py-3 rounded-lg
              bg-white/30 text-black 
              dark:bg-[#1b1f2c]/60 dark:text-white 
              shadow-inner shadow-white/40 
              dark:shadow-[inset_0_0_10px_rgba(0,255,255,0.1)]
              backdrop-blur-md
              ring-1 ring-white/50 dark:ring-cyan-500 
              focus:outline-none focus:ring-2 focus:ring-cyan-400 
              transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="px-5 py-3 rounded-lg
              bg-white/30 text-black 
              dark:bg-[#1b1f2c]/60 dark:text-white 
              shadow-inner shadow-white/40 
              dark:shadow-[inset_0_0_10px_rgba(0,255,255,0.1)]
              backdrop-blur-md
              ring-1 ring-white/50 dark:ring-cyan-500 
              focus:outline-none focus:ring-2 focus:ring-cyan-400 
              transition resize-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="self-start px-6 py-3 rounded-full font-semibold 
              bg-gradient-to-br 
              from-[#ffffff] via-[#d4d4d4] to-[#b6b6b6] 
              dark:from-[#1f233d] dark:via-[#2d3255] dark:to-[#4e5678] 
              text-black dark:text-white 
              shadow-md shadow-white/40 
              dark:shadow-[0_4px_20px_rgba(0,255,255,0.2)] 
              hover:brightness-110 transition"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  </motion.div>
</section>

  );
}

export default Contact