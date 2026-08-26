import React from 'react'
import './HowItWorksCurtain.css'

interface StepItem {
  number: string
  tag: string
  title: string
  description: string
  detail: string
}

const STEPS: StepItem[] = [
  {
    number: '01',
    tag: 'INGESTION',
    title: 'Intent Parsing',
    description: 'Converts natural language commands into verified AST execution subgraphs in under 20ms.',
    detail: 'Deterministic routing'
  },
  {
    number: '02',
    tag: 'ORCHESTRATION',
    title: 'Distributed Mesh',
    description: 'Dispatches specialized sub-agents over a low-latency event bus with continuous state consensus.',
    detail: 'P2P actor protocol'
  },
  {
    number: '03',
    tag: 'EXECUTION',
    title: 'Sandboxed Runtime',
    description: 'Executes tool calls in isolated microVMs with cryptographic audit logging and self-healing.',
    detail: 'Zero-leak isolation'
  }
]

export const HowItWorksCurtain = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="how-curtain-overlay">
      {/* 1. Pure White Overhead Spotlight */}
      <div className="how-ambient-glow-white" />

      {/* 2. Technical Grid Mesh Layer */}
      <div className="how-grid-mesh-layer" />

      <div className="how-curtain-inner">
        {/* Top Centered Section Header with Sub-badge */}
        <header className="how-curtain-header">
          <div className="how-badge-pill">
            <span className="how-badge-dot" />
            <span>ARCHITECTURE FLOW</span>
          </div>
          <h2 className="how-curtain-main-title">How It Works</h2>
          <p className="how-curtain-subtitle">The autonomous execution lifecycle in three phases.</p>
        </header>

        {/* 3 Horizontal Cards with Flow Laser Connectors & Direct Background Aura */}
        <div className="how-cards-wrapper">
          {/* Luminous White Aura behind the cards grid */}
          <div className="how-cards-bg-glow" />

          <div className="how-cards-grid">
            {STEPS.map((step, idx) => (
              <React.Fragment key={step.number}>
                <div className="how-step-card">
                  {/* Laser Top Shimmer Beam */}
                  <div className="how-card-laser-top" />

                  {/* Card Header: Step Number & Minimal Tag */}
                  <div className="how-card-top">
                    <span className="how-card-num">{step.number}</span>
                    <span className="how-card-tag">{step.tag}</span>
                  </div>

                  {/* Card Content: Title & Description */}
                  <div className="how-card-body">
                    <h3 className="how-card-title">{step.title}</h3>
                    <p className="how-card-desc">{step.description}</p>
                  </div>

                  {/* Card Footer: Subtle Feature Detail */}
                  <div className="how-card-footer">
                    <span className="how-card-dot" />
                    <span className="how-card-detail">{step.detail}</span>
                  </div>
                </div>

                {/* Flow Laser & Arrow between Step 1->2 and Step 2->3 */}
                {idx < STEPS.length - 1 && (
                  <div className="how-flow-connector" aria-hidden="true">
                    <div className="how-connector-line">
                      <span className="how-laser-pulse" />
                    </div>
                    <svg
                      className="how-connector-arrow"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

HowItWorksCurtain.displayName = 'HowItWorksCurtain'
