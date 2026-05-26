export default function BrushStrokeH({ className = '' }) {
  return (
    <svg
      viewBox="0 0 560 14"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={`overflow-visible ${className}`}
    >
      <defs>
        <filter id="bbh-shared" x="-2%" y="-200%" width="104%" height="500%">
          <feTurbulence type="fractalNoise" baseFrequency="0.78 0.38" numOctaves="4" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <path
        d="M2,7 C70,4 160,10 280,6 C400,3 480,9 558,6"
        stroke="#ec2227"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.38"
        filter="url(#bbh-shared)"
      />
      <path
        d="M40,9 C130,6 250,11 360,8 C450,5 520,10 545,8"
        stroke="#ec2227"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.18"
        filter="url(#bbh-shared)"
      />
      <path
        d="M2,5 C100,3 230,7 340,5 C450,3 515,7 558,5"
        stroke="#f68a1f"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.15"
        filter="url(#bbh-shared)"
      />
    </svg>
  )
}
