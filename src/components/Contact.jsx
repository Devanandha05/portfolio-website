import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-[#e5e8d8] dark:bg-[#13071d] text-gray-800 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Column – Image (hidden on small screens) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:flex justify-center"
          >
            <img
              src="/portfolio-pic1.png"
              alt="Illustration"
              className="w-full max-w-sm md:max-w-md"
            />
          </motion.div>
          {/* Left Column – Heading + Form */}
          <div>
            <h2 className="text-4xl font-bold mb-10 text-center md:text-left">
              Get in Touch
            </h2>
            <form
              action="https://formspree.io/f/mgvypyrl" // <-- replace this!
              method="POST"
              className="flex flex-col space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="px-5 py-3 rounded-lg bg-gray-100 dark:bg-[#321c3d] focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="px-5 py-3 rounded-lg bg-gray-100 dark:bg-[#321c3d] focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="px-5 py-3 rounded-lg  bg-gray-100 dark:bg-[#321c3d] focus:outline-none focus:ring-2 focus:ring-violet-400 transition resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="self-start px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium transition hover:opacity-90"
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
