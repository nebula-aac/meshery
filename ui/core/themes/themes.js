import { createTheme } from "@mui/material";
import {black, charcoal, error, info, keppel, neutral, success, warning, white} from './colors';

export const drawerWidth = 240;

export const createThemeHelper = (mode) => {
	const isDark = mode === 'dark';
	return createTheme({
		palette: {
			mode,
			common: {
				black,
				white,
			},
			background: {
				default: isDark ? neutral.main : white,
				paper: isDark ? neutral.main : white,
			},
			primary: {
				main: isDark ? charcoal.main : keppel.main,
				dark: isDark ? charcoal.dark : keppel.dark,
				light: isDark ? charcoal.light : keppel.light,
				contrastText: isDark ? black : white,
			},
			secondary: {
				main: keppel.main,
				dark: keppel.dark,
				light: keppel.light,
				contrastText: white,
			},
			error: {
				main: isDark ? error.main : error.accent,
			},
			warning: {
				main: isDark ? warning.main : warning.accent,
				contrastText: white,
			},
			success: {
				main: isDark ? success.main : success.accent,
			},
			info: {
				main: isDark ? info.main : info.accent,
			},
		},
		components: {
			MuiAppBar: {
				styleOverrides: {
					root: {
						position: 'fixed',
						elevation: 2,
						background: '#396679',
						width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
					},
				},
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
};