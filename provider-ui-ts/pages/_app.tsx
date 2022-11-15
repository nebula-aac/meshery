import '../styles/globals.css'
import type { AppProps } from 'next/app'
import getPageContext from '../components/PageContext'

export default function MesheryProviderApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}