import { Star, GitFork, ExternalLink, Clock } from 'lucide-react'
import { formatDate, getLanguageColor } from '../../lib/utils'

interface ProjectCardProps {
  name: string
  description: string | null
  language: string | null
  stars: number
  forks: number
  updatedAt: string
  htmlUrl: string
  homepage: string | null
  topics?: string[]
  isFeatured?: boolean
}

export function ProjectCard({
  name,
  description,
  language,
  stars,
  forks,
  updatedAt,
  htmlUrl,
  homepage,
  topics = [],
  isFeatured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-7 sm:p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-[0_0_50px_rgba(255,255,255,0.02)] ${
        isFeatured ? 'border-white/[0.1] bg-white/[0.03]' : ''
      }`}
    >
      <div>
        <div className="flex items-start justify-between mb-5">
          <h3 className="text-white font-semibold text-lg tracking-tight group-hover:text-white/90 transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 text-white/25 text-[11px] ml-3 flex-shrink-0">
            <Clock className="w-3 h-3" />
            <span>{formatDate(updatedAt)}</span>
          </div>
        </div>

        <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-2">
          {description || 'No description provided'}
        </p>

        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-3 py-1.5 text-[10px] rounded-[10px] bg-white/[0.04] text-white/35 border border-white/[0.05]"
              >
                {topic}
              </span>
            ))}
            {topics.length > 4 && (
              <span className="px-3 py-1.5 text-[10px] rounded-[10px] bg-white/[0.04] text-white/25">
                +{topics.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            {language && (
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: getLanguageColor(language) }}
                />
                <span className="text-white/35 text-xs">{language}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-white/30 text-xs">
              <Star className="w-3 h-3" />
              <span>{stars.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/30 text-xs">
              <GitFork className="w-3 h-3" />
              <span>{forks.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-[12px] text-white/25 hover:text-white/60 hover:bg-white/[0.06] transition-all duration-300"
                aria-label={`Demo de ${name}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-[12px] text-white/25 hover:text-white/60 hover:bg-white/[0.06] transition-all duration-300"
              aria-label={`Repository ${name}`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
