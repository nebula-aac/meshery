import { IconButton } from "@mui/material";
import { useThemContext } from "../providers/MesheryThemeProvider";
import { Fragment } from "react";

const { DarkMode, LightMode } = require("@mui/icons-material");

function DynamicIcon({ mode }) {
    if (mode === 'dark') {
        return <DarkMode />
    }
    return <LightMode />
}

export default function ModeToggleButton() {
    const { mode, toggleColorMode } = useThemContext()

    return (
        <Fragment>
            <IconButton color="inherit" onClick={toggleColorMode}>
                <DynamicIcon mode={mode} />
            </IconButton>
        </Fragment>
    )
}