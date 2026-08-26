import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CONNECTOR_STEPS, RIGHT_RAIL_TOOLS } from './connectorData'
import { ConnectorShowcase } from './ConnectorShowcase'
import { ConnectorNarrative } from './ConnectorNarrative'
import { HowItWorksCurtain } from '../howitworks/HowItWorksCurtain'
import './Connector.css'

gsap.registerPlugin(ScrollTrigger)

export const Connector: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const stickyViewportRef = useRef<HTMLDivElement | null>(null)
  const stepRowsRef = useRef<(HTMLDivElement | null)[]>([])
  const leftOuterPanesRef = useRef<(HTMLDivElement | null)[]>([])
  const leftInnerPanesRef = useRef<(HTMLDivElement | null)[]>([])
  const titleWordsRef = useRef<(HTMLSpanElement | null)[][]>([])
  const bodyWordsRef = useRef<(HTMLSpanElement | null)[][]>([])
  const rightRailRef = useRef<HTMLDivElement | null>(null)
  const curtainRef = useRef<HTMLDivElement | null>(null)
  const curtainTriggerRef = useRef<HTMLDivElement | null>(null)
  const prevIndexRef = useRef<number>(0)
  const animatedSetRef = useRef<Set<number>>(new Set())
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0)

  useEffect(() => {
    const section = sectionRef.current
    const stickyViewport = stickyViewportRef.current
    const rightRail = rightRailRef.current
    if (!section || !stickyViewport) return

    const ease = 'power2.inOut'

    // Initial setup for left media panes
    leftOuterPanesRef.current.forEach((pane, i) => {
      if (!pane) return
      if (i === 0) {
        gsap.set(pane, { clipPath: 'inset(0% 0% 0% 0%)' })
      } else {
        gsap.set(pane, { clipPath: 'inset(0% 100% 0% 0%)' })
      }
    })

    leftInnerPanesRef.current.forEach((inner) => {
      if (inner) gsap.set(inner, { scale: 1 })
    })

    // Initial setup for word masks
    CONNECTOR_STEPS.forEach((_, s) => {
      const tWords = titleWordsRef.current[s]
      const bWords = bodyWordsRef.current[s]
      if (tWords && tWords.length) {
        gsap.set(tWords.filter(Boolean), { yPercent: s === 0 ? 0 : 120 })
      }
      if (bWords && bWords.length) {
        gsap.set(bWords.filter(Boolean), { yPercent: s === 0 ? 0 : 120 })
      }
    })

    if (curtainRef.current) {
      gsap.set(curtainRef.current, { xPercent: 100 })
    }

    if (!animatedSetRef.current.has(0)) {
      animatedSetRef.current.add(0)
    }

    const ctx = gsap.context(() => {
      // 1. PIN the sticky viewport across the entire scroll runway
      ScrollTrigger.create({
        trigger: section,
        pin: stickyViewport,
        start: 'top top',
        end: 'bottom bottom',
        pinSpacing: false
      })

      // 2. Step ScrollTriggers to drive step change & text roll up
      stepRowsRef.current.forEach((stepEl, s) => {
        if (!stepEl) return

        ScrollTrigger.create({
          trigger: stepEl,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => handleStepChange(s),
          onEnterBack: () => handleStepChange(s)
        })
      })

      function handleStepChange(newIndex: number) {
        setActiveStepIndex(newIndex)
        const prevIndex = prevIndexRef.current

        const tWords = titleWordsRef.current[newIndex]?.filter(Boolean) || []
        const bWords = bodyWordsRef.current[newIndex]?.filter(Boolean) || []

        if (tWords.length) {
          gsap.to(tWords, {
            yPercent: 0,
            duration: 0.6,
            stagger: 0.04,
            ease: 'power3.out',
            overwrite: 'auto'
          })
        }

        if (bWords.length) {
          gsap.to(bWords, {
            yPercent: 0,
            duration: 0.5,
            delay: 0.2,
            stagger: 0.015,
            ease: 'power3.out',
            overwrite: 'auto'
          })
        }

        if (newIndex === prevIndex) return

        if (newIndex > prevIndex) {
          for (let s = prevIndex + 1; s <= newIndex; s++) {
            const el = leftOuterPanesRef.current[s]
            const prevInner = leftInnerPanesRef.current[s - 1]
            if (el) {
              gsap.to(el, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.45, ease: ease })
            }
            if (prevInner) {
              gsap.to(prevInner, { scale: 1, duration: 0.45, ease: ease })
            }
          }
        } else {
          for (let s = prevIndex; s > newIndex; s--) {
            const el = leftOuterPanesRef.current[s]
            const prevInner = leftInnerPanesRef.current[s - 1]
            if (el) {
              gsap.to(el, { clipPath: 'inset(0% 100% 0% 0%)', duration: 0.45, ease: ease })
            }
            if (prevInner) {
              gsap.to(prevInner, { scale: 1.1, duration: 0.45, ease: ease })
            }
          }
        }

        prevIndexRef.current = newIndex
      }

      // 3. Right Rail Parallax Scrub
      if (rightRail) {
        const lastStep = stepRowsRef.current[CONNECTOR_STEPS.length - 1]
        gsap.fromTo(
          rightRail,
          { yPercent: -100 },
          {
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              endTrigger: lastStep || section,
              end: 'bottom bottom',
              scrub: 0.5
            }
          }
        )
      }

      // 4. Curtain Overlay (Right to Left Slide-in covering entire section right after Step 06)
      if (curtainRef.current) {
        gsap.set(curtainRef.current, { xPercent: 100 })
        const lastStepEl = stepRowsRef.current[CONNECTOR_STEPS.length - 1]

        if (lastStepEl) {
          gsap.fromTo(
            curtainRef.current,
            { xPercent: 100 },
            {
              xPercent: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: lastStepEl,
                start: 'center center',
                end: 'bottom top-=80%',
                scrub: 0.5,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                  if (curtainRef.current) {
                    curtainRef.current.style.pointerEvents = self.progress > 0.05 ? 'auto' : 'none'
                  }
                }
              }
            }
          )
        }
      }
    }, section)

    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 200)

    return () => {
      clearTimeout(timer)
      ctx.revert()
    }
  }, [])

  const scrollToStep = (index: number) => {
    const el = stepRowsRef.current[index]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <>
      <div className="connector-spacer" />
      <section ref={sectionRef} className="connector-section" id="connector">
        {/* 1. PINNED VIEWPORT */}
        <div ref={stickyViewportRef} className="connector-sticky-viewport">
          <ConnectorShowcase
            steps={CONNECTOR_STEPS}
            rightRailTools={RIGHT_RAIL_TOOLS}
            activeStepIndex={activeStepIndex}
            onStepClick={scrollToStep}
            leftOuterPanesRef={leftOuterPanesRef}
            leftInnerPanesRef={leftInnerPanesRef}
            rightRailRef={rightRailRef}
          />
          {/* Full-Page Curtain Overlay (Slides Right-to-Left after Step 06) */}
          <HowItWorksCurtain ref={curtainRef} />
        </div>

        {/* 2. CENTER NARRATIVE: 6 Step Rows + Curtain Trigger (100vh each) */}
        <ConnectorNarrative
          steps={CONNECTOR_STEPS}
          activeStepIndex={activeStepIndex}
          stepRowsRef={stepRowsRef}
          titleWordsRef={titleWordsRef}
          bodyWordsRef={bodyWordsRef}
          curtainTriggerRef={curtainTriggerRef}
        />
      </section>
    </>
  )
}

export default Connector
