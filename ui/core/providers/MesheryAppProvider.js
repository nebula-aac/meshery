import { CacheProvider } from "@emotion/react";
import { useThemContext } from "./MesheryThemeProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createEmotionCache from "../utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

export default function MesheryAppProvider({
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