import React from 'react'
import { ScrollFloat } from '../components/ScrollFloat'
import './NarrativeSection.css'

export const NarrativeSection: React.FC = () => {
  return (
    <section className="narrative-section" id="features">
      {/* Soft Ambient Side Wall Glows (Zero Sharp Lines) */}
      <div className="narrative-wall-glow-left" />
      <div className="narrative-wall-glow-right" />

      {/* Seamless Ambient Center Spotlight */}
      <div className="narrative-ambient-spotlight" />

      <div className="narrative-container">
        <ScrollFloat
          animationDuration={1}
          ease="power2.out"
          scrollStart="top 92%"
          scrollEnd="top 25%"
          stagger={0.008}
        >
          <span className="narrative-dim">Traditional automation is rigid and fragile. </span>
          <span className="narrative-bright">Gravion introduces self-governing agents </span>
          <span className="narrative-accent">that reason, adapt to unexpected errors, and run autonomously 24/7.</span>
        </ScrollFloat>
      </div>
    </section>
  )
}

export default NarrativeSection
