import { useState, useMemo } from 'react'
import { Search, ArrowUpDown, FolderOpen, LayoutGrid, List } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { ProjectCard } from '../ui/ProjectCard'
import { Skeleton } from '../ui/Skeleton'
import type { GitHubRepo } from '../../lib/github'
import { cn } from '../../lib/utils'

interface ProjectsProps {
  repos: GitHubRepo[]
  loading: boolean
}

type SortOption = 'stars' | 'updated' | 'name'
type ViewMode = 'grid' | 'list'

export function Projects({ repos, loading }: ProjectsProps) {
  const { ref, isInView } = useInView(0.05)
  const [search, setSearch] = useState('')
  const [language, setLanguage] = useState('ALL')
  const [sort, setSort] = useState<SortOption>('stars')
  const [view, setView] = useState<ViewMode>('grid')
  const [showAll] = useState(false)

  const featuredNames = ['JiruHub', 'PC-Free', 'Maquina-V5', 'PC-Cloud-V2', 'Foxix-Terminal', 'MD-Server', 'ModerLauncher', 'Maquina-v7']

  const languages = useMemo(() => {
    const langs = new Set<string>()
    repos.forEach((r) => { if (r.language && !r.fork) langs.add(r.language) })
    return ['ALL', ...Array.from(langs).sort()]
  }, [repos])

  const filteredRepos = useMemo(() => {
    let result = repos.filter((r) => !r.fork)

    if (language !== 'ALL') {
      if (language === 'OTHERS') {
        const knownLangs = ['Python', 'JavaScript', 'TypeScript', 'Rust', 'Java', 'Dart']
        result = result.filter((r) => !r.language || !knownLangs.includes(r.language))
      } else {
        result = result.filter((r) => r.language === language)
      }
    }

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          (r.description?.toLowerCase().includes(q) ?? false) ||
          r.topics.some((t) => t.toLowerCase().includes(q))
      )
    }

    result.sort((a, b) => {
      switch (sort) {
        case 'stars': return b.stargazers_count - a.stargazers_count
        case 'updated': return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        case 'name': return a.name.localeCompare(b.name)
        default: return 0
      }
    })

    return result
  }, [repos, language, search, sort])

  const featured = filteredRepos.filter((r) => featuredNames.includes(r.name))
  const allRepos = filteredRepos.filter((r) => !showAll ? !featuredNames.includes(r.name) : true)

  return (
    <section ref={ref} className="min-h-[calc(100vh-7rem)] flex flex-col justify-center section-spacing">
      <div className="container-main w-full">
        {/* Section Header */}
        <div
          className="flex items-center gap-4 mb-16 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <div className="w-10 h-10 rounded-2xl bg-white/[0.06] flex items-center justify-center">
            <FolderOpen className="w-5 h-5 text-white/50" />
          </div>
          <div>
            <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight font-inter">
              Proyectos
            </h2>
            <p className="text-white/30 text-sm font-inter mt-1">
              {repos.filter(r => !r.fork).length} repositorios publicos
            </p>
          </div>
        </div>

        {/* Featured - Horizontal Scroll */}
        {!loading && featured.length > 0 && (
          <div
            className="mb-20 transition-all duration-700 delay-100"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <h3 className="text-white/30 text-[11px] tracking-[0.2em] uppercase mb-8 font-inter font-medium">
              Destacados
            </h3>
            <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 sm:-mx-[40px] sm:px-[40px] lg:-mx-[64px] lg:px-[64px]">
              {featured.map((repo) => (
                <div key={repo.id} className="snap-start flex-shrink-0 w-[360px] sm:w-[400px]">
                  <ProjectCard
                    name={repo.name}
                    description={repo.description}
                    language={repo.language}
                    stars={repo.stargazers_count}
                    forks={repo.forks_count}
                    updatedAt={repo.pushed_at}
                    htmlUrl={repo.html_url}
                    homepage={repo.homepage}
                    topics={repo.topics}
                    isFeatured
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filters Bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 transition-all duration-700 delay-200"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {/* Search */}
          <div className="relative flex-1 w-full sm:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
            <input
              type="text"
              placeholder="Buscar proyectos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-white/[0.15] focus:bg-white/[0.06] transition-all font-inter"
            />
          </div>

          {/* Language Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-wide whitespace-nowrap transition-all duration-300 font-inter',
                  language === lang
                    ? 'bg-white text-black'
                    : 'text-white/35 hover:text-white/60 hover:bg-white/[0.06]'
                )}
              >
                {lang === 'ALL' ? 'Todos' : lang === 'OTHERS' ? 'Otros' : lang}
              </button>
            ))}
          </div>

          {/* Sort & View */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSort(sort === 'stars' ? 'updated' : sort === 'updated' ? 'name' : 'stars')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] text-white/35 hover:text-white/60 hover:bg-white/[0.06] transition-all font-inter"
            >
              <ArrowUpDown className="w-3 h-3" />
              {sort === 'stars' ? 'Stars' : sort === 'updated' ? 'Reciente' : 'A-Z'}
            </button>
            <button
              onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
              className="p-1.5 rounded-lg text-white/35 hover:text-white/60 hover:bg-white/[0.06] transition-all"
              aria-label="Toggle view"
            >
              {view === 'grid' ? <LayoutGrid className="w-3.5 h-3.5" /> : <List className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-56" />
            ))}
          </div>
        )}

        {/* Projects Grid */}
        {!loading && allRepos.length > 0 && (
          <div
            className={cn(
              'transition-all duration-700 delay-300',
              view === 'grid'
                ? 'grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6'
                : 'flex flex-col gap-4',
              isInView ? 'opacity-100' : 'opacity-0'
            )}
          >
            {allRepos.map((repo) => (
              <ProjectCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                language={repo.language}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
                updatedAt={repo.pushed_at}
                htmlUrl={repo.html_url}
                homepage={repo.homepage}
                topics={repo.topics}
                isFeatured={featuredNames.includes(repo.name)}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredRepos.length === 0 && (
          <div className="text-center py-24">
            <FolderOpen className="w-12 h-12 text-white/[0.06] mx-auto mb-4" />
            <p className="text-white/25 text-sm font-inter">No se encontraron proyectos</p>
          </div>
        )}
      </div>
    </section>
  )
}
