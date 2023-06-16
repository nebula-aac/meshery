import { Fragment } from "react"
import { ButtonGroup, ListItem, Box } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"

function HelpIcons() {
    return (
        <Fragment>
            <ButtonGroup>
                <ListItem></ListItem>
            </ButtonGroup>
        </Fragment>
    )
}

function Version() {
    return (
        <Fragment>
            <ListItem></ListItem>
        </Fragment>
    )
}

function Chevron() {
    return (
        <Fragment>
            <Box>
                <Box>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        fixedWidth
                        size="1.5x"
                        style={{ margin: "0.75rem 0.2rem ", width: "0.8rem", verticalAlign: "middle" }}
                        alt="Sidebar collapse toggle icon"
                    />
                </Box>
            </Box>
        </Fragment>
    )
}

export default { HelpIcons, Version, Chevron }