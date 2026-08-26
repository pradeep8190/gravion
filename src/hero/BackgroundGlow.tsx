import React from 'react'
import './BackgroundGlow.css'

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="hero-bg-container">
      {/* Right Background Glow & Grid */}
      <div className="right-glow-stage">
        <div className="right-corner-spotlight" />
        <div className="right-diagonal-wave" />
        <div className="right-side-grid" />
      </div>

      {/* Bottom-Left Ambient Glow & Grid */}
      <div className="left-bottom-glow-stage">
        <div className="left-bottom-spotlight" />
        <div className="left-bottom-grid" />
      </div>
    </div>
  )
}

export default BackgroundGlow
