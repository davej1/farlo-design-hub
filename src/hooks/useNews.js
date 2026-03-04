import { useState, useEffect, useCallback } from 'react'
import { mockNews } from '../data/mockNews'

export function useNews() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(() => {
    setLoading(true)
    setArticles([])
    console.log('[useNews] Fetching news articles... (mock data — swap for NewsAPI in Phase 2)')

    // TODO [Phase 2]: Replace mock data with live NewsAPI.org fetch
    // Endpoint: https://newsapi.org/v2/everything?q=UX+design+OR+UI+design+OR+Figma&sortBy=publishedAt
    // Auth: Bearer token from import.meta.env.VITE_NEWS_API_KEY
    // Swap the setTimeout mock below for a real fetch() call
    setTimeout(() => {
      setArticles(mockNews)
      setLoading(false)
      console.log(`[useNews] Loaded ${mockNews.length} articles (mock)`)
    }, 1200)
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return { articles, loading, refresh: load }
}
