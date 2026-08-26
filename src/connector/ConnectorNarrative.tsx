import React from 'react'
import type { StepItem } from './connectorData'
import './ConnectorNarrative.css'

interface ConnectorNarrativeProps {
  steps: StepItem[]
  activeStepIndex: number
  stepRowsRef: React.MutableRefObject<(HTMLDivElement | null)[]>
  titleWordsRef: React.MutableRefObject<(HTMLSpanElement | null)[][]>
  bodyWordsRef: React.MutableRefObject<(HTMLSpanElement | null)[][]>
  curtainTriggerRef?: React.RefObject<HTMLDivElement | null>
}

export const ConnectorNarrative: React.FC<ConnectorNarrativeProps> = ({
  steps,
  activeStepIndex,
  stepRowsRef,
  titleWordsRef,
  bodyWordsRef,
  curtainTriggerRef
}) => {
  return (
    <div className="connector-center-narrative">
      {steps.map((step, s) => {
        const isActive = s === activeStepIndex
        const titleWords = step.title.split(' ')
        const bodyWords = step.body.split(' ')

        return (
          <div
            key={`step-row-${step.stepNumber}`}
            ref={(el) => {
              stepRowsRef.current[s] = el
            }}
            style={{ gridRow: s + 1 }}
            className={`connector-step-row ${isActive ? 'active' : ''}`}
          >
            <div className="connector-step-body-wrap">
              {/* Category Sub-badge */}
              <div className="connector-step-kicker">
                <span className="connector-kicker-dot" style={{ backgroundColor: '#ffffff' }} />
                <span className="connector-kicker-text">{step.category}</span>
              </div>

              {/* Step Number + Title with Exact Word-Rolling Reveal */}
              <h2 className="connector-step-h2">
                <div className="connector-num-mask">
                  <span className="connector-step-num">{step.stepNumber}</span>
                </div>
                <div className="connector-title-mask-line">
                  {titleWords.map((word, wIdx) => (
                    <span key={wIdx} className="connector-word-mask">
                      <span
                        ref={(el) => {
                          if (!titleWordsRef.current[s]) titleWordsRef.current[s] = []
                          titleWordsRef.current[s][wIdx] = el
                        }}
                        className="connector-word-inner"
                      >
                        {word}
                      </span>
                      <span className="connector-word-space">&nbsp;</span>
                    </span>
                  ))}
                </div>
              </h2>

              {/* Step Body with Word-Rolling Reveal */}
              <p className="connector-step-desc">
                {bodyWords.map((word, wIdx) => (
                  <span key={wIdx} className="connector-word-mask">
                    <span
                      ref={(el) => {
                        if (!bodyWordsRef.current[s]) bodyWordsRef.current[s] = []
                        bodyWordsRef.current[s][wIdx] = el
                      }}
                      className="connector-word-inner"
                    >
                      {word}
                    </span>
                    <span className="connector-word-space">&nbsp;</span>
                  </span>
                ))}
              </p>

              {/* Step Caption / Point */}
              {step.point && (
                <div className="connector-step-point">
                  <svg
                    className="connector-point-arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                  <p className="connector-point-text">{step.point}</p>
                </div>
              )}
            </div>
          </div>
        )
      })}

      {/* Row 7: Scroll Runway Trigger for Right-to-Left Curtain Reveal */}
      <div
        ref={curtainTriggerRef}
        style={{ gridRow: steps.length + 1 }}
        className="connector-curtain-trigger-row"
      />
    </div>
  )
}
