import React from 'react'
import {
  SiGoogle,
  SiGmail,
  SiGooglesheets,
  SiGoogledrive,
  SiGoogledocs,
  SiGooglecalendar,
  SiGooglemeet,
  SiGooglecloud,
  SiShopify,
  SiStripe,
  SiPaypal,
  SiHubspot,
  SiZendesk,
  SiIntercom,
  SiNotion,
  SiLinear,
  SiJira,
  SiDiscord,
  SiGithub,
  SiVercel,
  SiSupabase,
  SiMeta,
  SiFacebook,
  SiInstagram,
  SiX
} from 'react-icons/si'
import {
  FaSalesforce,
  FaSlack,
  FaLinkedin,
  FaAws,
  FaAmazon
} from 'react-icons/fa6'

export interface IconProps {
  className?: string
  size?: number
  color?: string
}

export const GoogleIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiGoogle className={className} size={size} color={color} />
export const GmailIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiGmail className={className} size={size} color={color} />
export const SheetsIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiGooglesheets className={className} size={size} color={color} />
export const DriveIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiGoogledrive className={className} size={size} color={color} />
export const DocsIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiGoogledocs className={className} size={size} color={color} />
export const CalendarIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiGooglecalendar className={className} size={size} color={color} />
export const MeetIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiGooglemeet className={className} size={size} color={color} />
export const CloudIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiGooglecloud className={className} size={size} color={color} />

export const ShopifyIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiShopify className={className} size={size} color={color} />
export const StripeIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiStripe className={className} size={size} color={color} />
export const PayPalIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiPaypal className={className} size={size} color={color} />

export const HubSpotIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiHubspot className={className} size={size} color={color} />
export const SalesforceIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <FaSalesforce className={className} size={size} color={color} />
export const ZendeskIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiZendesk className={className} size={size} color={color} />
export const IntercomIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiIntercom className={className} size={size} color={color} />

export const SlackIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <FaSlack className={className} size={size} color={color} />
export const NotionIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiNotion className={className} size={size} color={color} />
export const LinearIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiLinear className={className} size={size} color={color} />
export const JiraIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiJira className={className} size={size} color={color} />
export const DiscordIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiDiscord className={className} size={size} color={color} />

export const GitHubIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiGithub className={className} size={size} color={color} />
export const VercelIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiVercel className={className} size={size} color={color} />
export const AWSIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <FaAws className={className} size={size} color={color} />
export const AmazonIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <FaAmazon className={className} size={size} color={color} />
export const SupabaseIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiSupabase className={className} size={size} color={color} />

export const MetaIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiMeta className={className} size={size} color={color} />
export const FacebookIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiFacebook className={className} size={size} color={color} />
export const InstagramIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiInstagram className={className} size={size} color={color} />
export const XTwitterIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <SiX className={className} size={size} color={color} />
export const LinkedInIcon: React.FC<IconProps> = ({ className, size = 24, color }) => <FaLinkedin className={className} size={size} color={color} />

// Brand Icon Resolver Component
export const BrandIconRenderer: React.FC<{ iconKey: string; size?: number; className?: string; color?: string }> = ({
  iconKey,
  size = 24,
  className = '',
  color
}) => {
  switch (iconKey.toLowerCase()) {
    // Google
    case 'google':
      return <GoogleIcon size={size} className={className} color={color} />
    case 'gmail':
      return <GmailIcon size={size} className={className} color={color} />
    case 'sheets':
      return <SheetsIcon size={size} className={className} color={color} />
    case 'drive':
      return <DriveIcon size={size} className={className} color={color} />
    case 'docs':
      return <DocsIcon size={size} className={className} color={color} />
    case 'calendar':
      return <CalendarIcon size={size} className={className} color={color} />
    case 'meet':
      return <MeetIcon size={size} className={className} color={color} />
    case 'cloud':
      return <CloudIcon size={size} className={className} color={color} />

    // Shopify
    case 'shopify':
      return <ShopifyIcon size={size} className={className} color={color} />
    case 'stripe':
      return <StripeIcon size={size} className={className} color={color} />
    case 'paypal':
      return <PayPalIcon size={size} className={className} color={color} />

    // CRM
    case 'hubspot':
      return <HubSpotIcon size={size} className={className} color={color} />
    case 'salesforce':
      return <SalesforceIcon size={size} className={className} color={color} />
    case 'zendesk':
      return <ZendeskIcon size={size} className={className} color={color} />
    case 'intercom':
      return <IntercomIcon size={size} className={className} color={color} />

    // Team Ops
    case 'slack':
      return <SlackIcon size={size} className={className} color={color} />
    case 'notion':
      return <NotionIcon size={size} className={className} color={color} />
    case 'linear':
      return <LinearIcon size={size} className={className} color={color} />
    case 'jira':
      return <JiraIcon size={size} className={className} color={color} />
    case 'discord':
      return <DiscordIcon size={size} className={className} color={color} />

    // DevOps
    case 'github':
      return <GitHubIcon size={size} className={className} color={color} />
    case 'vercel':
      return <VercelIcon size={size} className={className} color={color} />
    case 'aws':
    case 'amazon':
      return <AWSIcon size={size} className={className} color={color} />
    case 'supabase':
      return <SupabaseIcon size={size} className={className} color={color} />

    // Social
    case 'meta':
      return <MetaIcon size={size} className={className} color={color} />
    case 'facebook':
      return <FacebookIcon size={size} className={className} color={color} />
    case 'instagram':
      return <InstagramIcon size={size} className={className} color={color} />
    case 'twitter':
    case 'x':
      return <XTwitterIcon size={size} className={className} color={color} />
    case 'linkedin':
      return <LinkedInIcon size={size} className={className} color={color} />

    default:
      return <GoogleIcon size={size} className={className} color={color} />
  }
}
