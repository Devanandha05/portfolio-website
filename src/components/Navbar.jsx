import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 py-4 text-white md:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 px-4 py-2.5 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "bg-slate-950/70 shadow-lg shadow-black/20" : "bg-white/10"
        }`}
      >
        <a href="#top" className="text-2xl font-bold tracking-[0.35em] text-white">
          DS
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative transition hover:text-cyan-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          className="hidden rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20 md:inline-block"
        >
          Get In Touch
        </motion.a>

        <div className="z-[60] md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-white/15 bg-white/10 p-2 transition hover:bg-white/20"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col justify-center gap-8 bg-[#0f111a] px-8 py-12 text-white shadow-2xl"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold tracking-wide capitalize transition hover:text-cyan-400"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * navItems.indexOf(item) }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-center font-semibold text-cyan-100"
                whileHover={{ scale: 1.04 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
