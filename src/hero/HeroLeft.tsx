import React from 'react'
import './HeroLeft.css'

export const HeroLeft: React.FC = () => {
  return (
    <div className="hero-left-container">
      {/* Top Badge / Micro-Capsule */}
      <div className="hero-badge">
        <span className="hero-badge-text">AUTONOMOUS WORKFLOW ENGINE</span>
      </div>

      {/* Main Heading */}
      <h1 className="hero-heading">
        Build autonomous AI without code
      </h1>

      {/* Subheading */}
      <p className="hero-subheading">
        Connect tools, assign tasks, and deploy self-running agents in minutes.
      </p>

      {/* Call to Actions with Dynamic Kinetic Flows */}
      <div className="hero-cta-group">
        {/* Primary CTA: Horizontal Left-to-Right Flow */}
        <button className="hero-btn-primary kinetic-btn" type="button">
          <div className="kinetic-text-track">
            <span className="kinetic-text-default">Start building</span>
            <span className="kinetic-text-hover">It&apos;s free</span>
          </div>
          <div className="kinetic-arrow-track">
            <svg 
              className="hero-btn-arrow" 
              width="14" 
              height="14" 
              viewBox="0 0 14 14" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" 
                stroke="currentColor" 
                strokeWidth="1.3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
        </button>

        {/* Secondary CTA: Vertical Top-to-Bottom Flow */}
        <button className="hero-btn-secondary kinetic-btn-vertical" type="button">
          <div className="kinetic-vertical-track">
            <span className="kinetic-vtext-default">How it works</span>
            <span className="kinetic-vtext-hover">Watch demo</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default HeroLeft
