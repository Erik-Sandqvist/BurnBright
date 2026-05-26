export default function Footer({ variant = 'default' }) {
  if (variant === 'home') {
    return (
      <footer className="mx-auto w-4/5 pb-6 pt-2" id="contact">
        <div className="mb-4 flex w-[min(100%,240px)]">
          <svg viewBox="0 0 560 14" preserveAspectRatio="none" fill="none" aria-hidden="true"
            className="h-[14px] flex-1 overflow-visible">
            <defs>
              <filter id="bbh-home" x="-2%" y="-200%" width="104%" height="500%">
                <feTurbulence type="fractalNoise" baseFrequency="0.78 0.38" numOctaves="4" seed="3" result="n"/>
                <feDisplacementMap in="SourceGraphic" in2="n" scale="2.8" xChannelSelector="R" yChannelSelector="G"/>
              </filter>
            </defs>
            <path d="M2,7 C70,4 160,10 280,6 C400,3 480,9 558,6" stroke="#ec2227" strokeWidth="2.5" strokeLinecap="round" opacity="0.38" filter="url(#bbh-home)"/>
            <path d="M40,9 C130,6 250,11 360,8 C450,5 520,10 545,8" stroke="#ec2227" strokeWidth="1" strokeLinecap="round" opacity="0.18" filter="url(#bbh-home)"/>
            <path d="M2,5 C100,3 230,7 340,5 C450,3 515,7 558,5" stroke="#f68a1f" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" filter="url(#bbh-home)"/>
          </svg>
        </div>
        <p className="text-[0.63rem] uppercase tracking-[0.22em] text-white/22">
          Burn Bright / a mood study for a fictional label.
        </p>
      </footer>
    )
  }

  return (
    <footer className="w-full p-12 pt-2" id="contact">
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.58rem] uppercase tracking-[0.2em] text-white/35">
        <span>© 2026 Burn Bright Studio</span>
        <span className="text-white/20">•</span>
        <a href="#" className="transition-colors hover:text-white/55">Privacy</a>
        <a href="#" className="transition-colors hover:text-white/55">Terms</a>
        <a href="#" className="transition-colors hover:text-white/55">Cookies</a>
        <a href="#" className="transition-colors hover:text-white/55">Disclaimer</a>
      </div>
      <p className="mt-2 text-[0.56rem] uppercase tracking-[0.16em] text-white/25">
        All names, products, and campaigns shown are fictional for concept presentation only.
      </p>
    </footer>
  )
}
