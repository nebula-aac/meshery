import { createTheme as createThemeMui, PaletteMode } from "@mui/material"
import { breakpoints } from "./tokens/breakpoints";
import { dark, light } from "./tokens/colors"

export const createTheme = (mode: PaletteMode) =>
  createThemeMui({
    palette: mode === 'light' ? light : dark,
    breakpoints,
    //  typography: fonts,
    // spacing,
    // zIndex,
  });

export default createTheme