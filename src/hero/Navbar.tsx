import React from 'react'
import './Navbar.css'

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Enterprise', href: '#enterprise' },
  { label: 'Docs', href: '#docs' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Changelog', href: '#changelog' }
]

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-brand">
          <span className="navbar-brand-name">Gravion AI</span>
        </div>
        <div className="navbar-links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="navbar-link">
              <span className="nav-roller-track">
                <span className="nav-roller-default">{link.label}</span>
                <span className="nav-roller-hover">{link.label}</span>
              </span>
              <span className="nav-link-indicator" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
