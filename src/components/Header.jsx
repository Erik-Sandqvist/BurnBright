function Header() {
  return (
    <header
      className="relative top-0 z-20 w-full border-y border-white/12 bg-[radial-gradient(circle_at_15%_0%,rgba(236,14,19,0.14),transparent_28%),linear-gradient(135deg,rgba(11,8,6,0.88),rgba(14,8,12,0.72))] px-7 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-[18px] saturate-150"
      aria-label="Burn Bright header"
    >
      <div className="mx-auto flex w-full items-center justify-between gap-4 max-md:flex-col max-md:items-start">
        <div className="grid gap-1" aria-label="Burn Bright">
          <span
            className="ml-56 text-[clamp(2.4rem,5vw,1.8rem)] leading-none tracking-[0.04em] text-[#ec2227] drop-shadow-[0_0_28px_rgba(236,34,39,0.35)] antialiased [text-shadow:0_1px_0_rgba(0,0,0,0.45)]"
            style={{ fontFamily: '"above-the-sky-condensed","Adore You","Geist Variable",sans-serif', fontWeight: 400, fontStyle: 'normal' }}
          >
            Burn Bright
          </span>
        </div>

        <nav className="flex items-center gap-4 uppercase tracking-[0.2em] max-md:flex-wrap mr-28" aria-label="Primary">
          <a className="text-[0.72rem] text-white/72 no-underline transition-colors hover:text-white focus-visible:text-white" href="#manifesto">
            Manifesto
          </a>
          <a className="text-[0.72rem] text-white/72 no-underline transition-colors hover:text-white focus-visible:text-white" href="#visual">
            Visual
          </a>
          <a className="text-[0.72rem] text-white/72 no-underline transition-colors hover:text-white focus-visible:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header