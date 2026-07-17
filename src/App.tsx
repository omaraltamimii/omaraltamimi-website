import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Navigation from './components/Navigation'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Engineering from './components/Engineering'
import Entrepreneurship from './components/Entrepreneurship'
import Sports from './components/Sports'
import Services from './components/Services'
import PersonalBrand from './components/PersonalBrand'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="noise-overlay relative min-h-screen bg-ink-base text-white">
      <Loader show={loading} />
      <Cursor />
      <ScrollProgress />
      <AnimatedBackground />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Timeline />
        <Engineering />
        <Entrepreneurship />
        <Sports />
        <Services />
        <PersonalBrand />
        <Blog />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
