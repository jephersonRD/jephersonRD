import { ArrowUpRight, Code2, Terminal, Cpu } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { GITHUB_USERNAME } from '../../config/projects'
import type { Section } from '../../App'

interface HeroProps {
  followers?: number
  repos?: number
  stars?: number
  onNavigate: (section: Section) => void
}

export function Hero({ followers = 0, repos = 0, stars = 0, onNavigate }: HeroProps) {
  const { ref: heroRef, isInView } = useInView(0.1)

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_45%,rgba(255,255,255,0.03),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_30%,transparent_100%)]" />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Code2 className="absolute top-[18%] left-[12%] w-5 h-5 text-white/[0.03] animate-[float_8s_ease-in-out_infinite]" />
        <Terminal className="absolute top-[25%] right-[15%] w-4 h-4 text-white/[0.03] animate-[float_10s_ease-in-out_infinite_2s]" />
        <Cpu className="absolute bottom-[20%] left-[20%] w-4 h-4 text-white/[0.03] animate-[float_9s_ease-in-out_infinite_4s]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-12 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/50 text-[11px] tracking-[0.25em] uppercase font-inter font-semibold">
            Open Source Developer
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-inter font-extrabold text-white text-6xl sm:text-7xl md:text-8xl lg:text-[140px] tracking-[-0.04em] leading-[0.85] mb-10 transition-all duration-700 delay-75"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(28px)',
          }}
        >
          JEPHERSON
          <br />
          <span className="text-white/25">MEDINA</span>
        </h1>

        {/* Roles */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10 transition-all duration-700 delay-150"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {['Software Developer', 'Open Source Builder', 'Tech Creator'].map((role, i) => (
            <span key={role} className="flex items-center gap-5">
              <span className="text-white/40 text-sm sm:text-base font-inter font-medium">{role}</span>
              {i < 2 && <span className="w-1 h-1 rounded-full bg-white/15" />}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <p
          className="text-white/30 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-16 font-inter transition-all duration-700 delay-200"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Construyo software, herramientas y proyectos experimentales alrededor de tecnologia, gaming e IA.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-5 mb-24 transition-all duration-700 delay-300"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <button
            onClick={() => onNavigate('projects')}
            className="group inline-flex items-center gap-2.5 bg-white text-black px-8 py-4 rounded-[12px] text-xs font-bold tracking-wide transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]"
          >
            Ver Proyectos
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 border border-white/[0.12] text-white/70 px-8 py-4 rounded-[12px] text-xs font-semibold tracking-wide transition-all duration-300 hover:border-white/[0.25] hover:bg-white/[0.04] hover:text-white"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex items-center justify-center gap-12 sm:gap-20 transition-all duration-700 delay-[400ms]"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {[
            { value: followers.toLocaleString(), label: 'Followers' },
            { value: repos.toString(), label: 'Repos' },
            { value: stars.toLocaleString(), label: 'Stars' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white font-inter tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] text-white/20 tracking-[0.18em] uppercase mt-2 font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
      `}</style>
    </section>
  )
}
