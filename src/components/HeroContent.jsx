export default function HeroContent() {
  return (
    <div>
      <h1 className="mt-3 text-5xl font-bold leading-[0.9] tracking-[-0.04em] text-[#f5ecec] sm:text-7xl lg:text-[8.75rem]">
        Burn Bright
      </h1>
      <div className="mt-7 flex flex-wrap items-center gap-4">
        <a
          className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ec2227,#6e0e10)] px-5 py-3 text-sm font-medium text-[#fff1f2] shadow-[0_16px_30px_rgba(236,34,39,0.24)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(236,34,39,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8d9dd]"
          href="#manifesto"
        >
          Enter the mood
        </a>
        <span className="text-xs uppercase tracking-[0.2em] text-white/68">
          Designed to feel cinematic, nocturnal, and bold.
        </span>
      </div>
    </div>
  )
}
