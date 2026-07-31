import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Check, Copy, Github, Linkedin, Mail, Twitter } from "lucide-react";
import profilepic from "../assets/pfp.png";
import resume from "../assets/resume.pdf";

const roles = ["web applications", "enterprise tools", "intuitive UIs", "AI workflows"];

const floatingBadges = [
  { label: "React", glow: "from-cyan-400 to-sky-500", position: "left-[3%] top-[8%]" },
  { label: "Python", glow: "from-emerald-400 to-lime-500", position: "right-[4%] top-[10%]" },
  { label: "Tailwind", glow: "from-fuchsia-400 to-purple-500", position: "left-[6%] bottom-[12%]" },
  { label: "Claude AI", glow: "from-violet-400 to-indigo-500", position: "right-[6%] bottom-[10%]" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Email", href: "mailto:devanandha@example.com", icon: Mail },
  { label: "X", href: "https://x.com/", icon: Twitter },
];

const highlights = [
  { title: "Analyst Trainee @ Cognizant" },
  { title: "Full-Stack Web Developer" },
  { title: "AI-Assisted Development" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const copyCode = async () => {
    const code = `export const devanandha = {
  role: "Analyst Trainee @ Cognizant",
  focus: ["Full-Stack Dev", "AI Workflows", "Enterprise Systems"],
  status: "Building the future of software 🚀"
};`;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (error) {
      console.error("Unable to copy code", error);
    }
  };

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
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_28%),linear-gradient(120deg,_#0b1020,_#11192f_45%,_#0e1734)] px-6 py-24 text-white min-[480px]:py-28 md:px-10 lg:min-h-screen"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_rgba(255,255,255,0.08),_transparent_55%)]" />
      <div className="absolute left-[-4rem] top-20 -z-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-[-2rem] right-[-2rem] -z-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-badge {
          animation: float 3.2s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center gap-12 lg:flex-row lg:items-center lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full text-center lg:w-[55%] lg:text-left"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl font-light tracking-[0.25em] text-slate-300 sm:text-4xl"
          >
            HI, I&apos;M
          </motion.h2>

          <div className="mt-3 flex flex-wrap justify-center lg:justify-start text-5xl font-bold sm:text-6xl lg:text-7xl">
            {nameWords.map((word, wi) => (
              <div key={wi} className="mr-3 flex">
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

          <div className="mt-6 text-xl font-medium text-slate-200 sm:text-2xl">
            <span>I build </span>
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent"
            >
              {roles[roleIndex]}
            </motion.span>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400 lg:mx-0 lg:text-xl">
            I design and build thoughtful full-stack experiences that balance performance, clarity, and modern AI-assisted workflows.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 px-6 py-3 text-center font-semibold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.25)] transition hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
            >
              View My Work
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center font-semibold text-white backdrop-blur-md transition hover:border-cyan-300 hover:bg-white/15"
            >
              Download Resume
            </a>
          </motion.div>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-full border border-white/15 bg-white/10 p-3 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                aria-label={label}
              >
                <Icon size={18} />
                <span className="pointer-events-none absolute left-1/2 top-[-2.3rem] -translate-x-1/2 rounded-full bg-slate-900/90 px-2.5 py-1 text-[11px] text-slate-200 opacity-0 transition group-hover:opacity-100">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-slate-200 backdrop-blur-md">
                {item.title}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="w-full lg:w-[45%]"
        >
          <div className="relative rounded-[2rem] border border-cyan-400/20 bg-slate-950/80 p-4 shadow-[0_30px_80px_rgba(3,7,18,0.4)] backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <button
                onClick={copyCode}
                className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-200 transition hover:bg-cyan-400/20"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy Code"}
              </button>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm leading-7 text-cyan-200">
                <pre>{`// quick-intro.ts
export const devanandha = {
  role: "Analyst Trainee @ Cognizant",
  focus: ["Full-Stack Dev", "AI Workflows", "Enterprise Systems"],
  status: "Building the future of software 🚀"
};`}</pre>
              </div>

              <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4">
                <img src={profilepic} alt="Profile" className="h-[280px] w-full rounded-2xl object-cover" />
                {floatingBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`float-badge absolute rounded-full border border-white/20 bg-slate-900/80 px-3 py-1.5 text-sm font-semibold text-slate-100 shadow-lg backdrop-blur-md ${badge.position}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center text-sm text-slate-300">
        <span className="mb-2 tracking-[0.3em] text-slate-400">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}
