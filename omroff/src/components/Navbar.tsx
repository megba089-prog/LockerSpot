import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/prodotti',  label: 'Prodotti' },
  { to: '/chi-siamo', label: 'Chi Siamo' },
  { to: '/news',      label: 'News' },
  { to: '/contatti',  label: 'Contatti' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="w-full bg-surface border-b border-border hidden md:block">
        <div className="container-omr flex items-center justify-end gap-6 px-6 lg:px-20 xl:px-32 py-2">
          <a href="tel:+390363912282" className="flex items-center gap-1.5 text-xs text-textMut hover:text-accent transition-colors font-mono">
            <Phone size={11} />
            (+39) 0363 912282
          </a>
          <a href="mailto:omr@omroff.it" className="flex items-center gap-1.5 text-xs text-textMut hover:text-accent transition-colors font-mono">
            <Mail size={11} />
            omr@omroff.it
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,12,16,0.97)' : 'rgba(10,12,16,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${scrolled ? '#252836' : 'transparent'}`,
        }}
      >
        <nav className="container-omr flex items-center justify-between px-6 lg:px-20 xl:px-32 h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span
                className="heading-display text-2xl text-textPri tracking-widest"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                OMR
              </span>
              <span className="label-overline" style={{ fontSize: '0.55rem', letterSpacing: '0.18em' }}>
                Officina Meccanica Romanese
              </span>
            </div>
            <div className="w-px h-8 bg-border group-hover:bg-accent transition-colors duration-300" />
            <span className="label-overline hidden sm:block" style={{ fontSize: '0.6rem' }}>
              Dal 1981
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 font-display font-600 text-sm tracking-widest uppercase transition-colors duration-200 ${
                      isActive ? 'text-accent' : 'text-textSub hover:text-textPri'
                    }`
                  }
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.12em' }}
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-4 right-4 h-px bg-accent"
                          style={{ animation: 'lineGrow 0.3s ease forwards' }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li className="ml-4">
              <Link to="/contatti" className="btn-primary text-xs py-2.5 px-5">
                Richiedi Info
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-textSub hover:text-accent transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? '400px' : '0' }}
        >
          <div className="bg-surface border-t border-border px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 border-b border-border font-display font-600 tracking-widest uppercase text-sm ${
                    isActive ? 'text-accent' : 'text-textSub'
                  }`
                }
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.12em' }}
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a href="tel:+390363912282" className="flex items-center gap-2 text-xs text-textMut font-mono">
                <Phone size={12} /> (+39) 0363 912282
              </a>
              <a href="mailto:omr@omroff.it" className="flex items-center gap-2 text-xs text-textMut font-mono">
                <Mail size={12} /> omr@omroff.it
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
