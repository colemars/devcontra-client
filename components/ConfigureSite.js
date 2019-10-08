import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DataUsage from '@material-ui/icons/DataUsage';
import { Transition } from 'react-transition-group';
import { amber, green } from '@material-ui/core/colors';
import { API } from 'aws-amplify';
import CustomizedSnackbars from './SnackBarContentWrapper';

const duration = 500;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: 'rotate(0deg)',
};

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
    width: '100%',
  },
  logo: {
    width: '60%',
    height: '100%',
    borderRadius: '7px',
    marginLeft: '40%',
    marginTop: '.2em',
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
    width: '50%',
    height: '50%',
    marginTop: '1.2em',
  },
  dataIcon: {
    marginTop: '1.2em',
  },
  pending: {
    color: theme.palette.primary.main,
  },
  loading: {
    color: amber[500],
  },
  success: {
    color: green[600],
  },
  invalid: {
    color: theme.palette.error.main,
  },
  waiting: {
    color: theme.palette.primary.main,
  },
}));

const verifyUrl = urlString => {
  if (!urlString.includes('https')) return false;
  return true;
};

const createProfile = async (variant, urlString) => {
  const contraPost = fields => {
    return API.post('contra', '/profile', {
      body: fields,
    });
  };

  await contraPost({
    variant,
    profileUrl: urlString,
  });

  return true;
};

const ConfigureSite = props => {
  const pending = 'pending';
  const success = 'success';
  const invalid = 'invalid';
  const waiting = 'waiting';
  const loading = 'loading';
  const classes = useStyles();
  const { src, variant, label, profileUrl, setProfileUrl, unavailable } = props;
  const [rotate, setRotate] = useState();
  const [animate, setAnimate] = useState();
  const [url, setUrl] = useState(profileUrl);
  const [status, setStatus] = useState(waiting);
  const [isLoading, setIsLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [rotateTime, setRotateTime] = useState();
  const [snackMessage, setSnackMessage] = useState('error');
  const [snackVariant, setSnackVariant] = useState('error');
  const [snackOpen, setSnackOpen] = useState(false);

  const handleAnimate = bool => {
    if (status === loading) {
      setRotate(true);
      setAnimate('infinite');
      return;
    }
    if (!bool) {
      setAnimate(false);
      setTimeout(() => setRotate(false), 50);
      return;
    }
    setRotate(true);
    setTimeout(() => setAnimate('infinite'), 500);
  };

  useEffect(() => {
    setIsLoading(false);
    if (profileUrl.length > 0) {
      setStatus(success);
      setConfirmed(true);
    }
  }, [profileUrl]);

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
    const key = e.keyCode || e.charCode;
    const deleteKeyCode = 46;
    const backspaceKeyCode = 8;
    if (key === backspaceKeyCode || key === deleteKeyCode) {
      setUrl('');
    }
  };

  const handlePaste = async e => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const urlString = clipboardData.getData('Text');
    setUrl(urlString);

    if (!verifyUrl(urlString)) {
      setSnackMessage('Invalid Url');
      setSnackVariant('error');
      setSnackOpen(true);
      return;
    }

    setStatus(loading);

    try {
      await createProfile(variant, urlString);
      setProfileUrl(urlString);
      setStatus(success);
      setSnackMessage(`${variant} profile created`);
      setSnackVariant('success');
      setSnackOpen(true);
    } catch (err) {
      setStatus(invalid);
      setSnackMessage('Something went wrong');
      setSnackVariant('error');
      setSnackOpen(true);
    }
  };

  return (
    <>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={3}>
          <div className={clsx(classes[variant], classes.logo)}>
            <img
              src={src}
              className={classes.markerIcon}
              alt={`${variant} logo`}
            />
          </div>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id={`${variant}-input`}
            label={label}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onFocus={() => setStatus(pending)}
            onBlur={() => setStatus(waiting)}
            onPaste={handlePaste}
            onKeyDown={handleDelete}
            value={url}
            placeholder="Paste url"
            disabled={isLoading || confirmed || unavailable}
          />
        </Grid>
        <Grid item xs={1}>
          <Transition in={rotate} timeout={duration}>
            {state => (
              <DataUsage
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
                className={clsx(
                  `${variant}-data`,
                  classes[status],
                  classes.dataIcon
                )}
                fontSize="default"
              />
            )}
          </Transition>
          <style jsx global>
            {`
            @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
            @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
            @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
            
            .${variant}-data {
              -webkit-animation:spin ${rotateTime}s linear ${animate};
              -moz-animation:spin ${rotateTime}s linear ${animate};
              animation:spin ${rotateTime}s linear ${animate};
            }
          }
        `}
          </style>
        </Grid>
      </Grid>
      <CustomizedSnackbars
        message={snackMessage}
        variant={snackVariant}
        open={snackOpen}
        setOpen={setSnackOpen}
      />
    </>
  );
};

ConfigureSite.defaultProps = {
  unavailable: false,
};

ConfigureSite.propTypes = {
  src: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  setProfileUrl: PropTypes.func.isRequired,
  unavailable: PropTypes.bool,
};

export default ConfigureSite;
