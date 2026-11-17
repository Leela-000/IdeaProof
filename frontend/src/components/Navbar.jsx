import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const links = [
    { to: '/',       label: 'Home' },
    { to: '/#how',   label: 'How It Works' },
    { to: '/#about', label: 'About' },
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
            <div className="navbar__logo-mark">W</div>
            <span className="navbar__logo-text">
              Worth<span>It</span> AI
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="navbar__links">
            {links.map(l => (
              <li key={l.to}>
                <a
                  href={l.to}
                  className={pathname === l.to ? 'active' : ''}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <Link to="/submit" className="btn btn--primary btn--sm navbar__cta">
            Validate Your Idea
          </Link>

          {/* Mobile hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          padding: '16px 24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {links.map(l => (
            <a
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              style={{
                padding: '10px 12px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 500,
                color: 'var(--color-text-light)',
                display: 'block',
              }}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/submit"
            className="btn btn--primary"
            style={{ marginTop: '12px' }}
            onClick={() => setOpen(false)}
          >
            Validate Your Idea
          </Link>
        </div>
      )}
    </nav>
  )
}
