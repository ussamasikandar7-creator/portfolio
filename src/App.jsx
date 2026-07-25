import { motion, useScroll, useSpring } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-mint via-mint-2 to-violet origin-left z-[60]"
    />
  );
}

function App() {
  return (
    <div className="bg-ink min-h-screen selection:bg-mint/30">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
