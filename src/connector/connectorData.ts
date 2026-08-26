export interface StepMetric {
  label: string
  value: string
}

export interface SatelliteTool {
  name: string
  iconKey: string
  role: string
}

export interface StepItem {
  stepNumber: string
  brandKey: string
  brandName: string
  title: string
  category: string
  body: string
  point: string
  badge: string
  accentColor: string
  glowColor: string
  emblemChar: string
  metrics: StepMetric[]
  satelliteTools: SatelliteTool[]
}

export interface RailToolItem {
  id: string
  name: string
  category: string
  iconKey: string
  badge: string
  color: string
  latency: string
}

export const CONNECTOR_STEPS: StepItem[] = [
  {
    stepNumber: '01',
    brandKey: 'google',
    brandName: 'Google Workspace',
    title: 'Google Office & Cloud',
    category: 'OFFICE AUTOMATION',
    body: 'Automate client email triage in Gmail, parse incoming data into Google Sheets, sync calendar schedules, and organize cloud documents with zero manual effort.',
    point: 'E.g. OAuth 2.0 Ingestion, Sheet ETL & Drive Archival',
    badge: 'WORKSPACE SUITE',
    accentColor: '#4285F4',
    glowColor: 'rgba(66, 133, 244, 0.35)',
    emblemChar: 'G',
    metrics: [
      { label: 'Sync Latency', value: '< 15ms' },
      { label: 'Protocol', value: 'OAuth 2.0' },
      { label: 'Security', value: 'SOC2 Type II' }
    ],
    satelliteTools: [
      { name: 'Gmail', iconKey: 'gmail', role: 'Email Ingestion' },
      { name: 'Sheets', iconKey: 'sheets', role: 'Tabular ETL' },
      { name: 'Drive', iconKey: 'drive', role: 'Cloud Storage' },
      { name: 'Docs', iconKey: 'docs', role: 'Doc Generation' },
      { name: 'Calendar', iconKey: 'calendar', role: 'Auto Scheduling' },
      { name: 'Cloud', iconKey: 'cloud', role: 'Compute Engine' }
    ]
  },
  {
    stepNumber: '02',
    brandKey: 'shopify',
    brandName: 'Shopify Commerce',
    title: 'E-Commerce & Orders',
    category: 'COMMERCE ENGINE',
    body: 'Trigger instant order fulfillment, sync multi-currency payouts via Stripe and PayPal, and auto-update warehouse inventory levels in real time.',
    point: 'E.g. Webhook Order Routing, Stripe Billing & Tax Engine',
    badge: 'COMMERCE MESH',
    accentColor: '#95BF47',
    glowColor: 'rgba(149, 191, 71, 0.35)',
    emblemChar: 'ECOM',
    metrics: [
      { label: 'Settlement', value: 'Instant T+0' },
      { label: 'Compliance', value: 'PCI-DSS Level 1' },
      { label: 'Webhooks', value: '99.999% SLA' }
    ],
    satelliteTools: [
      { name: 'Shopify', iconKey: 'shopify', role: 'Storefront Hub' },
      { name: 'Stripe', iconKey: 'stripe', role: 'Payment Gateway' },
      { name: 'PayPal', iconKey: 'paypal', role: 'Global Checkout' }
    ]
  },
  {
    stepNumber: '03',
    brandKey: 'hubspot',
    brandName: 'HubSpot & CRM',
    title: 'Sales & Customer Care',
    category: 'REVENUE & CRM',
    body: 'Capture inbound enterprise website leads, auto-triage tier-1 support tickets with Zendesk & Intercom, and trigger personalized email drip campaigns.',
    point: 'E.g. Lead Scoring, Ticket Escalation & Deal Tracking',
    badge: 'CRM PIPELINE',
    accentColor: '#FF7A59',
    glowColor: 'rgba(255, 122, 89, 0.35)',
    emblemChar: 'CRM',
    metrics: [
      { label: 'Response', value: '< 2s AI Triage' },
      { label: 'Pipeline Sync', value: 'Bi-directional' },
      { label: 'Enrichment', value: 'Auto-Clearbit' }
    ],
    satelliteTools: [
      { name: 'HubSpot', iconKey: 'hubspot', role: 'Inbound Leads' },
      { name: 'Salesforce', iconKey: 'salesforce', role: 'Enterprise CRM' },
      { name: 'Zendesk', iconKey: 'zendesk', role: 'Support Desk' },
      { name: 'Intercom', iconKey: 'intercom', role: 'Live Chatbot' }
    ]
  },
  {
    stepNumber: '04',
    brandKey: 'slack',
    brandName: 'Slack & Workplace',
    title: 'Team & Operations',
    category: 'TEAM COLLABORATION',
    body: 'Stream interactive action bots, auto-create sprint bug tickets in Linear and Jira from chat threads, and publish daily async standup summaries to Notion.',
    point: 'E.g. Interactive Modals, Event Subscriptions & Live Alerts',
    badge: 'OPERATIONAL HUB',
    accentColor: '#E01E5A',
    glowColor: 'rgba(224, 30, 90, 0.35)',
    emblemChar: 'OPS',
    metrics: [
      { label: 'Socket Mode', value: 'Sub-millisecond' },
      { label: 'Workspaces', value: '50+ Connected' },
      { label: 'Encryption', value: 'E2EE' }
    ],
    satelliteTools: [
      { name: 'Slack', iconKey: 'slack', role: 'Command Center' },
      { name: 'Linear', iconKey: 'linear', role: 'Issue Tracker' },
      { name: 'Notion', iconKey: 'notion', role: 'Knowledge Base' },
      { name: 'Jira', iconKey: 'jira', role: 'Sprint Board' },
      { name: 'Discord', iconKey: 'discord', role: 'Community Gateway' }
    ]
  },
  {
    stepNumber: '05',
    brandKey: 'github',
    brandName: 'GitHub & Cloud Core',
    title: 'DevOps & Deployments',
    category: 'CI/CD & INFRASTRUCTURE',
    body: 'Trigger automated pull request audits, run Docker container builds, execute Postgres migrations, and deploy globally across AWS and Vercel on git push.',
    point: 'E.g. Git Actions, Edge Serverless & Supabase Postgres',
    badge: 'DEV INFRASTRUCTURE',
    accentColor: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.25)',
    emblemChar: 'DEV',
    metrics: [
      { label: 'Deploy Time', value: '1.2s Edge' },
      { label: 'Uptime SLA', value: '99.999%' },
      { label: 'Sandboxing', value: 'Isolated MicroVM' }
    ],
    satelliteTools: [
      { name: 'GitHub', iconKey: 'github', role: 'Version Control' },
      { name: 'Vercel', iconKey: 'vercel', role: 'Edge Frontend' },
      { name: 'AWS Cloud', iconKey: 'aws', role: 'Cloud Compute' },
      { name: 'Supabase', iconKey: 'supabase', role: 'Postgres & Vector' }
    ]
  },
  {
    stepNumber: '06',
    brandKey: 'meta',
    brandName: 'Meta & Social Growth',
    title: 'Marketing & Audience',
    category: 'GROWTH & MARKETING',
    body: 'Schedule and auto-publish content across Instagram, LinkedIn, and X, auto-respond to customer DMs, and aggregate multi-channel marketing performance.',
    point: 'E.g. Cross-Platform Publishing, DM Bots & Analytics',
    badge: 'MARKETING SUITE',
    accentColor: '#0081FB',
    glowColor: 'rgba(0, 129, 251, 0.35)',
    emblemChar: 'MKTG',
    metrics: [
      { label: 'Channels', value: '6+ Connected' },
      { label: 'Post Sync', value: 'Zero Drop' },
      { label: 'Analytics', value: 'Real-time ROI' }
    ],
    satelliteTools: [
      { name: 'Meta', iconKey: 'meta', role: 'Business Suite' },
      { name: 'Instagram', iconKey: 'instagram', role: 'Visual Posts' },
      { name: 'LinkedIn', iconKey: 'linkedin', role: 'B2B Network' },
      { name: 'X / Twitter', iconKey: 'twitter', role: 'Real-time Feed' }
    ]
  }
]

