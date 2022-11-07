import { NoSsr } from '@material-ui/core';
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

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