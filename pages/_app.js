/* eslint-disable react/jsx-props-no-spreading */
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import WithAuth from '../decorators/withAuth';
import configureAmplify from '../src/amplify';
import WithCreateDialogs from '../decorators/withCreateDialogs';
import WithLayout from '../decorators/withLayout';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    configureAmplify();
  }, []);
  return (
    <>
      <Head>
        <title>devcontra</title>
      </Head>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <WithLayout>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <WithCreateDialogs>
              <WithAuth>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </WithAuth>
            </WithCreateDialogs>
          </ThemeProvider>
        </WithLayout>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default MyApp;