// Array is ordered so that Google Tools are at the END (index 18..23).
// Because right rail yPercent starts at -100% (translating the rail ALL the way up to show the bottom end at Step 01 Google),
// Google tools will be visible right at the top during Step 01!
export const RIGHT_RAIL_TOOLS: RailToolItem[] = [
  // Step 06 - Social & Marketing (Bottom of scroll)
  {
    id: 'rail-24',
    name: 'LinkedIn B2B',
    category: 'B2B Network',
    iconKey: 'linkedin',
    badge: 'Post Queue',
    color: '#0A66C2',
    latency: '24ms'
  },
  {
    id: 'rail-23',
    name: 'Instagram DM',
    category: 'Social Channels',
    iconKey: 'instagram',
    badge: 'Auto Media',
    color: '#E4405F',
    latency: '18ms'
  },
  {
    id: 'rail-22',
    name: 'Meta Ads & Hub',
    category: 'Marketing Suite',
    iconKey: 'meta',
    badge: 'Graph API',
    color: '#0081FB',
    latency: '22ms'
  },
  // Step 05 - DevOps
  {
    id: 'rail-21',
    name: 'Supabase DB',
    category: 'Cloud Postgres',
    iconKey: 'supabase',
    badge: 'Realtime',
    color: '#3ECF8E',
    latency: '16ms'
  },
  {
    id: 'rail-20',
    name: 'AWS Cloud',
    category: 'Infrastructure',
    iconKey: 'aws',
    badge: 'Lambda/S3',
    color: '#FF9900',
    latency: '15ms'
  },
  {
    id: 'rail-19',
    name: 'Vercel Edge',
    category: 'Serverless CDN',
    iconKey: 'vercel',
    badge: 'Edge Deploy',
    color: '#FFFFFF',
    latency: '2ms'
  },
  {
    id: 'rail-18',
    name: 'GitHub CI/CD',
    category: 'DevOps & Git',
    iconKey: 'github',
    badge: 'Webhooks',
    color: '#FFFFFF',
    latency: '8ms'
  },
  // Step 04 - Workplace & Ops
  {
    id: 'rail-17',
    name: 'Jira Agile',
    category: 'Sprint Board',
    iconKey: 'jira',
    badge: 'REST Hook',
    color: '#0052CC',
    latency: '25ms'
  },
  {
    id: 'rail-16',
    name: 'Notion Sync',
    category: 'Knowledge Base',
    iconKey: 'notion',
    badge: 'Blocks API',
    color: '#FFFFFF',
    latency: '30ms'
  },
  {
    id: 'rail-15',
    name: 'Linear Tasks',
    category: 'Project Tracking',
    iconKey: 'linear',
    badge: 'GraphQL',
    color: '#5E6AD2',
    latency: '14ms'
  },
  {
    id: 'rail-14',
    name: 'Slack Bot',
    category: 'Collaboration',
    iconKey: 'slack',
    badge: 'Socket Mode',
    color: '#E01E5A',
    latency: '5ms'
  },
  // Step 03 - CRM & Sales
  {
    id: 'rail-13',
    name: 'Intercom Bot',
    category: 'Support Chat',
    iconKey: 'intercom',
    badge: 'Live Hook',
    color: '#0057FF',
    latency: '8ms'
  },
  {
    id: 'rail-12',
    name: 'Zendesk Desk',
    category: 'Customer Care',
    iconKey: 'zendesk',
    badge: 'Ticket AI',
    color: '#03363D',
    latency: '15ms'
  },
  {
    id: 'rail-11',
    name: 'Salesforce Core',
    category: 'Enterprise CRM',
    iconKey: 'salesforce',
    badge: 'Deals Sync',
    color: '#00A1E0',
    latency: '28ms'
  },
  {
    id: 'rail-10',
    name: 'HubSpot CRM',
    category: 'Inbound Sales',
    iconKey: 'hubspot',
    badge: 'Lead Triage',
    color: '#FF7A59',
    latency: '16ms'
  },
  // Step 02 - E-Commerce
  {
    id: 'rail-9',
    name: 'PayPal Global',
    category: 'Fintech Gateway',
    iconKey: 'paypal',
    badge: 'Instant Pay',
    color: '#0079C1',
    latency: '30ms'
  },
  {
    id: 'rail-8',
    name: 'Stripe Billing',
    category: 'Fintech Engine',
    iconKey: 'stripe',
    badge: 'Ledger v3',
    color: '#635BFF',
    latency: '22ms'
  },
  {
    id: 'rail-7',
    name: 'Shopify Store',
    category: 'Commerce Hub',
    iconKey: 'shopify',
    badge: 'Storefront',
    color: '#95BF47',
    latency: '26ms'
  },
  // Step 01 - Google Workspace (Top of scroll - visible at Step 01)
  {
    id: 'rail-6',
    name: 'Google Meet',
    category: 'Google Workspace',
    iconKey: 'meet',
    badge: 'Video Transcribe',
    color: '#00AC47',
    latency: '20ms'
  },
  {
    id: 'rail-5',
    name: 'Google Calendar',
    category: 'Google Workspace',
    iconKey: 'calendar',
    badge: 'Auto Schedule',
    color: '#4285F4',
    latency: '14ms'
  },
  {
    id: 'rail-4',
    name: 'Google Docs',
    category: 'Google Workspace',
    iconKey: 'docs',
    badge: 'Doc Engine',
    color: '#4285F4',
    latency: '19ms'
  },
  {
    id: 'rail-3',
    name: 'Google Drive',
    category: 'Google Workspace',
    iconKey: 'drive',
    badge: 'Files API',
    color: '#FBBC04',
    latency: '24ms'
  },
  {
    id: 'rail-2',
    name: 'Google Sheets',
    category: 'Google Workspace',
    iconKey: 'sheets',
    badge: 'Live Tabular',
    color: '#0F9D58',
    latency: '18ms'
  },
  {
    id: 'rail-1',
    name: 'Gmail Sync',
    category: 'Google Workspace',
    iconKey: 'gmail',
    badge: 'Mail Ingest',
    color: '#EA4335',
    latency: '12ms'
  }
]
