import { Globe, Music } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { SocialCard } from '../ui/SocialCard'
import { SOCIAL_LINKS } from '../../config/projects'

function GithubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.18z"/>
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "w-5 h-5"} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function RedditIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  )
}

export function Socials() {
  const { ref, isInView } = useInView(0.1)

  const socials = [
    { icon: <GithubIcon />, platform: 'GitHub', username: SOCIAL_LINKS.github.username, url: SOCIAL_LINKS.github.url, stat: '3k+ followers' },
    { icon: <TikTokIcon />, platform: 'TikTok', username: SOCIAL_LINKS.tiktok.username, url: SOCIAL_LINKS.tiktok.url },
    { icon: <YoutubeIcon />, platform: 'YouTube', username: SOCIAL_LINKS.youtube.username, url: SOCIAL_LINKS.youtube.url },
    { icon: <XIcon />, platform: 'X / Twitter', username: SOCIAL_LINKS.x.username, url: SOCIAL_LINKS.x.url },
    { icon: <InstagramIcon />, platform: 'Instagram', username: SOCIAL_LINKS.instagram.username, url: SOCIAL_LINKS.instagram.url },
    { icon: <RedditIcon />, platform: 'Reddit', username: SOCIAL_LINKS.reddit.username, url: SOCIAL_LINKS.reddit.url },
  ]

  return (
    <section id="socials" ref={ref} className="relative min-h-[calc(100vh-7rem)] flex flex-col justify-center py-32 sm:py-40 lg:py-48">
      <div className="container-main">
        {/* Section Header */}
        <div
          className="flex items-center gap-5 mb-20 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="w-12 h-12 rounded-2xl bg-white/[0.06] flex items-center justify-center ring-1 ring-white/[0.08]">
            <Globe className="w-6 h-6 text-white/50" />
          </div>
          <div className="flex-1">
            <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight font-inter">
              Redes Sociales
            </h2>
            <p className="text-white/30 text-sm font-inter mt-1.5">
              Encuentrame en estas plataformas
            </p>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent hidden sm:block" />
        </div>

        {/* Social Grid */}
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 transition-all duration-700 delay-100"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {socials.map((social) => (
            <SocialCard
              key={social.platform}
              icon={social.icon}
              platform={social.platform}
              username={social.username}
              url={social.url}
              stat={social.stat}
            />
          ))}
        </div>

        {/* YouTube Section */}
        <div
          className="mt-24 transition-all duration-700 delay-200"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <YoutubeIcon className="w-5 h-5 text-red-500/80" />
            <h3 className="text-white/50 text-sm font-medium tracking-wide uppercase font-inter">
              Ultimos Videos
            </h3>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 sm:p-16 text-center ring-1 ring-white/[0.04]">
            <YoutubeIcon className="w-14 h-14 text-white/[0.06] mx-auto mb-5" />
            <p className="text-white/25 text-sm font-inter max-w-sm mx-auto leading-relaxed">
              Videos disponibles en{' '}
              <a
                href={SOCIAL_LINKS.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white/70 underline underline-offset-4 decoration-white/20 transition-colors"
              >
                YouTube
              </a>
            </p>
          </div>
        </div>

        {/* TikTok Section */}
        <div
          className="mt-12 transition-all duration-700 delay-300"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Music className="w-5 h-5 text-pink-500/80" />
            <h3 className="text-white/50 text-sm font-medium tracking-wide uppercase font-inter">
              TikTok
            </h3>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 sm:p-16 text-center ring-1 ring-white/[0.04]">
            <Music className="w-14 h-14 text-white/[0.06] mx-auto mb-5" />
            <p className="text-white/25 text-sm font-inter max-w-sm mx-auto leading-relaxed">
              Sigueme en{' '}
              <a
                href={SOCIAL_LINKS.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white/70 underline underline-offset-4 decoration-white/20 transition-colors"
              >
                TikTok
              </a>
              {' '}para contenido de tecnologia, gaming y desarrollo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
