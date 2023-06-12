import { wrapper } from "@/lib/store/redux/store";
import theme from "@/styles/theme";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { Provider } from "react-redux";

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache = clientSideEmotionCache, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest)
  console.log('Initial state ', store.getState())

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Component {...props.propspageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}
