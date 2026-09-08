import { getCached, setCache, CACHE_TTL } from './cache'
import { GITHUB_USERNAME, FEATURED_REPOS } from '../config/projects'

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  pushed_at: string
  topics: string[]
  homepage: string | null
  fork: boolean
}

export interface GitHubUser {
  login: string
  name: string | null
  avatar_url: string
  bio: string | null
  followers: number
  following: number
  public_repos: number
  html_url: string
  created_at: string
}

export interface GitHubEvent {
  id: string
  type: string
  repo: { name: string }
  created_at: string
  payload: Record<string, unknown>
}

async function fetchWithCache<T>(url: string, cacheKey: string, ttl: number): Promise<T | null> {
  const cached = getCached<T>(cacheKey, ttl)
  if (cached) return cached

  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/vnd.github.v3+json' },
    })
    if (!res.ok) return null
    const data = await res.json() as T
    setCache(cacheKey, data)
    return data
  } catch {
    return null
  }
}

export async function getGitHubUser(): Promise<GitHubUser | null> {
  return fetchWithCache<GitHubUser>(
    `https://api.github.com/users/${GITHUB_USERNAME}`,
    'github-user',
    CACHE_TTL.github
  )
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const repos = await fetchWithCache<GitHubRepo[]>(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    'github-repos',
    CACHE_TTL.github
  )
  return repos ?? []
}

export async function getGitHubEvents(): Promise<GitHubEvent[]> {
  const events = await fetchWithCache<GitHubEvent[]>(
    `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=30`,
    'github-events',
    CACHE_TTL.githubEvents
  )
  return events ?? []
}

export async function getFeaturedRepos(): Promise<GitHubRepo[]> {
  const allRepos = await getGitHubRepos()
  const featured = allRepos.filter(r => FEATURED_REPOS.includes(r.name as typeof FEATURED_REPOS[number]))
  const rest = allRepos.filter(r => !FEATURED_REPOS.includes(r.name as typeof FEATURED_REPOS[number]))
  return [...featured, ...rest]
}

export async function getRepoLanguages(): Promise<string[]> {
  const repos = await getGitHubRepos()
  const langs = new Set<string>()
  repos.forEach(r => { if (r.language && !r.fork) langs.add(r.language) })
  return Array.from(langs).sort()
}
