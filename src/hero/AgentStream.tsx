import React, { useEffect, useRef } from 'react'
import './AgentStream.css'

interface AgentItem {
  id: string
  name: string
  action: string
  status: 'Running' | 'Active' | 'Synced' | 'Listening'
  iconPath: React.ReactNode
}

const AGENTS_LIST: AgentItem[] = [
  {
    id: 'youtube',
    name: 'YouTube Agent',
    action: 'Metadata & Video Analytics',
    status: 'Running',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <polygon points="10 15 15 12 10 9" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'instagram',
    name: 'Instagram Agent',
    action: 'Post Scheduler & DM Flow',
    status: 'Active',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  },
  {
    id: 'gmail',
    name: 'Gmail Agent',
    action: 'Inbox Sort & Auto-Drafts',
    status: 'Synced',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  },
  {
    id: 'sheets',
    name: 'Google Sheets Agent',
    action: 'Formula & Live Data Sync',
    status: 'Listening',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M8 13h8" />
        <path d="M8 17h8" />
        <path d="M12 9v12" />
      </svg>
    )
  },
  {
    id: 'research',
    name: 'Web Research Agent',
    action: 'Deep Search & Synthesis',
    status: 'Running',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    )
  },
  {
    id: 'dashboard',
    name: 'SaaS Dashboard Agent',
    action: 'Metric & KPI Monitoring',
    status: 'Active',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    )
  },
  {
    id: 'filesystem',
    name: 'File System Agent',
    action: 'S3 & Local File Ops',
    status: 'Synced',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      </svg>
    )
  },
  {
    id: 'twitter',
    name: 'Twitter / X Agent',
    action: 'Thread & Auto Engagement',
    status: 'Running',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733-16z" />
        <path d="M4 20l6.768-6.768M20 4l-6.768 6.768" />
      </svg>
    )
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Agent',
    action: 'Outreach & Profile Sync',
    status: 'Active',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    id: 'notion',
    name: 'Notion Agent',
    action: 'Auto-Docs & Knowledgebase',
    status: 'Synced',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2z" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    )
  },
  {
    id: 'slack',
    name: 'Slack Agent',
    action: 'Team Channel Workflows',
    status: 'Listening',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect width="3" height="8" x="13" y="2" rx="1.5" />
        <path d="M19 8.5a1.5 1.5 0 0 1-1.5 1.5H13v-3a1.5 1.5 0 0 1 3 0v1.5z" />
        <rect width="3" height="8" x="8" y="14" rx="1.5" />
        <path d="M5 15.5A1.5 1.5 0 0 1 6.5 14H11v3a1.5 1.5 0 0 1-3 0v-1.5z" />
      </svg>
    )
  },
  {
    id: 'shopify',
    name: 'Shopify Agent',
    action: 'Inventory & Order Pipeline',
    status: 'Running',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    )
  },
  {
    id: 'stripe',
    name: 'Stripe Agent',
    action: 'Revenue & Billing Events',
    status: 'Active',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    )
  },
  {
    id: 'postgres',
    name: 'PostgreSQL Agent',
    action: 'SQL Queries & Replication',
    status: 'Synced',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    )
  },
  {
    id: 'discord',
    name: 'Discord Agent',
    action: 'Community Auto-Moderator',
    status: 'Listening',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6h0a14.5 14.5 0 0 0-4-1.3 1 1 0 0 0-1 .5 10.3 10.3 0 0 0-.5 1.1 13.9 13.9 0 0 0-5 0 10.3 10.3 0 0 0-.5-1.1 1 1 0 0 0-1-.5A14.5 14.5 0 0 0 6 6a15.7 15.7 0 0 0-2.8 11.2 1 1 0 0 0 .5.8 14.8 14.8 0 0 0 4.6 2.3 1 1 0 0 0 1.1-.5 11 11 0 0 0 .9-1.5 9.7 9.7 0 0 1-1.6-.8 1 1 0 0 1-.2-1.4 1 1 0 0 1 1.4-.2c.1.1.8.6 1.7 1a12.8 12.8 0 0 0 8.8 0c.9-.4 1.6-.9 1.7-1a1 1 0 0 1 1.4.2 1 1 0 0 1-.2 1.4 9.7 9.7 0 0 1-1.6.8 11 11 0 0 0 .9 1.5 1 1 0 0 0 1.1.5 14.8 14.8 0 0 0 4.6-2.3 1 1 0 0 0 .5-.8A15.7 15.7 0 0 0 18 6Z" />
        <circle cx="9" cy="12" r="1" fill="currentColor" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'support',
    name: 'Support Agent',
    action: '24/7 AI Ticket Resolver',
    status: 'Running',
    iconPath: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    )
  }
]

