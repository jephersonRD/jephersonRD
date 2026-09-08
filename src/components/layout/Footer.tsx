import { GITHUB_USERNAME } from '../../config/projects'

const FOOTER_LINKS = [
  { label: 'GitHub', url: 'https://github.com/jephersonRD' },
  { label: 'TikTok', url: 'https://tiktok.com/@jephMD' },
  { label: 'YouTube', url: 'https://youtube.com/@jephmd' },
  { label: 'Redes', url: '#socials' },
  { label: 'Proyectos', url: '#projects' },
  { label: 'Sobre mi', url: '#about' },
] as const

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-12">
          <div>
            <div className="text-white font-bold text-lg tracking-wider mb-3">
              JEPHERSON MEDINA
            </div>
            <p className="text-white/25 text-sm">
              Software Developer & Open Source Builder
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-white/25 text-xs hover:text-white/50 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-white/15 text-xs">
            &copy; {new Date().getFullYear()} {GITHUB_USERNAME}. Todos los derechos reservados.
          </p>
          <p className="text-white/10 text-xs">
            Built with React, Tailwind CSS & GitHub API
          </p>
        </div>
      </div>
    </footer>
  )
}
