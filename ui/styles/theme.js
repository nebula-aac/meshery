import { Roboto } from 'next/font/google';
import { createTheme } from "@mui/material";
import { black, charcoal, colorText, keppel, white, error, warning, success, info, neutral } from "./colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        common: {
            black: black,
            white: white
        },
        primary: {
            main: charcoal.main,
            dark: charcoal.dark,
            light: charcoal.light
        },
        secondary: {
            main: keppel.main,
            dark: keppel.dark,
            light: keppel.light,
            contrastText: white,
        },
        error: {
            main: error.main
        },
        warning: {
            main: warning.main,
            contrastText: white,
        },
        success: {
            main: success.main,
        },
        info: {
            main: info.main,
        }
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        common: {
            black: black,
            white: white,
        },
        primary: {
            main: keppel.main,
            dark: keppel.dark,
            light: keppel.light,
            contrastText: white,
        },
        secondary: {
            main: charcoal.main,
            dark: charcoal.dark,
            light: charcoal.light,
            contrastText: white,
        },
        text: {
            primary: colorText.primary,
            secondary: colorText.secondary,
            disabled: colorText.disabled
        },
        background: {
            default: neutral.main,
            paper: neutral.main
        },
        error: {
            main: error.accent,
        },
        warning: {
            main: warning.accent,
            contrastText: white,
        },
        success: {
            main: success.accent,
        },
        info: {
            main: info.accent,
        }
    }
});

const drawerWidth = 240;

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#396679',
        },
        secondary: {
            main: '#19857b',
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    position: "fixed",
                    color: "primary",
                    // background: "#396679",
                    width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        background: "#263238"
                    }
                }
            }
        }
    }
});

export default theme;