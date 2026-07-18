import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Engineering from "./components/Engineering";
import WorkWithMe from "./components/WorkWithMe";
import KnowledgeHub from "./components/KnowledgeHub";
import WolvesMacht from "./components/WolvesMacht";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <AnimatedBackground />
      <Cursor />
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Engineering />
        <WorkWithMe />
        <KnowledgeHub />
        <WolvesMacht />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
