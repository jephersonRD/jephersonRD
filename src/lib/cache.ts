interface CacheEntry<T> {
  data: T
  timestamp: number
}

const cache = new Map<string, CacheEntry<unknown>>()

export function getCached<T>(key: string, ttlMs: number): T | null {
  const entry = cache.get(key) as CacheEntry<T> | undefined
  if (!entry) return null
  if (Date.now() - entry.timestamp > ttlMs) {
    cache.delete(key)
    return null
  }
  return entry.data
}

export function setCache<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() })
}

export const CACHE_TTL = {
  github: 5 * 60 * 1000,
  githubEvents: 2 * 60 * 1000,
  youtube: 15 * 60 * 1000,
} as const
