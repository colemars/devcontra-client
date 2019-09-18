/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import configureAmplify from '../src/amplify';
import WithAuth from '../decorators/withAuth';
import WithData from '../decorators/withData';
import Layout from '../components/Layout';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    this.jssStyles = document.querySelector('#jss-server-side');
    if (this.jssStyles) {
      this.jssStyles.parentNode.removeChild(this.jssStyles);
    }
    configureAmplify();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>devcontra</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <WithAuth>
            <Layout>
              <WithData>
                <Component {...pageProps} />
              </WithData>
            </Layout>
          </WithAuth>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
