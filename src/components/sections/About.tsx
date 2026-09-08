import { User, MapPin, Calendar, Wrench } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { TechBadge } from '../ui/TechBadge'
import { getLanguageColor } from '../../lib/utils'

interface AboutProps {
  bio: string | null
  languages: string[]
  createdAt: string | null
}

const TOOLS = [
  'React', 'Node.js', 'Docker', 'Linux', 'Git', 'VS Code',
  'Neovim', 'Termux', 'Google Colab', 'GitHub Actions',
] as const

export function About({ bio, languages, createdAt }: AboutProps) {
  const { ref, isInView } = useInView(0.1)

  return (
    <section ref={ref} className="min-h-[calc(100vh-7rem)] flex flex-col justify-center py-32 sm:py-40">
      <div className="container-main">
        {/* Header */}
        <div
          className="flex items-center gap-5 mb-20 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">
            <User className="w-5 h-5 text-white/40" />
          </div>
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">
              Sobre Mi
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28">
          {/* Left - Bio */}
          <div
            className="transition-all duration-700 delay-100"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            <div className="flex flex-wrap items-center gap-6 mb-10 text-white/30 text-sm">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4" />
                <span>Republica Dominicana</span>
              </div>
              {createdAt && (
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4" />
                  <span>GitHub desde {new Date(createdAt).getFullYear()}</span>
                </div>
              )}
            </div>

            <p className="text-white/55 text-lg sm:text-xl leading-[1.9] mb-8">
              {bio || 'Desarrollador Autodidacta. Apasionado por la tecnologia y los videojuegos. Optimizando sistemas, creando scripts y explorando el mundo del desarrollo.'}
            </p>

            <p className="text-white/35 text-base leading-[1.9]">
              Me enfoco en construir herramientas que resuelven problemas reales. Desde PCs virtuales en la nube hasta editores de terminal GPU-acelerados. Cada proyecto es una oportunidad para aprender algo nuevo y compartirlo con la comunidad.
            </p>
          </div>

          {/* Right - Tech Stack */}
          <div
            className="transition-all duration-700 delay-200"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            <div className="flex items-center gap-3 mb-10">
              <Wrench className="w-4 h-4 text-white/30" />
              <h3 className="text-white/45 text-sm font-semibold tracking-wider uppercase">
                Languages & Tools
              </h3>
            </div>

            <div className="space-y-10">
              <div>
                <p className="text-white/20 text-[11px] tracking-[0.2em] uppercase mb-5 font-medium">
                  Languages (from GitHub)
                </p>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <TechBadge key={lang} name={lang} color={getLanguageColor(lang)} />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-white/20 text-[11px] tracking-[0.2em] uppercase mb-5 font-medium">
                  Tools & Platforms
                </p>
                <div className="flex flex-wrap gap-3">
                  {TOOLS.map((tool) => (
                    <TechBadge key={tool} name={tool} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
