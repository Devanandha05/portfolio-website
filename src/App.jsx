import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <About  />
      <Projects />
      <Contact />
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;
