import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[100] h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-[linear-gradient(90deg,#ec2227,#f68a1f)] shadow-[0_0_10px_rgba(236,34,39,0.7)]"
        style={{ width: `${pct}%`, transition: 'width 0.08s linear' }}
      />
    </div>
  )
}
