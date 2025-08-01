import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkillCloud from "./components/Skills";

function App() {
  return (
    <div className="font-sans transition-colors duration-300">
      <Navbar />
      <Hero />
      <SkillCloud />
      <About  />
      <Projects />
      <Contact />
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;
