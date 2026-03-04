import { useState, useEffect } from 'react'
import { mockJira } from '../data/mockJira'

export function useJira() {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    console.log('[useJira] Fetching tickets... (mock data — swap for Jira REST API in Phase 2)')

    // TODO [Phase 2]: Replace mock data with Jira REST API v3
    // Endpoint: GET {VITE_JIRA_BASE_URL}/rest/api/3/search?jql=project=DESIGN&maxResults=20
    // Auth: Basic base64(email:token) from VITE_JIRA_EMAIL + VITE_JIRA_TOKEN
    // Swap the setTimeout mock below for a real fetch() call
    setTimeout(() => {
      setTickets(mockJira)
      setLoading(false)
      console.log(`[useJira] Loaded ${mockJira.length} tickets (mock)`)
    }, 1200)
  }, [])

  return { tickets, loading }
}
