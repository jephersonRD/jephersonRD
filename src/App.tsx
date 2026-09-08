import { useState, useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Socials } from './components/sections/Socials'
import { Activity } from './components/sections/Activity'
import { About } from './components/sections/About'
import { Donations } from './components/sections/Donations'
import { getGitHubUser, getGitHubRepos, getGitHubEvents, getRepoLanguages } from './lib/github'
import type { GitHubUser, GitHubRepo, GitHubEvent } from './lib/github'

export type Section = 'home' | 'projects' | 'socials' | 'about' | 'donations'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home')
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [events, setEvents] = useState<GitHubEvent[]>([])
  const [languages, setLanguages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const [userData, reposData, eventsData, langsData] = await Promise.all([
        getGitHubUser(),
        getGitHubRepos(),
        getGitHubEvents(),
        getRepoLanguages(),
      ])
      setUser(userData)
      setRepos(reposData)
      setEvents(eventsData)
      setLanguages(langsData)
      setLoading(false)
    }
    fetchData()
  }, [])

  const stars = repos.reduce((acc, r) => acc + r.stargazers_count, 0)

  return (
    <div className="min-h-screen bg-[#09090b] text-white font-inter">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="pt-24 pb-16">
        {activeSection === 'home' && (
          <Hero
            followers={user?.followers}
            repos={user?.public_repos}
            stars={stars}
            onNavigate={setActiveSection}
          />
        )}
        {activeSection === 'projects' && (
          <Projects repos={repos} loading={loading} />
        )}
        {activeSection === 'socials' && (
          <>
            <Socials />
            <Activity events={events} loading={loading} />
          </>
        )}
        {activeSection === 'about' && (
          <About
            bio={user?.bio ?? null}
            languages={languages}
            createdAt={user?.created_at ?? null}
          />
        )}
        {activeSection === 'donations' && (
          <Donations />
        )}
      </main>

      {activeSection !== 'home' && <Footer />}
    </div>
  )
}

export default App
