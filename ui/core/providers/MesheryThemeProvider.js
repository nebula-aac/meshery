import { useContext } from 'react'

import { MesheryThemeContext } from '../contexts/MesheryThemeContext'
import { useColorTheme } from '../hooks/useColorTheme'

export default function MesheryThemeProvider ({ children }) {
  const value = useColorTheme()
  return (
        <MesheryThemeContext.Provider value={value}>{children}</MesheryThemeContext.Provider>
  )
}

export const useThemContext = () => {
  return useContext(MesheryThemeContext)
}
