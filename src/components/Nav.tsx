import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../content/site'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isCase = location.pathname !== '/'

  const onNavClick = (href: string) => {
    if (menuOpen) setMenuOpen(false)
    if (href.startsWith('/#') && isCase) {
      // from a case page: go home first; Home reads the pending hash target
      sessionStorage.setItem('pending-hash', href.slice(1))
    }
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          {site.name.split(' ')[0]}<span className="dot">.</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {site.nav.map((n) => (
            <Link key={n.href} to={n.href} onClick={() => onNavClick(n.href)} className="u-link">
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          ref={menuBtnRef}
          className="menu-btn"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      {menuOpen && (
        <div className="menu-overlay" id="mobile-menu" role="dialog" aria-label="Menu">
          <ul>
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link to={n.href} onClick={() => onNavClick(n.href)}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="menu-foot">
            <span>{site.location}</span>
            <span>{site.availability}</span>
          </div>
        </div>
      )}
    </>
  )
}
