import dynamic from 'next/dynamic'

import { MesheryMetadataProvider } from '@/core/providers/MesheryMetadataProvider'

const MesherySettings = dynamic(() => import('@/core/components/settings/Settings'), {
  loading: () => <p>Loading...</p>
})

const Settings = () => {
  return (
    <MesheryMetadataProvider>
      <MesherySettings />
    </MesheryMetadataProvider>
  )
}

export default Settings
