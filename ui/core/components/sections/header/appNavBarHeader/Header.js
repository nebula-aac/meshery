import { AppBar, Toolbar } from "@mui/material";
import ModeToggleButton from "../../../ModeToggleButton";

export default function Header(props) {
    return (
        <AppBar {...props}>
            <Toolbar>
                <ModeToggleButton
                    aria-label='theme toggler'
                    aria-haspopup='true'
                    color='inherit'
                />
                {props.children}
            </Toolbar>
        </AppBar>
    )
}