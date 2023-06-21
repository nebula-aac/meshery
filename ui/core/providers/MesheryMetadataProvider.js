import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { MetadataContext } from '../contexts/MetadataContext'

export const MesheryMetadataProvider = ({ children }) => {
  const [pagePath, setPagePath] = useState('')
  const [pageTitle, setPageTitle] = useState('')
  const [badgeStatus, setBadgeStatus] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (path) => {
      setPagePath(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  const updateMetadata = (path, title, badge) => {
    if (path) {
      setPagePath(path)
    }
    if (title) {
      setPageTitle(title)
    }
    if (badge !== null) {
      setBadgeStatus(badge)
    }
  }

  const metadata = {
    pagePath,
    pageTitle,
    badgeStatus,
    updateMetadata
  }

  return (
        <MetadataContext.Provider value={metadata}>
            {children}
        </MetadataContext.Provider>
  )
}
