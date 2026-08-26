import React from 'react'
import { HowItWorksCurtain } from './HowItWorksCurtain'
import './HowItWorksSection.css'

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="how-it-works-page-section" id="how-it-works">
      <div className="how-it-works-pinned-wrapper">
        <HowItWorksCurtain />
      </div>
    </section>
  )
}

export default HowItWorksSection
