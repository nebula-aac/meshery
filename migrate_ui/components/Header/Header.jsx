import React from "react";
import { styled } from "@mui/material";
import Link from "next/link"
import theme from "src/theme";
import SettingsIcon from "@mui/icons-material/Settings"
import AppBar from "@mui/material/AppBar"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Hidden from "@mui/material/Hidden"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import K8sContextMenu from "./K8sContextSwitcher";
import MesheryNotification from "@/components/Notification/MesheryNotification";
import User from "../User";

const UserSpan = styled(({ children, ...props }) => <span {...props}>{children}</span>)(({ theme }) => ({
    marginLeft: theme.spacing(1),
}));

const UserGrid = styled(Grid)(() => ({
    paddingLeft: 1,
    display: "flex",
    alignItems: "center",
}));

const HeaderIcon = styled(({ icon, isActive = false, children, ...props }) => {
    const Component = icon;
    return (
        <Component
            sx={{
                color: isActive ? "#00B39F" : "inherit",
            }}
            {...props}
        >
            {children}
        </Component>
    );
})(() => ({
    fontSize: "1.5rem",
    height: "1.5rem",
    width: "1.5rem",
}));

const PageTitleWrapperGrid = styled(Grid)(() => ({ flexGrow: 1, marginRight: "auto" }));

const PageTitle = styled(Typography)(({ theme }) => ({
    paddingLeft: theme.spacing(2),
    fontSize: "1.25rem",
    [theme.breakpoints.up("sm")]: { fontSize: "1.65rem" },
}));

export default function Header({ drawerOpen, onDrawerToggle, pageTitle, contexts = {}, activeContexts = [] }) {
    return (
        <AppBar
            color="primary"
            position="sticky"
            elevation={0}
            sx={{
                padding: theme.spacing(1.4),
                backgroundColor: "#396679",
                zIndex: theme.zIndex.drawer + 1,
                [theme.breakpoints.up(635)]: drawerOpen ? { padding: theme.spacing(0.75, 1.4) } : undefined,
                [theme.breakpoints.between(600, 634.99)]: drawerOpen ? { padding: theme.spacing(0.4, 1.4) } : undefined,
            }}
        >
            <Toolbar
                sx={{
                    minHeight: drawerOpen ? "58px" : "59px",
                    paddingLeft: drawerOpen ? "20px" : "24px",
                    paddingRight: drawerOpen ? "20px" : "24px",
                    [theme.breakpoints.up(620)]: drawerOpen
                        ? {
                            minHeight: "68px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                        }
                        : undefined,
                }}
            >
                <Grid container alignItems="center">
                    <Hidden smUp>
                        <Grid item>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={onDrawerToggle}
                                sx={{ marginLeft: `-${theme.spacing(3)}` }}
                                size="large"
                            >
                                <HeaderIcon icon={MenuIcon} />
                            </IconButton>
                        </Grid>
                    </Hidden>
                    <PageTitleWrapperGrid item xs container alignItems="center">
                        <PageTitle color="inherit" variant="h5">
                            {pageTitle}
                        </PageTitle>
                    </PageTitleWrapperGrid>

                    <UserGrid item>

                        <K8sContextMenu contexts={contexts}
                            activeContexts={activeContexts}
                        />

                        <IconButton color="inherit" size="large">
                            <Link href="/settings">
                                <HeaderIcon isActive={pageTitle === "Settings"} icon={SettingsIcon} />
                            </Link>
                        </IconButton>
                        <Grid item>
                            <MesheryNotification />
                        </Grid>
                        <UserSpan>
                            <User color="inherit" />
                        </UserSpan>
                    </UserGrid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
