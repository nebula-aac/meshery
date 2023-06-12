import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

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
        error: {
            main: red.A400,
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