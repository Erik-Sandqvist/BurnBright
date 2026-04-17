import HeroContent from './HeroContent'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <HeroContent />
      <HeroVisual />
    </div>
  )
}
