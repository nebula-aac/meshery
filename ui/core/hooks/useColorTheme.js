/**
 * React Custom Hook
 * useColorTheme
 * 1. Used as a custom hook in MesheryThemeProvider
 * 2. file location: /core/providers/MesheryThemeProvider.js
 */
import { createTheme } from "@mui/material"
import { useMemo, useState } from "react"
import { createThemeHelper } from "../themes/themes"

export const useColorTheme = () => {
    const [mode, setMode] = useState("light")

    const toggleColorMode = () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))

    const modifiedTheme = useMemo(
        () => createTheme(createThemeHelper(mode)),
        [mode]
    )

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode
    }
}