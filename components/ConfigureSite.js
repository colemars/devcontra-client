import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DataUsage from '@material-ui/icons/DataUsage';
import { Transition } from 'react-transition-group';
import { amber, green } from '@material-ui/core/colors';
import { API } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import CustomizedSnackbars from '../components/SnackBarContentWrapper';

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
  stackoverflow: {
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
    marginTop: "1.2em"
  },
  pending: {
    color: theme.palette.primary.main
  },
  loading: {
    color: amber[500]
  },
  success: {
    color: green[600]
  },
  invalid: {
    color: theme.palette.error.main
  },
  waiting: {
    color: theme.palette.primary.main
  }
}));

const verifyUrl = urlString => {
 if (urlString.length < 32) return false;
 return true;
}

const createProfile = async (targetUserId, variant) => {
  const contraPost = fields => {
    return API.post('contra', '/profile', {
      body: fields
    });
  };

  await contraPost({
    targetUserId,
    variant
  });

  return true;
}

const ConfigureSite = (props) => {
  const pending = "pending";
  const success = "success";
  const invalid = "invalid";
  const waiting = "waiting";
  const loading = "loading";
  const classes = useStyles();
  const { src, variant, label } = props;
  const [rotate, setRotate] = useState();
  const [ animate, setAnimate ] = useState();
  const [ url, setUrl ] = useState('');
  const [ status, setStatus ] = useState(waiting);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ confirmed, setConfirmed ] = useState(false);
  const [ rotateTime, setRotateTime ] = useState();
  const [ snackMessage, setSnackMessage ] = useState("error");
  const [ snackVariant, setSnackVariant ] = useState("error");
  const [ snackOpen, setSnackOpen ] = useState(false);
  const unavailableList = ["spectrum", "twitter", "github"]
  const [ unavailable ] = useState(unavailableList.includes(variant));

  useEffect(() => {
    if (status === success) {
      setIsLoading(false);
      handleAnimate(false);
      setConfirmed(true);
    }
    if (status === loading) {
      setIsLoading(true);
      setRotateTime(1);
      handleAnimate(true);
    }
    if (status === pending) {
      setRotateTime(4);
      handleAnimate(true);
    }
    if (status === waiting) {
      handleAnimate(false);
    }
    if (status === invalid) {
      setIsLoading(false);
      handleAnimate(false);
    }
  }, [status]); // Only re-run the effect if status changes

  const handleDelete = e => {
    const key = event.keyCode || event.charCode;
    const deleteKeyCode = 46;
    const backspaceKeyCode = 8;
    if (key === backspaceKeyCode || key === deleteKeyCode) {
      setUrl('')
    }
  }

  const handleAnimate = bool => {
    if (status === loading) {
      setRotate(true);
      setAnimate("infinite");
      return
    }
    if (!bool) {
      setAnimate(false);
      setTimeout(function(){ setRotate(false); }, 50);
      return;
    }
    setRotate(true);
    setTimeout(function(){ setAnimate("infinite"); }, 500);
  };

  const handlePaste = async e => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const urlString = clipboardData.getData('Text');
    setUrl(urlString)

    if (!verifyUrl(urlString)) {
      setSnackMessage("Invalid Url");
      setSnackVariant("error");
      return setSnackOpen(true);
    }
  
    setStatus(loading);
    const targetUserId = urlString.split("/")[4];

    try {
      await createProfile(targetUserId, variant);
      setStatus(success);
      setSnackMessage(`${variant} profile created`);
      setSnackVariant("success");
      setSnackOpen(true);
    } catch(err) {
      setStatus(invalid);
      setSnackMessage("Something went wrong");
      setSnackVariant("error");
      setSnackOpen(true);
    }
  }

  return (
    <Fragment>
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
            onFocus={e => setStatus(pending)}
            onBlur={e => setStatus(waiting)}
            onPaste={handlePaste}
            onKeyDown={handleDelete}
            value={url}
            placeholder={"Paste url"}
            disabled={isLoading || confirmed || unavailable}
        />
      </Grid>
      <Grid item xs={1}>
        <Transition in={rotate} timeout={duration}>
          {state => (
            <DataUsage style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
              className={clsx(`${variant}-data`, classes[status], classes.dataIcon)}
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
              -webkit-animation:spin ${rotateTime}s linear ${animate};
              -moz-animation:spin ${rotateTime}s linear ${animate};
              animation:spin ${rotateTime}s linear ${animate};
          }
        }
      `}</style>
      </Grid>
    </Grid>
      <CustomizedSnackbars 
        message={snackMessage}
        variant={snackVariant}
        open={snackOpen}
        setOpen={setSnackOpen}
      />
    </Fragment>
  )
};

export default ConfigureSite;