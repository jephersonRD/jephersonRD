import { useState } from 'react'
import { Activity as ActivityIcon, GitCommit, Star, GitBranch, GitFork, Eye, MessageSquare, AlertCircle, ChevronDown } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { Skeleton } from '../ui/Skeleton'
import { formatDate } from '../../lib/utils'
import type { GitHubEvent } from '../../lib/github'

interface ActivityProps {
  events: GitHubEvent[]
  loading: boolean
}

function getEventInfo(event: GitHubEvent): { icon: React.ReactNode; text: string; color: string; dotColor: string } {
  switch (event.type) {
    case 'PushEvent':
      return {
        icon: <GitCommit className="w-3.5 h-3.5" />,
        text: 'Pushed to',
        color: 'text-emerald-400 bg-emerald-400/10',
        dotColor: 'bg-emerald-400',
      }
    case 'CreateEvent':
      return {
        icon: <GitBranch className="w-3.5 h-3.5" />,
        text: 'Created',
        color: 'text-blue-400 bg-blue-400/10',
        dotColor: 'bg-blue-400',
      }
    case 'DeleteEvent':
      return {
        icon: <AlertCircle className="w-3.5 h-3.5" />,
        text: 'Deleted',
        color: 'text-red-400 bg-red-400/10',
        dotColor: 'bg-red-400',
      }
    case 'ForkEvent':
      return {
        icon: <GitFork className="w-3.5 h-3.5" />,
        text: 'Forked',
        color: 'text-orange-400 bg-orange-400/10',
        dotColor: 'bg-orange-400',
      }
    case 'WatchEvent':
      return {
        icon: <Star className="w-3.5 h-3.5" />,
        text: 'Starred',
        color: 'text-yellow-400 bg-yellow-400/10',
        dotColor: 'bg-yellow-400',
      }
    case 'IssuesEvent':
      return {
        icon: <MessageSquare className="w-3.5 h-3.5" />,
        text: 'Issue on',
        color: 'text-purple-400 bg-purple-400/10',
        dotColor: 'bg-purple-400',
      }
    case 'PullRequestEvent':
      return {
        icon: <Eye className="w-3.5 h-3.5" />,
        text: 'Pull request on',
        color: 'text-cyan-400 bg-cyan-400/10',
        dotColor: 'bg-cyan-400',
      }
    default:
      return {
        icon: <ActivityIcon className="w-3.5 h-3.5" />,
        text: 'Activity on',
        color: 'text-white/40 bg-white/5',
        dotColor: 'bg-white/30',
      }
  }
}

export function Activity({ events, loading }: ActivityProps) {
  const { ref, isInView } = useInView(0.1)
  const [showAll, setShowAll] = useState(false)

  const displayEvents = showAll ? events.slice(0, 10) : events.slice(0, 5)
  const hasMore = events.length > 5

  return (
    <section id="activity" ref={ref} className="relative py-32 sm:py-40 lg:py-48">
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
            <ActivityIcon className="w-6 h-6 text-white/50" />
          </div>
          <div className="flex-1">
            <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight font-inter">
              Ultima Actividad
            </h2>
            <p className="text-white/30 text-sm font-inter mt-1.5">
              GitHub
            </p>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent hidden sm:block" />
        </div>

        {/* Loading */}
        {loading && (
          <div className="space-y-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-16" />
            ))}
          </div>
        )}

        {/* Events Timeline */}
        {!loading && displayEvents.length > 0 && (
          <div
            className="transition-all duration-700 delay-100"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/[0.06]" />

              <div className="space-y-1">
                {displayEvents.map((event, i) => {
                  const info = getEventInfo(event)
                  return (
                    <div
                      key={event.id}
                      className="relative flex items-center gap-6 pl-12 py-5 rounded-xl hover:bg-white/[0.02] transition-all duration-300"
                      style={{
                        transitionDelay: isInView ? `${i * 50}ms` : '0ms',
                      }}
                    >
                      {/* Dot */}
                      <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${info.dotColor} ring-4 ring-[#09090b]`} />

                      <div className="flex-1 min-w-0">
                        <p className="text-white/50 text-sm font-inter">
                          {info.text}{' '}
                          <span className="text-white/80 font-medium">
                            {event.repo.name}
                          </span>
                        </p>
                      </div>
                      <span className="text-white/20 text-xs font-inter whitespace-nowrap">
                        {formatDate(event.created_at)}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Show More */}
            {!showAll && hasMore && (
              <button
                onClick={() => setShowAll(true)}
                className="flex items-center gap-2.5 mx-auto mt-12 px-6 py-3 rounded-xl text-sm text-white/40 hover:text-white/60 hover:bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.12] transition-all font-inter"
              >
                Ver mas actividad
                <ChevronDown className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Empty */}
        {!loading && displayEvents.length === 0 && (
          <div className="text-center py-24">
            <ActivityIcon className="w-12 h-12 text-white/[0.06] mx-auto mb-5" />
            <p className="text-white/25 text-sm font-inter">No hay actividad reciente</p>
          </div>
        )}
      </div>
    </section>
  )
}
