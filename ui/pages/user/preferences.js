import withMetadata from '@/core/utils/getMetadataWrapper'
import { Paper } from '@mui/material'
import { Fragment } from 'react'
import dynamic from 'next/dynamic'

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
