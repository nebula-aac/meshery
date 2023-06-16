import SystemUserPreferences from '@/core/components/preferences/user_preference'
import withMetadata from '@/core/utils/getMetadataWrapper'
import { Paper } from '@mui/material'
import { Fragment } from 'react'

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
