import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ModeToggleButton from "../../../ModeToggleButton";
import { Badge, Box, Typography } from "@mui/material";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import { Mail, More, Settings } from "@mui/icons-material";
import { Fragment, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Notifications } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import K8sContextMenu from "./K8sContextMenu";

export default function Header(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <Notifications />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem>
                <ModeToggleButton
                    aria-label="theme toggler"
                    aria-haspopup="true"
                    color="inherit"
                />
                <p>Toggle Mode</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Fragment>
            <AppBar component={"nav"} {...props}>
                <Toolbar>
                    <HeaderTitle pageTitle={"Dashboard"} />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" }, position: "relative" }}>
                        <K8sContextMenu />
                    </Box>
                    <Box data-test="settings-button" sx={{ display: { xs: "none", md: "flex" } }}>
                        <Link href="/settings">
                            <IconButton size="large">
                                <Settings color="inherit" />
                            </IconButton>
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <Notifications />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <ModeToggleButton
                            aria-label='theme toggler'
                            aria-controls={menuId}
                            aria-haspopup='true'
                            edge="end"
                        />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <More />
                        </IconButton>
                    </Box>
                    {props.children}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Fragment>
    )
}

function HeaderTitle({ getPath, pageTitle }) {
    const isBeta = false

    return (
        <Typography variant="h6" noWrap component={"div"} sx={{ display: { xs: "none", sm: "block" } }}>
            {pageTitle}{isBeta ? <sup>BETA</sup> : ""}
        </Typography>
    )
}