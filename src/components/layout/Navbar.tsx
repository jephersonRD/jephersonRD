import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { Section } from '../../App'

const NAV_LINKS: { label: string; section: Section }[] = [
  { label: 'Home', section: 'home' },
  { label: 'Proyectos', section: 'projects' },
  { label: 'Redes', section: 'socials' },
  { label: 'Sobre mi', section: 'about' },
  { label: 'Donaciones', section: 'donations' },
]

interface NavbarProps {
  activeSection: Section
  onNavigate: (section: Section) => void
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (section: Section) => {
    setMenuOpen(false)
    onNavigate(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-48px)] max-w-[720px]">
        <div className="flex items-center justify-between h-16 px-6 rounded-[18px] bg-white/[0.04] backdrop-blur-2xl border border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          <button
            onClick={() => handleNavClick('home')}
            className="text-white font-extrabold text-sm tracking-[0.2em] font-inter hover:text-white/80 transition-colors"
          >
            JEPHERSON
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavClick(link.section)}
                className={cn(
                  'px-4 py-2 text-[11px] font-semibold tracking-wide rounded-[10px] transition-all duration-300 font-inter',
                  activeSection === link.section
                    ? 'text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/[0.06]'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors rounded-[10px] hover:bg-white/[0.06]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-[#09090b]/98 backdrop-blur-3xl flex flex-col transition-all duration-500 md:hidden',
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-2 px-10">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.section}
              onClick={() => handleNavClick(link.section)}
              className={cn(
                'text-4xl font-semibold tracking-tight transition-all duration-300 py-5 font-inter',
                activeSection === link.section
                  ? 'text-white'
                  : 'text-white/30 hover:text-white/60'
              )}
              style={{
                transitionDelay: menuOpen ? `${i * 60 + 100}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
