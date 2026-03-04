import { useState, useEffect } from 'react'
import { mockDocs } from '../data/mockDocs'

export function useDocs() {
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    console.log('[useDocs] Fetching documents... (mock data — swap for Google Drive API in Phase 2)')

    // TODO [Phase 2]: Replace mock data with Google Drive API v3
    // Endpoint: GET https://www.googleapis.com/drive/v3/files
    //   ?orderBy=modifiedTime+desc&pageSize=8
    //   &fields=files(id,name,modifiedTime,lastModifyingUser,mimeType,webViewLink)
    // Auth: OAuth2 — client ID from VITE_GOOGLE_CLIENT_ID
    // Swap the setTimeout mock below for a real fetch() call
    setTimeout(() => {
      setDocs(mockDocs)
      setLoading(false)
      console.log(`[useDocs] Loaded ${mockDocs.length} documents (mock)`)
    }, 1200)
  }, [])

  return { docs, loading }
}
