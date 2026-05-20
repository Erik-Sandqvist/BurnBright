import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function NavLink({ to, href, children, onClick }) {
  const location = useLocation()
  const isActive = to && location.pathname === to
  const base = 'text-[0.72rem] no-underline transition-colors focus-visible:text-white uppercase tracking-[0.2em]'
  const color = isActive
    ? 'text-[#ec2227]'
    : 'text-white/72 hover:text-white'

  if (to) {
    return (
      <Link to={to} className={`${base} ${color}`} onClick={onClick}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={`${base} ${color}`} onClick={onClick}>
      {children}
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header
      className="sticky top-0 z-30 w-full border-y border-white/12 bg-[radial-gradient(circle_at_15%_0%,rgba(236,14,19,0.14),transparent_28%),linear-gradient(135deg,rgba(11,8,6,0.88),rgba(14,8,12,0.72))] px-7 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-[18px] saturate-150 md:relative md:z-20"
      aria-label="Burn Bright header"
    >
      <div className="mx-auto w-full">
        <div className="flex w-full items-center justify-between gap-3">
          <Link to="/" aria-label="Burn Bright home">
            <span
              className="text-left text-[clamp(2.4rem,5vw,1.8rem)] leading-none tracking-[0.04em] text-[#ec2227] drop-shadow-[0_0_28px_rgba(236,34,39,0.35)] antialiased [text-shadow:0_1px_0_rgba(0,0,0,0.45)]"
              style={{ fontFamily: '"above-the-sky-condensed","Adore You","Geist Variable",sans-serif', fontWeight: 400, fontStyle: 'normal' }}
            >
              Burn Bright
            </span>
          </Link>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="inline-flex items-center justify-center text-[#ec2227] transition hover:text-[#f7b7b8] md:text-white md:hover:text-[#f4e8ea]"
              aria-label="Shopping cart"
            >
              <FontAwesomeIcon icon={faCartShopping} className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-[#6e0e10]/70 bg-[#0e120c]/80 px-3 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-[#ec2227] shadow-[0_10px_26px_rgba(0,0,0,0.35)] transition hover:border-[#ec2227] hover:text-[#f7b7b8] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="primary-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="mx-auto flex h-3 w-4 flex-col justify-between">
                <span className="h-0.5 w-full rounded-full bg-[#ec2227]" />
                <span className="h-0.5 w-full rounded-full bg-[#ec2227]" />
                <span className="h-0.5 w-full rounded-full bg-[#ec2227]" />
              </span>
            </button>

            <nav className="hidden items-center gap-4 md:flex" aria-label="Primary">
              <NavLink to="/">Manifesto</NavLink>
              <NavLink to="/visual">Visual</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="primary-menu"
            className="mt-4 grid gap-2 rounded-[18px] border border-[#6e0e10]/70 bg-[linear-gradient(180deg,rgba(14,18,12,0.96),rgba(6,6,6,0.96))] px-4 py-4 text-center md:hidden"
            aria-label="Primary"
          >
            <NavLink to="/" onClick={close}>Manifesto</NavLink>
            <NavLink to="/visual" onClick={close}>Visual</NavLink>
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
          </nav>
        ) : null}
      </div>
    </header>
  )
}

export default Header
