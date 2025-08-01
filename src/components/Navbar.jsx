import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["about", "skills", "projects"];

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-6 md:px-10 flex justify-between items-center py-4 transition-all duration-300 ${
        scrolled ? "hidden" : "bg-transparent"
      } text-white`}
    >
      {/* Logo (unchanged) */}
      <h1 className="text-3xl font-headingfont pt-2 font-bold tracking-wider">DS</h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 text-xl pt-2">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        className="hidden md:inline-block px-4 py-2 border border-white rounded-xl text-white hover:bg-white hover:text-black transition font-medium backdrop-blur-sm bg-white/10"
      >
        Reach Out
      </motion.a>

      {/* Mobile Toggle */}
      <div className="md:hidden z-[60]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dim Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#0f111a] z-50 flex flex-col justify-center gap-8 px-8 py-12 text-white shadow-xl"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold tracking-wide capitalize hover:text-cyan-400 transition"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * navItems.indexOf(item) }}
                >
                  {item}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 text-center px-4 py-2 border border-white rounded-xl text-white hover:bg-white hover:text-black transition font-medium backdrop-blur-sm bg-white/10"
                whileHover={{ scale: 1.05 }}
              >
                Reach Out
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
