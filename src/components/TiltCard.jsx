import { useRef, useState } from 'react'

export default function TiltCard({ children, className = '', maxTilt = 9 }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)' })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({
      transform: `perspective(900px) rotateX(${(-y * maxTilt).toFixed(2)}deg) rotateY(${(x * maxTilt).toFixed(2)}deg) scale(1.03)`,
      transition: 'transform 0.12s ease-out',
      willChange: 'transform',
    })
  }

  const onLeave = () => {
    setStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.55s cubic-bezier(.2,.9,.2,1)',
      willChange: 'transform',
    })
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className} style={style}>
      {children}
    </div>
  )
}
