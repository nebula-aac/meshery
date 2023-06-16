import LandingPage from '@/core/components/layouts/LandingPage'
import MesheryAppWrapper from '@/core/components/sections/MesheryAppWrapper'
import MesheryAppProvider from '@/core/providers/MesheryAppProvider'
import MesheryReduxProvider from '@/core/providers/MesheryReduxProvider'
import MesheryThemeProvider from '@/core/providers/MesheryThemeProvider'

export default function App ({ Component, pageProps }) {
  return (
    <MesheryReduxProvider>
      <MesheryThemeProvider>
        <MesheryAppProvider>
          <LandingPage>
            <MesheryAppWrapper>
              <Component {...pageProps} />
            </MesheryAppWrapper>
          </LandingPage>
        </MesheryAppProvider>
      </MesheryThemeProvider>
    </MesheryReduxProvider>
  )
}
