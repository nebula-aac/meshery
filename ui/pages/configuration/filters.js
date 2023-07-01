import dynamic from 'next/dynamic'

import { MesheryMetadataProvider } from '@/core/providers/MesheryMetadataProvider'

const MesheryFilters = dynamic(() => import('@/core/components/sections/configuration/filters/MesheryFilters'), {
  loading: () => <p>Loading...</p>
})

function Filters () {
  return (
        <MesheryMetadataProvider>
            <MesheryFilters />
        </MesheryMetadataProvider>
  )
}

export default Filters
