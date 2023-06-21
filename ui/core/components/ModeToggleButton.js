import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Fragment } from 'react'

import { useThemContext } from '../providers/MesheryThemeProvider'

function DynamicIcon ({ mode }) {
  if (mode === 'dark') {
    return <DarkMode />
  }
  return <LightMode />
}

export default function ModeToggleButton () {
  const { mode, toggleColorMode } = useThemContext()

  return (
        <Fragment>
            <IconButton color="inherit" onClick={toggleColorMode}>
                <DynamicIcon mode={mode} />
            </IconButton>
        </Fragment>
  )
}
