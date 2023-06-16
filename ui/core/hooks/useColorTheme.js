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