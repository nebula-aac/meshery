import { NoSsr } from '@mui/material';
import Head from 'next/head'
import React from 'react'

class Error extends React.Component {
  componentDidMount(): void {
    console.log("Error page from console.log!");
  }
  render(): React.ReactNode {
    return (
      <NoSsr>
        <Head>
          <title>404 - Page Not Found</title>
        </Head>
      </NoSsr>
    )
  }
}