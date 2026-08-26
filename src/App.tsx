import { BackgroundGlow } from './hero/BackgroundGlow'
import { Navbar } from './hero/Navbar'
import { HeroLeft } from './hero/HeroLeft'
import { AgentStream } from './hero/AgentStream'
import { NarrativeSection } from './narrative/NarrativeSection'
import { Connector } from './connector/Connector'
import { FaqSection } from './faq/FaqSection'
import { PreFooterSection } from './prefooter/PreFooterSection'
import { Footer } from './footer/Footer'
import './App.css'

export default function App() {
  const handleScrollToExplore = () => {
    const nextSection = document.getElementById('features')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className="app-main">
      <Navbar />

      {/* Hero Section (100vh) */}
      <section className="hero-section">
        <BackgroundGlow />
        <div className="hero-content-wrapper">
          <HeroLeft />
          <AgentStream />
        </div>

        {/* Centered Scroll To Explore Indicator (Anchored strictly to Hero 100vh) */}
        <div 
          className="hero-scroll-center"
          onClick={handleScrollToExplore}
          role="button"
          tabIndex={0}
          aria-label="Scroll to explore"
        >
          <span className="hero-scroll-center-text">Scroll to explore</span>
          <svg 
            className="hero-scroll-center-arrow" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 4v16m0 0l-6-6m6 6l6-6" 
              stroke="currentColor" 
              strokeWidth="1.3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </div>
      </section>

      {/* Section 2: Narrative Vision (ScrollFloat Cinematic Opening) */}
      <NarrativeSection />

      {/* Section 3: Connector (6-Step Interactive Pinned Showcase + Curtain Overlay) */}
      <Connector />

      {/* Section 4: Apple Minimalist Split FAQ */}
      <FaqSection />

      {/* Section 5: Pre-Footer CTA */}
      <PreFooterSection />

      {/* Simple Monochrome Footer */}
      <Footer />
    </main>
  )
}
