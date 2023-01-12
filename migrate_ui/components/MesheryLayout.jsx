import React from 'react';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../src/theme';
import Footer from './Footer/Footer';

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
                    {children}
                    <Footer />
                </div>
            </ThemeProvider>
        </React.Fragment>
    )
}