import { MesheryMetadataProvider } from '@/core/providers/MesheryMetadataProvider'
import withMetadata from '@/core/utils/getMetadataWrapper'

const Extensions = ({ getPath, pageTitle }) => {
  return (
    <MesheryMetadataProvider>

    </MesheryMetadataProvider>
  )
}

export default withMetadata(Extensions)
