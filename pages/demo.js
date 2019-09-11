import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { useRouter } from 'next/router';
import v4 from 'uuid';
import clsx from 'clsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import DevContra from 'devcontra-component';
import stackOverflow from '../dummy';
import { useAuthContext, useDataContext } from '../context/user-context';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '18em',
    maxHeight: '19em',
    overflowY: 'scroll',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.light,
    height: '6em',
    width: '4em',
    marginBottom: '.5em',
    boxShadow:
      '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    borderRadius: '7px',
  },
  stackoverflow: {
    backgroundColor: '#F48024',
  },
  spectrum: {
    backgroundColor: '#7B16FF',
  },
  twitter: {
    backgroundColor: '#1DA1F2',
  },
  github: {
    backgroundColor: '#24292E',
  },
  markerIcon: {
    width: '100%',
    height: '100%',
    paddingTop: '25%',
  },
}));

const Configure = () => {
  // const router = useRouter();
  const classes = useStyles();
  // const { isLoggedIn } = useAuthContext();
  // const { data } = useDataContext();
  const url = { stackoverflow: '/static/stack.png' };

  // console.log(stackOverflow);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.replace('/signin ');
  //   }
  // }, [isLoggedIn]);

  return (
    <div className={classes.root}>
      <Box display={{ xs: 'block', md: 'none' }}>
        hide on screens wider than md
      </Box>
      {/* hide on screens smaller than md */}
      <Box display={{ xs: 'none', md: 'block' }}>
        <Grid className={classes.container} container spacing={0}>
          {stackOverflow.map(post => (
            <Grid item xs={3} key={v4()}>
              <div
                className={clsx(classes[post.variant], classes.paper, 'card')}
                key={post.postId}
              >
                <div className={classes.logo}>
                  <img
                    src={url[post.variant]}
                    className={classes.markerIcon}
                    alt={`${post.variant} logo`}
                  />
                </div>
              </div>
              <style jsx>{`
                .card {
                  cursor: pointer;
                }
                .card:hover {
                  opacity: 0.5;
                }
              `}</style>
            </Grid>
          ))}
        </Grid>
        <DevContra email="EMAIL" password="PASSWORD" />
        {/* <Grid container>
          <Grid item xs={4} />
          <Grid item xs={4} container alignItems="center" justify="center">
          </Grid>
          <Grid item xs={4} />
        </Grid> */}
      </Box>
    </div>
  );
};

export default Configure;
