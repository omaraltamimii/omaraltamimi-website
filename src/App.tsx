import ErrorBoundary from "./components/ErrorBoundary";
import AnimatedBackground from "./components/AnimatedBackground";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Collab from "./components/Collab";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ErrorBoundary>
      <AnimatedBackground />
      <Cursor />
      <ScrollProgress />
      <Navigation />

      <main>
        <Home />
        <About />
        <WhatIDo />
        <Collab />
      </main>

      <Footer />
    </ErrorBoundary>
  );
}
