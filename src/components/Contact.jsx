import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Sparkles } from "lucide-react";

const serviceOptions = [
  "Brand new website",
  "Portfolio redesign",
  "SaaS product",
  "E-commerce storefront",
  "Landing page",
  "Blog / content site",
];

const contactCards = [
  {
    title: "Email",
    value: "sdvanandha@gmail.com",
    href: "mailto:sdvanandha@gmail.com",
    icon: Mail,
  },
  {
    title: "Location",
    value: "Chennai, India • Available remotely",
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Github,
  },
];

function FloatingField({ label, type = "text", name, value, onChange, rows, required = false }) {
  const [isFocused, setIsFocused] = useState(false);
  const active = isFocused || value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          active ? "top-2 text-[11px] text-cyan-600 dark:text-cyan-300" : "top-1/2 -translate-y-1/2 text-sm text-slate-500 dark:text-slate-400"
        }`}
      >
        {label}
      </label>
      {rows ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="min-h-[140px] w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 pb-3 pt-7 text-sm text-slate-800 shadow-[0_10px_30px_rgba(15,23,42,0.06)] outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="h-12 w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 pb-2 pt-6 text-sm text-slate-800 shadow-[0_10px_30px_rgba(15,23,42,0.06)] outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
        />
      )}
    </div>
  );
}

function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service],
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setSelectedServices([]);
  };

  return (
    <section
      id="contact"
    >
      <div className="mx-auto max-w-7xl border border-white/40 bg-gradient-to-br from-[#f5f7fb] via-[#eef2f8] to-[#e9edf4] p-6 shadow-[0_30px_80px_rgba(2,6,23,0.08)] dark:border-white/10 dark:from-[#0c1427] dark:via-[#111c34] dark:to-[#182544] md:p-8 lg:p-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12"
        >
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-700 dark:text-cyan-200">
                <Sparkles size={15} />
                Contact
              </div>
              <div className="space-y-3">
                <h2 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                  Let&apos;s chat.
                </h2>
                <p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                  Have a project in mind, a question, or just want to say hi? My inbox is always open.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactCards.map(({ title, value, href, icon: Icon }) => (
                <motion.a
                  key={title}
                  href={href}
                  target={href?.startsWith("mailto") ? undefined : "_blank"}
                  rel={href?.startsWith("mailto") ? undefined : "noreferrer"}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl transition dark:border-white/10 dark:bg-slate-900/75"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-cyan-500/10 p-2.5 text-cyan-700 transition group-hover:scale-110 dark:text-cyan-300">
                    <Icon size={18} />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{title}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{value}</p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-4 shadow-[0_10px_30px_rgba(16,185,129,0.12)]"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                Currently available for new opportunities and freelance work.
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.06)] transition hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  <Icon size={16} />
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] border border-white/60 bg-white/60 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/70 md:p-7"
          >
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  What can I help you with?
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Pick the services that fit your idea so I can better understand your request.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {serviceOptions.map((service) => {
                  const active = selectedServices.includes(service);
                  return (
                    <motion.button
                      key={service}
                      type="button"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => toggleService(service)}
                      className={`rounded-full border px-3.5 py-2 text-sm font-medium transition ${
                        active
                          ? "border-cyan-400 bg-cyan-500 text-white shadow-[0_10px_25px_rgba(6,182,212,0.25)]"
                          : "border-slate-200 bg-white/70 text-slate-700 hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-200"
                      }`}
                    >
                      {service}
                    </motion.button>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="services" value={selectedServices.join(", ")} />

                <div className="grid gap-4 md:grid-cols-2">
                  <FloatingField
                    label="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FloatingField
                    label="Your email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <FloatingField
                  label="Tell me about your idea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />

                <motion.button
                  type="submit"
                  whileHover={!isSubmitting ? { y: -2, scale: 1.01 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(34,211,238,0.25)] transition disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300"
                  >
                    <CheckCircle2 size={18} />
                    Thanks! Your message is ready to send and I’ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
