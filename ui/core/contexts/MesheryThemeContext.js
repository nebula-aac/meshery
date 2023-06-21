import { createTheme } from '@mui/material'
import { createContext } from 'react'

export const MesheryThemeContext = createContext({
  mode: 'light',
  toggleColorMode: () => {},
  theme: createTheme()
})
