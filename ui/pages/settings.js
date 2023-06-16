import MesherySettings from '@/core/components/settings/Settings'
import withMetadata from '@/core/utils/getMetadataWrapper'
import { Fragment } from 'react'

const Settings = ({ getPath, pageTitle }) => {
  return (
        <Fragment>
            <MesherySettings />
        </Fragment>
  )
}

export default withMetadata(Settings)
