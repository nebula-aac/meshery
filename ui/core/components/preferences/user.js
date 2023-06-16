import useFetchUserData from "@/core/hooks/useFetchUserData"
import withMetadata from "@/core/utils/getMetadataWrapper"
import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import exportToJsonFile from "./exportToJsonFile"
import { Avatar, Box, IconButton, NoSsr, Popper } from "@mui/material"
import RenderAccountExtension from "./renderAccountExtension"

const User = ({
    getPath,
    pageTitle,
    color,
}) => {
    const [open, setOpen] = useState(false)

    const { user, loading, error } = useFetchUserData('/api/user', {
        credentials: 'same-origin'
    })

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const router = useRouter()

    const handleToggle = () => {
        setOpen(!open)
    }

    const handleClose = (event) => {
        if (anchorEl.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handlePreference = () => {
        router.push("/user/preferences")
    }

    const handleLogout = () => {
        window.location = '/user/logout'
    };

    const handleGetToken = () => {
        const data = user
        exportToJsonFile(data, "auth.json")
    }

    return (
        <Fragment>
            <NoSsr>
                <Box data-test="profile-button">
                    <IconButton
                        color={color}
                        ref={(node) => {
                            anchorEl = node
                        }}
                    >
                        <Avatar />
                    </IconButton>
                </Box>
                <Popper
                    open={open}
                    anchorEl={anchorEl}
                    transition style={{ zIndex: 10000 }}
                    placement="top-end"
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{
                                transformOrigin: placement === 'bottom'
                                    ? 'left top'
                                    : 'left bottom'
                            }}
                        >
                            <Paper className={classes.popover}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList>
                                        {account && account.length ?
                                            (
                                                <RenderAccountExtension
                                                    accountExtensions={account}
                                                />
                                            )
                                            :
                                            null
                                        }
                                        <MenuItem onClick={handleGetToken}>Get Token</MenuItem>
                                        <MenuItem onClick={handlePreference}>Preferences</MenuItem>
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </NoSsr>
        </Fragment>
    )
}

export default withMetadata(UserPref)