const ALL_CARDS = [...AGENTS_LIST, ...AGENTS_LIST]

export const AgentStream: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const scrollPosRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)
  const viewportHRef = useRef(750)

  useEffect(() => {
    const updateViewport = () => {
      if (containerRef.current) {
        viewportHRef.current = containerRef.current.clientHeight || window.innerHeight || 750
      }
    }
    updateViewport()
    window.addEventListener('resize', updateViewport, { passive: true })

    let animationFrameId: number
    const CARD_STEP = 62 // 48px height + 14px gap
    const HALF_TRACK = AGENTS_LIST.length * CARD_STEP // 992px
    const SPEED = 0.040 // Constant continuous velocity

    const animate = (now: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = now
      }
      const dt = Math.min(now - lastTimeRef.current, 50)
      lastTimeRef.current = now

      // UNSTOPPABLE CONTINUOUS SCROLL: Never paused by accidental mouse boundaries
      scrollPosRef.current = (scrollPosRef.current + SPEED * dt) % HALF_TRACK

      const scrollPos = scrollPosRef.current
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(0, ${-scrollPos}px, 0)`
      }

      const viewportH = viewportHRef.current
      const centerY = viewportH * 0.5

      // Pure GPU transformation: zero layout reflows, 120 FPS hardware speed
      for (let i = 0; i < ALL_CARDS.length; i++) {
        const cardEl = cardRefs.current[i]
        if (!cardEl) continue

        const cardScreenY = i * CARD_STEP - scrollPos + 24
        const distFromCenter = Math.abs(cardScreenY - centerY)
        const normalizedDist = distFromCenter / (viewportH * 0.5)

        // Wave amplitude (1.0 at center, 0.0 at edges)
        const amplitude = normalizedDist >= 1 ? 0 : Math.pow(Math.cos(normalizedDist * (Math.PI / 2)), 2.0)

        // Voice Wave Horizontal Expansion via GPU scaleX
        const scaleX = 0.60 + amplitude * 0.40
        const scaleY = 0.95 + amplitude * 0.05

        // Pure GPU matrix transformation with zero glare
        cardEl.style.transform = `scale(${scaleX}, ${scaleY})`
        cardEl.style.opacity = '1'
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', updateViewport)
    }
  }, [])

  return (
    <div className="agent-stream-wrapper" ref={containerRef}>
      <div className="agent-stream-track" ref={trackRef}>
        {ALL_CARDS.map((agent, index) => (
          <div
            key={`${agent.id}-${index}`}
            ref={(el) => { cardRefs.current[index] = el }}
            className="agent-card"
          >
            {/* Left Platform Icon & Title */}
            <div className="agent-card-main">
              <div className="agent-card-icon">
                {agent.iconPath}
              </div>
              <span className="agent-card-name">{agent.name}</span>
            </div>

            {/* Extended Details */}
            <div className="agent-card-details">
              <span className="agent-card-action">{agent.action}</span>
              <div className="agent-card-status">
                <span className="agent-status-dot" />
                <span className="agent-status-label">{agent.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AgentStream
