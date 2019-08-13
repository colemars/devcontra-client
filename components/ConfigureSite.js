import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DataUsage from '@material-ui/icons/DataUsage';
import { Transition } from 'react-transition-group';
import { amber, green } from '@material-ui/core/colors';

const duration = 500;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: 'rotate(0deg)'
}

const transitionStyles = {
  entering: { transform: 'rotate(0deg)' },
  entered: { transform: 'rotate(0deg)' },
  exiting: { transform: 'rotate(360deg)' },
  exited: { transform: 'rotate(360deg)' },
};

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  logo: {
    width: "60%",
    height: "100%",
    borderRadius: "7px",
    marginLeft: "40%",
    marginTop: ".2em"
  },
  stack: {
    backgroundColor: "#F48024",
  },
  spectrum: {
    backgroundColor: "#7B16FF",
  },
  twitter: {
    backgroundColor: "#1DA1F2",
  },
  github: {
    backgroundColor: "#24292E",
  },
  markerIcon: {
    width: "50%",
    height: "50%",
    marginTop: "1.2em"
  },
  dataIcon: {
    marginTop: "1.2em",
    // color: green[600]
  }
}));

const ConfigureSite = (props) => {
  const classes = useStyles();
  const { src, variant, label } = props;
  const [rotate, setRotate] = useState();
  const [ animate, setAnimate ] = useState();

  const handleAnimate = (bool) => {
    if (!bool) {
      setAnimate(false);
      setTimeout(function(){ setRotate(false); }, 1);
      return;
    }
    setRotate(true);
    setTimeout(function(){ setAnimate("infinite"); }, 500);
  }

  return (
    <Grid container item xs={12} spacing={3}>
      <Grid item xs={3}>
        <div className={clsx(classes[variant], classes.logo)}>
          <img src={src} className={classes.markerIcon} />
        </div>
      </Grid>
      <Grid item xs={7}>
        <TextField
          id={`${variant}-input`}
          label={label}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onFocus={e => handleAnimate(true)}
          onBlur={e => handleAnimate(false)}
        />
      </Grid>
      <Grid item xs={1}>
        <Transition in={rotate} timeout={duration}>
          {state => (
            <DataUsage style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            className={clsx(`${variant}-data`, classes.dataIcon)}
            fontSize={'default'}
            >
            </DataUsage>
          )}
        </Transition>
        {/* <DataUsage fontSize="medium" className={`${variant}-data`} style={{}} key={variant} /> */}
        <style jsx global>{`
          @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
          @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
          @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
          
          .${variant}-data {
            -webkit-animation:spin 4s linear ${animate};
            -moz-animation:spin 4s linear ${animate};
            animation:spin 4s linear ${animate};
          }
        }
      `}</style>
      </Grid>
    </Grid>
  )
};

export default ConfigureSite;