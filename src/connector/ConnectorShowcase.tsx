import React from 'react'
import type { StepItem, RailToolItem } from './connectorData'
import { BrandIconRenderer } from './BrandIcons'
import './ConnectorShowcase.css'

interface ConnectorShowcaseProps {
  steps: StepItem[]
  rightRailTools: RailToolItem[]
  activeStepIndex: number
  onStepClick: (index: number) => void
  leftOuterPanesRef: React.MutableRefObject<(HTMLDivElement | null)[]>
  leftInnerPanesRef: React.MutableRefObject<(HTMLDivElement | null)[]>
  rightRailRef: React.RefObject<HTMLDivElement | null>
}

export const ConnectorShowcase: React.FC<ConnectorShowcaseProps> = ({
  steps,
  rightRailTools,
  activeStepIndex: _activeStepIndex,
  onStepClick: _onStepClick,
  leftOuterPanesRef,
  leftInnerPanesRef,
  rightRailRef
}) => {
  return (
    <>
      {/* 1. Left Column: White Light Theme Panel with Monochrome Watermark & Central Node Graph */}
      <div className="connector-left-showcase">
        {steps.map((step, s) => {
          // Take 4 connected tool names
          const connectedTools = step.satelliteTools.slice(0, 4)

          return (
            <div
              key={`left-pane-${step.brandKey}-${s}`}
              ref={(el) => {
                leftOuterPanesRef.current[s] = el
              }}
              className="connector-left-outer-pane"
              style={{ zIndex: s + 1 }}
            >
              <div
                ref={(el) => {
                  leftInnerPanesRef.current[s] = el
                }}
                className="connector-left-inner-pane"
              >
                <div className="hub-showcase-panel-white">
                  {/* Background Monochrome Watermark Logo (Single logo with higher opacity) */}
                  <div className="hub-white-watermark-wrap">
                    <BrandIconRenderer
                      iconKey={step.brandKey}
                      size={440}
                      className="hub-white-monochrome-logo"
                    />
                  </div>

                  {/* Center Node Graph Structure */}
                  <div className="hub-node-network-container">
                    {/* Central Brand Heading with Ubuntu Sans */}
                    <div className="hub-node-center-heading">
                      <h2 className="hub-ubuntu-brand-title">
                        {step.brandName}
                      </h2>
                    </div>

                    {/* SVG Connector Lines & Directional Arrows */}
                    <svg
                      className="hub-node-connectors-svg"
                      viewBox="0 0 320 180"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Line 1: Center to Top-Left */}
                      <path
                        d="M160 90 L80 35"
                        stroke="#D1D5DB"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      {/* Arrow 1 */}
                      <polygon points="76,32 86,33 82,41" fill="#9CA3AF" />

                      {/* Line 2: Center to Top-Right */}
                      <path
                        d="M160 90 L240 35"
                        stroke="#D1D5DB"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      {/* Arrow 2 */}
                      <polygon points="244,32 238,41 234,33" fill="#9CA3AF" />

                      {/* Line 3: Center to Bottom-Left */}
                      <path
                        d="M160 90 L80 145"
                        stroke="#D1D5DB"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      {/* Arrow 3 */}
                      <polygon points="76,148 82,139 86,147" fill="#9CA3AF" />

                      {/* Line 4: Center to Bottom-Right */}
                      <path
                        d="M160 90 L240 145"
                        stroke="#D1D5DB"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      {/* Arrow 4 */}
                      <polygon points="244,148 234,147 238,139" fill="#9CA3AF" />

                      {/* Center Origin Dot */}
                      <circle cx="160" cy="90" r="4" fill="#111827" />
                    </svg>

                    {/* 4 Connected Tool Nodes (Pure Typography / Clean text nodes without logo) */}
                    <div className="hub-nodes-grid">
                      {connectedTools.map((tool, idx) => (
                        <div key={tool.name} className={`hub-node-item hub-node-pos-${idx + 1}`}>
                          <span className="hub-node-name">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* 2. Right Parallax Rail: Real Connected App Cards */}
      <div className="connector-right-rail-wrap">
        <div ref={rightRailRef} className="connector-right-rail-list">
          {rightRailTools.map((tool) => (
            <div key={tool.id} className="rail-tool-card">
              <div className="rail-icon-direct">
                <BrandIconRenderer iconKey={tool.iconKey} size={24} />
              </div>
              <div className="rail-info-wrap">
                <span className="rail-tool-name">{tool.name}</span>
                <span className="rail-tool-category">{tool.category}</span>
              </div>
              <span className="rail-status-pill">{tool.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
