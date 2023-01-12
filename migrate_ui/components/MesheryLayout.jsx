import React from 'react';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../src/theme';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './NavBar/Navbar';
import { NavbarContainer } from './NavBar/NavbarContainer';
// import { pathToPageTitleMapper } from "@/utils/path";

export default function MesheryLayout({ children }) {
    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <div style={{ minHeight: "100vh", display: "flex" }}>
                    <CssBaseline />
                    <NavbarContainer render={(props) => <Navbar {...props} />} />
                    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        <Header
                            drawerOpen={false}
                            onDrawerToggle={() => null}
                            // pageTitle={pathToPageTitleMapper[window.location.pathname]}
                        />
                        <main style={{ flex: 1, padding: "48px 36px 24px", background: "#eaeff1" }}>{children}</main>

                        <Footer />
                    </div>
                </div>
            </ThemeProvider>
        </React.Fragment>
    )
}