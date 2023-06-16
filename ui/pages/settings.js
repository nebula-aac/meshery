import withMetadata from '@/core/utils/getMetadataWrapper'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'

const MesherySettings = dynamic(() => import('@/core/components/settings/Settings'), {
  loading: () => <p>Loading...</p>
})

const Settings = ({ getPath, pageTitle }) => {
  return (
        <Fragment>
            <MesherySettings />
        </Fragment>
  )
}

export default withMetadata(Settings)
