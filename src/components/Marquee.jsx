export default function Marquee({ text, speed = 45, className = '' }) {
  const chunk = Array(8).fill(`${text} · `).join('')
  return (
    <div className={`overflow-hidden border-y border-white/8 py-3 ${className}`}>
      <div
        className="inline-flex whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        <span className="text-[0.65rem] uppercase tracking-[0.35em] text-white/30 pr-0">{chunk}</span>
        <span className="text-[0.65rem] uppercase tracking-[0.35em] text-white/30 pr-0">{chunk}</span>
      </div>
    </div>
  )
}
