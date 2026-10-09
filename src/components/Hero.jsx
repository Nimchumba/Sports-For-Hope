import { useEffect, useRef, useState } from 'react'

const PHONE = '254746782709' // the academy's WhatsApp number: 254, then the number without the leading 0
const SUPPORT_MESSAGE = 'Hello Sport for Hope, I would like to support the project.'

const stats = [
  { value: 2019, suffix: '', label: 'Established' },
  { value: 150, suffix: '+', label: 'Players trained' },
  { value: 6, suffix: '', label: 'Age categories' },
  { value: 1, suffix: '', label: 'Coaches' },
]

function Hero() {
  const statsRef = useRef(null)
  const [displayValues, setDisplayValues] = useState(stats.map(() => 0))

  useEffect(() => {
    const statsElement = statsRef.current
    if (!statsElement) return undefined

    let animationFrameId
    let hasAnimated = false

    const animateCounters = () => {
      if (hasAnimated) return
      hasAnimated = true

      const startTime = performance.now()
      const duration = 1800

      const tick = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const easedProgress = 1 - (1 - progress) ** 3

        setDisplayValues(stats.map((stat) => Math.round(stat.value * easedProgress)))

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(tick)
        }
      }

      animationFrameId = requestAnimationFrame(tick)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValues(stats.map((stat) => stat.value))
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(statsElement)

    return () => {
      observer.disconnect()
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(104,255,162,0.18),_transparent_22%),linear-gradient(135deg,#022c22_0%,#0d5a3c_30%,#0c7e4a_100%)] text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.34em] text-lime-300/90">
          Empower • Educate • Transform
        </p>

        <h1 className="hero-title mt-4 uppercase">Created for a purpose</h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100 md:text-2xl">
          Sports for Hope is a sports academy dedicated to nurturing young talent, building
          character, and empowering young people through sport.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="register"
            className="rounded-md bg-lime-400 px-8 py-4 text-lg font-black uppercase tracking-wide text-green-950 shadow-[0_8px_20px_rgba(136,255,163,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-lime-300"
          >
            Register a player
          </a>
          <a
            href="#programs"
            className="rounded-md border-2 border-white/90 bg-transparent px-8 py-4 text-lg font-black uppercase tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-green-900"
          >
            See programs
          </a>
        </div>

        <div className="mt-6">
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent(SUPPORT_MESSAGE)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-md border-2 border-lime-400 bg-transparent px-8 py-3.5 text-lg font-black uppercase tracking-wide text-lime-300 transition duration-300 hover:-translate-y-0.5 hover:bg-lime-400 hover:text-green-950"
          >
            Support us
          </a>
        </div>
      </div>

      <div className="border-t border-green-100/15">
        <div ref={statsRef} className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col items-center justify-end">
              <div className="flex items-end justify-center gap-2">
                <div className="stat-number flex items-end justify-center">
                  <span className="stat-value">{displayValues[index]}</span>
                  {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
                </div>
                {index === stats.length - 1 && (
                  <span className="mb-3 h-5 w-5 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.9)]" />
                )}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero