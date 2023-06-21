import { Paper } from '@mui/material'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'

import withMetadata from '@/core/utils/getMetadataWrapper'

const SystemUserPreferences = dynamic(() => import('@/core/components/preferences/user_preference'), {
  loading: () => <p>Loading...</p>
})

const UserPreferences = ({ getPath, pageTitle }) => {
  return (
        <Fragment>
            <Paper>
                <SystemUserPreferences />
            </Paper>
        </Fragment>
  )
}

export default withMetadata(UserPreferences)
