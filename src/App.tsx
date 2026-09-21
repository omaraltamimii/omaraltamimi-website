import ErrorBoundary from "./components/ErrorBoundary";
import AnimatedBackground from "./components/AnimatedBackground";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Stats from "./components/Stats";
import Collab from "./components/Collab";
import Footer from "./components/Footer";
import Engineering from "./components/Engineering";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState<"home" | "engineering">("home");

  const goEngineering = () => {
    setPage("engineering");
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  const goHome = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handleNavFromEngineering = (id: string) => {
    if (page === "engineering") {
      setPage("home");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <ErrorBoundary>
      <AnimatedBackground />
      <Cursor />
      <ScrollProgress />
      <Navigation onNavClick={handleNavFromEngineering} />

      {page === "engineering" ? (
        <main>
          <Engineering onBack={goHome} />
        </main>
      ) : (
        <main>
          <Home />
          <About />
          <WhatIDo onEngineeringClick={goEngineering} />
          <Stats />
          <Collab />
        </main>
      )}

      <Footer />
    </ErrorBoundary>
  );
}
