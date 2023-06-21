import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { useThemContext } from './MesheryThemeProvider'
import createEmotionCache from '../utils/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

export default function MesheryAppProvider ({
  emotionCache = clientSideEmotionCache,
  children
}) {
  const { theme } = useThemContext()

  return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
  )
}
