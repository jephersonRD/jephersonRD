import { Heart, Coffee, CreditCard, Gift } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { GITHUB_USERNAME } from '../../config/projects'

export function Donations() {
  const { ref, isInView } = useInView(0.1)

  const methods = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      name: 'GitHub Sponsors',
      description: 'Apoya directamente desde GitHub',
      url: `https://github.com/sponsors/${GITHUB_USERNAME}`,
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      name: 'Buy Me a Coffee',
      description: 'Invitame un cafe',
      url: '#',
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      name: 'PayPal',
      description: 'Donacion via PayPal',
      url: '#',
    },
  ]

  return (
    <section ref={ref} className="min-h-[calc(100vh-7rem)] flex flex-col justify-center py-32 sm:py-40">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center mx-auto mb-10">
              <Heart className="w-7 h-7 text-white/40" />
            </div>
            <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tight mb-8">
              Apoya Mi Trabajo
            </h2>
          </div>

          <p
            className="text-white/35 text-lg sm:text-xl leading-relaxed mb-20 transition-all duration-700 delay-100"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Si alguno de mis proyectos te ha sido util, puedes ayudarme a continuar
            desarrollando software open source y herramientas gratuitas.
          </p>

          <div
            className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 transition-all duration-700 delay-200"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {methods.map((method) => (
              <a
                key={method.name}
                href={method.url}
                target={method.url !== '#' ? '_blank' : undefined}
                rel={method.url !== '#' ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center gap-5 p-10 rounded-[20px] border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_0_60px_rgba(255,255,255,0.02)]"
              >
                <div className="text-white/25 group-hover:text-white/50 transition-colors duration-300">
                  {method.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-white font-semibold text-sm mb-2">{method.name}</h3>
                  <p className="text-white/25 text-xs">{method.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div
            className="mt-16 flex items-center justify-center gap-2.5 text-white/15 transition-all duration-700 delay-300"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(16px)',
            }}
          >
            <Gift className="w-4 h-4" />
            <span className="text-xs">Cada contribucion hace la diferencia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
