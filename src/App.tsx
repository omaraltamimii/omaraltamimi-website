import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import AnimatedBackground from "./components/AnimatedBackground";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import Fitness from "./components/Fitness";
import MuscleUpJourney from "./components/MuscleUpJourney";
import Creator from "./components/Creator";
import BrandCTA from "./components/BrandCTA";
import Engineering from "./components/Engineering";
import About from "./components/About";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ErrorBoundary>
      <AnimatePresence>
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <AnimatedBackground />
      <Cursor />
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />
        <Intro />
        <Stats />
        <Fitness />
        <MuscleUpJourney />
        <Creator />
        <BrandCTA />
        <Engineering />
        <About />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </ErrorBoundary>
  );
}
