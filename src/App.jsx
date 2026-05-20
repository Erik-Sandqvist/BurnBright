import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import DarkVeil from './components/DarkVeil'
import ScrollProgress from './components/ScrollProgress'
import HomePage from './pages/HomePage'
import VisualPage from './pages/VisualPage'

function App() {
  return (
    <div className="relative min-h-screen bg-transparent font-sans text-[#f4e8ea] antialiased selection:bg-[rgba(236,34,39,0.35)] selection:text-[#fff1f2]">
      <ScrollProgress />

      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ width: '100vw', height: '100vh' }}
      >
        <DarkVeil
          hueShift={600}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.9}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visual" element={<VisualPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
