export default function HeroVisual() {
  return (
    <div className="relative grid min-h-[360px] place-items-center lg:min-h-[460px]" aria-hidden="true">
      <div className="absolute right-10 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(236,34,39,0.95),rgba(110,14,16,0))] blur-[10px]" />
      <div className="absolute bottom-16 left-4 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(11,18,56,0.95),rgba(11,18,56,0))] blur-[10px]" />
      <div className="absolute bottom-3 left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(110,14,16,0.85),rgba(110,14,16,0))] blur-[10px]" />
      <div className="relative z-10 grid min-h-[300px] w-full max-w-[360px] content-end gap-3 rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(14,18,12,0.18),rgba(14,18,12,0.72)),linear-gradient(135deg,rgba(236,34,39,0.14),rgba(11,18,56,0.78))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_48px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <span className="text-[0.8rem] uppercase tracking-[0.24em] text-white/70">Adore You</span>
        <strong className="text-[clamp(2rem,4vw,3rem)] tracking-[-0.05em] text-[#fff8f8]">
          Burn Bright
        </strong>
      </div>
    </div>
  )
}
