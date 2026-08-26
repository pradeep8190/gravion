import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './PreFooterSection.css'

gsap.registerPlugin(ScrollTrigger)

export const PreFooterSection: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const installCmd = 'npm install @gravion/core'
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current

    if (!section || !container) return

    const ctx = gsap.context(() => {
      const badge = container.querySelector('.prefooter-badge')
      const title = container.querySelector('.prefooter-title')
      const subtitle = container.querySelector('.prefooter-subtitle')
      const cliBox = container.querySelector('.prefooter-cli-box')
      const actions = container.querySelector('.prefooter-actions')
      const bgGlow = section.querySelector('.prefooter-bg-glow')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      if (bgGlow) {
        tl.fromTo(
          bgGlow,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
          0
        )
      }

      if (badge) {
        tl.fromTo(
          badge,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          0.1
        )
      }

      if (title) {
        tl.fromTo(
          title,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          0.2
        )
      }

      if (subtitle) {
        tl.fromTo(
          subtitle,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          0.35
        )
      }

      if (cliBox) {
        tl.fromTo(
          cliBox,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.4)' },
          0.45
        )
      }

      if (actions) {
        tl.fromTo(
          actions,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          0.55
        )
      }
    }, section)

    return () => ctx.revert()
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={sectionRef} className="prefooter-section" id="prefooter">
      <div className="prefooter-bg-glow" aria-hidden="true" />

      <div ref={containerRef} className="prefooter-container">
        <span className="prefooter-badge">GET STARTED // INSTANT DISPATCH</span>
        
        <h2 className="prefooter-title">
          Engineered for autonomous agent meshes.
        </h2>
        
        <p className="prefooter-subtitle">
          Deploy deterministic multi-agent subgraphs in minutes with zero infrastructure overhead. 
          Built for scale, privacy, and low-latency execution.
        </p>

        {/* Interactive CLI Terminal Pill */}
        <div className="prefooter-cli-box">
          <span className="prefooter-cli-text">
            <span className="prefooter-cli-prefix">$</span>
            {installCmd}
          </span>
          <button 
            className="prefooter-copy-btn" 
            onClick={handleCopy}
            aria-label="Copy install command"
          >
            {copied ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>COPIED</span>
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>COPY</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="prefooter-actions">
          <a href="#hero" className="prefooter-btn-primary">
            <span>Start Building Free</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a href="#features" className="prefooter-btn-secondary">
            <span>Explore Documentation</span>
          </a>
        </div>
      </div>
    </section>
  )
}
