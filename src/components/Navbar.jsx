import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      className={`fixed top-0 left-0 z-50 w-full px-6 md:px-10 flex justify-between items-center py-4 transition-all duration-300 ${
        scrolled ? "hidden" : "bg-transparent"
      } text-white`}
    >
      {/* Brand */}
      <h1 className="text-3xl font-headingfont pt-2 font-bold tracking-wider">DS</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-xl pt-2">
        {["about", "skills", "projects"].map((item) => (
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
        className=" md:inline-block px-4 py-2 border border-white rounded-xl text-white hover:bg-white hover:text-black transition font-medium backdrop-blur-sm bg-white/10"
      >
        Reach Out
      </motion.a>

      {/* Mobile Toggle */}
      <div className="md:hidden z-[60]">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background dim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-[#0b0a17] via-[#081226] to-[#14171f] z-50 p-6 flex flex-col gap-6 text-white"
            >
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)}><X size={24} /></button>
              </div>

              {["about", "skills", "projects"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium hover:text-[#bad0d7] transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
