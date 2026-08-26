import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FaqSection.css'

gsap.registerPlugin(ScrollTrigger)

interface FaqItem {
  id: string
  number: string
  question: string
  answer: string
  category: string
  spec: string
}

const FAQ_DATA: FaqItem[] = [
  {
    id: '01',
    number: '01',
    question: 'What makes GRAVION different from traditional agent frameworks?',
    answer: 'GRAVION compiles non-deterministic natural language intents directly into verified AST execution subgraphs. Instead of loose API chaining, it runs specialized actor agents across microVMs with sub-20ms state consensus.',
    category: 'ARCHITECTURE',
    spec: 'P2P ACTOR MESH // DETERMINISTIC AST'
  },
  {
    id: '02',
    number: '02',
    question: 'How does GRAVION guarantee data privacy & isolation?',
    answer: 'All tool calls and state mutations execute within cryptographically sandboxed micro-containers. Customer data remains end-to-end encrypted, never leaves your specified compute region, and is never used to train third-party models.',
    category: 'SECURITY',
    spec: 'MICROVM ISOLATION // ZERO DATA LEAK'
  },
  {
    id: '03',
    number: '03',
    question: 'Can GRAVION be self-hosted on private infrastructure?',
    answer: 'Yes. GRAVION provides native Docker, Kubernetes, and Bare-Metal deployment scripts. You can run the entire agent mesh behind private VPCs on AWS, GCP, Azure, or on-premise hardware with full telemetry control.',
    category: 'DEPLOYMENT',
    spec: 'KUBERNETES // AIR-GAPPED VPC'
  },
  {
    id: '04',
    number: '04',
    question: 'Which LLMs and foundation models are supported?',
    answer: 'GRAVION features first-class native adapters for Claude 3.5, GPT-4o, DeepSeek, and open-weight models like Llama 3 and Qwen. You can also hook up local Ollama or vLLM endpoints with zero latency penalty.',
    category: 'INTEGRATIONS',
    spec: 'MULTI-LLM ADAPTERS // LOCAL ENDPOINTS'
  },
  {
    id: '05',
    number: '05',
    question: 'What is the performance overhead during multi-agent handoffs?',
    answer: 'Our low-level Rust event bus maintains peer-to-peer state consensus in under 15ms per handoff. This eliminates HTTP request bottlenecks and achieves up to 10x throughput compared to standard agent loops.',
    category: 'PERFORMANCE',
    spec: '<15MS STATE SYNC // RUST CORE'
  },
  {
    id: '06',
    number: '06',
    question: 'How do developers define custom tools and actions?',
    answer: 'Tools are defined using simple TypeScript or Python function schemas with Zod / Pydantic validation. GRAVION handles type checking, automatic retries, sandbox isolation, and audit trail logging out of the box.',
    category: 'DEVELOPER SDK',
    spec: 'TS / PYTHON SDK // AUTOMATIC AST'
  }
]

export const FaqSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<FaqItem>(FAQ_DATA[0])
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const questionsListRef = useRef<HTMLDivElement | null>(null)
  const answerPaneRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const header = headerRef.current
    const questionsList = questionsListRef.current
    const answerPane = answerPaneRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      // 1. Header fade + rise animation
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // 2. Question items staggered cascade
      if (questionsList) {
        const items = questionsList.querySelectorAll('.faq-item')
        gsap.fromTo(
          items,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: questionsList,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // 3. Answer pane reveal
      if (answerPane) {
        gsap.fromTo(
          answerPane,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: answerPane,
              start: 'top 82%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="faq-section" id="faq">
      <div className="faq-container">
        {/* Section Header */}
        <header ref={headerRef} className="faq-header">
          <span className="faq-tag">SYSTEM SPECIFICATION // FAQ</span>
          <h2 className="faq-title">Frequently asked questions.</h2>
        </header>

        {/* 2-Column Split Layout */}
        <div className="faq-grid">
          {/* Left Column: Questions List (Hover to select) */}
          <div ref={questionsListRef} className="faq-questions-list">
            {FAQ_DATA.map((item) => {
              const isActive = activeItem.id === item.id
              return (
                <div
                  key={item.id}
                  className={`faq-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveItem(item)}
                  onClick={() => setActiveItem(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={item.question}
                >
                  <div className="faq-item-left">
                    <span className="faq-item-num">{item.number}</span>
                    <span className="faq-item-question">{item.question}</span>
                  </div>

                  <svg
                    className="faq-item-arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14m0 0l-6-6m6 6l-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )
            })}
          </div>

          {/* Right Column: Sticky Answer Inspector */}
          <div ref={answerPaneRef} className="faq-answer-pane" key={activeItem.id}>
            <div className="faq-fade-enter">
              <div className="faq-answer-header">
                <span className="faq-answer-index">SECTION {activeItem.number}</span>
                <span className="faq-answer-badge">{activeItem.category}</span>
              </div>

              <div className="faq-answer-body">
                <h3 className="faq-answer-title">{activeItem.question}</h3>
                <p className="faq-answer-text">{activeItem.answer}</p>
              </div>

              <div className="faq-answer-footer">
                <span className="faq-answer-spec">{activeItem.spec}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
