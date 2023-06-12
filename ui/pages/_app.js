import Header from "@/components/header/header";
import LandingLayout from "@/components/layouts/landing";
import Navigator from "@/components/navigator/navigator";
import { wrapper } from "@/lib/store/redux/store";
import theme from "@/styles/theme";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import Head from "next/head";
import { Provider } from "react-redux";
import Box from "@mui/material/Box";

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
          <LandingLayout>
            <Header />
            <Navigator />
            <Main>
              <Toolbar />
              <Component {...props.pageProps} />
            </Main>
          </LandingLayout>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

function Main(props) {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      {...props}
    >
      {props.children}
    </Box>
  );
}