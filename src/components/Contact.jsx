import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section 
      id="contact"
      className="py-20 px-6 md:px-20 
        bg-gradient-to-l from-[#d2d3d6] via-[#dee4e8] to-[#d6d6e0] 
        dark:bg-gradient-to-r dark:from-[#0c142a] dark:via-[#121132] dark:to-[#212951]
        text-gray-900 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 md:mb-10 gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-10">
            <h2 className="text-4xl md:text-5xl md:pb-4 md:leading-relaxed font-bold text-center md:text-left 
              bg-gradient-to-t from-[#100d2d] via-[#1b1a3e] to-[#1e1f2e] 
              dark:from-[#e0e0e0] dark:to-[#aaaaaa] 
              bg-clip-text text-transparent"
            >
            Need a developer you can trust?<br/>Let’s chat.
            </h2>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {[
                  "Ecommerce website",
                  "Portfolio Website",
                  "Saas Website",
                  "Landing Page",
                  "Blog Website",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white/30 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-sm font-medium text-gray-800 dark:text-white backdrop-blur-lg shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column – Form */}
          <div className="w-full md:mt-12">
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
                bg-white/20 text-black 
                dark:bg-[#1b1f2c]/60 dark:text-white 
                shadow-inner shadow-black/10
                dark:shadow-[inset_0_0_10px_rgba(0,255,255,0.1)]
                backdrop-blur-md
                ring-1 ring-white/30 dark:ring-cyan-500 
                focus:outline-none focus:ring-2 focus:ring-gray-400 
                transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-5 py-3 rounded-lg
                bg-white/20 text-black 
                dark:bg-[#1b1f2c]/60 dark:text-white 
                shadow-inner shadow-black/10
                dark:shadow-[inset_0_0_10px_rgba(0,255,255,0.1)]
                backdrop-blur-md
                ring-1 ring-white/30 dark:ring-cyan-500 
                focus:outline-none focus:ring-2 focus:ring-gray-400 
                transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="px-5 py-3 rounded-lg
                bg-white/20 text-black 
                dark:bg-[#1b1f2c]/60 dark:text-white 
                shadow-inner shadow-black/10
                dark:shadow-[inset_0_0_10px_rgba(0,255,255,0.1)]
                backdrop-blur-md
                ring-1 ring-white/30 dark:ring-cyan-300 
                focus:outline-none focus:ring-2 focus:ring-gray-400
                transition resize-none"
            />


              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="self-start px-6 py-3 rounded-xl font-semibold 
                  bg-gradient-to-br 
                  from-[#ffffff] via-[#d4d4d4] to-[#b6b6b6] 
                  dark:from-[#1f233d] dark:via-[#2d3255] dark:to-[#4e5678] 
                  text-black dark:text-white 
                  shadow-md shadow-white/40 
                  dark:shadow-[0_4px_20px_rgba(0,255,255,0.1)] 
                  hover:brightness-100 transition"
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

export default Contact;
