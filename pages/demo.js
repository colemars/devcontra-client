import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import DevContra from 'devcontra-component';

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

const Demo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ borderColor: 'red', borderWidth: 1 }}>
        <DevContra email={process.env.EMAIL} password={process.env.PASSWORD} />
      </div>
      <Box display={{ xs: 'block', md: 'none' }}>
        hide on screens wider than md
      </Box>
      {/* hide on screens smaller than md */}
      <Box display={{ xs: 'none', md: 'block' }}>
        <div>{process.env.TEST}</div>
      </Box>
    </div>
  );
};

export default Demo;
