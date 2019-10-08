/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SettingsInputComponent from '@material-ui/icons/SettingsInputComponent';
import SettingsIcon from '@material-ui/icons/Settings';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useRouter } from 'next/router';
import Avatar from '@material-ui/core/Avatar';
import { API } from 'aws-amplify';
import PropTypes from 'prop-types';
import ConfigureSite from '../components/ConfigureSite';
import { useAuthContext, useDataContext } from '../context/user-context';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '2.5em',
  },
  textField: {
    paddingRight: theme.spacing(1),
    width: '100%',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '35em',
    backgroundColor: theme.palette.background.light,
  },
  grid: {
    marginTop: '2em',
  },
  configureAvatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    top: '2em',
    left: '1em',
    cursor: 'pointer',
    width: 50,
    height: 50,
    display: 'inline-block',
  },
  settingsAvatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    top: '2em',
    left: '1em',
    cursor: 'pointer',
    width: 50,
    height: 50,
    display: 'inline-block',
  },
  icon: {
    margin: 'auto',
    display: 'block',
    marginTop: '23%',
  },
  fileCopyAvatar: {
    cursor: 'pointer',
  },
  fileCopyIcon: {
    margin: 'auto',
    display: 'block',
    marginTop: '23%',
  },
  button: {
    // paddingLeft: 25,
    // paddingRight: 25,
  },
  header: {
    fontSize: 20,
    marginLeft: theme.spacing(3.5),
    marginBottom: theme.spacing(1),
  },
}));

const Configure = props => {
  const router = useRouter();
  const classes = useStyles();
  const { isLoggedIn } = useAuthContext();
  const { setData, profileKey, setProfileKey } = useDataContext();
  const { profileData, generatedKey } = props;
  const [selected, setSelected] = useState('settings');
  const [stackOverflowUrl, setStackOverflowUrl] = useState(
    props.stackOverflowUrl
  );
  const [spectrumUrl, setSpectrumUrl] = useState(props.spectrumUrl);
  const [githubUrl, setGithubUrl] = useState(props.githubUrl);
  const [twitterUrl, setTwitterUrl] = useState(props.twitterUrl);

  useEffect(() => {
    setProfileKey(generatedKey);
  }, []);

  useEffect(() => {
    setData(profileData);
  }, [profileData]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/');
    }
  }, [isLoggedIn]);

  const generateAccessKey = async () => {
    const result = await API.put('contra', '/key/generate');
    const key = result.Attributes.accessKey;

    setProfileKey(key);
  };

  const copyProfileKey = () => {
    navigator.clipboard.writeText(profileKey);
  };

  return (
    <div className={classes.root}>
      <Box display={{ xs: 'block', md: 'none' }}>
        hide on screens wider than md
      </Box>
      {/* hide on screens smaller than md */}
      <Box display={{ xs: 'none', md: 'block' }}>
        <Grid className={classes.grid} container>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Avatar
              className={classes.configureAvatar}
              onClick={() => setSelected('configure')}
            >
              <SettingsInputComponent
                fontSize="default"
                className={classes.icon}
                style={{
                  color:
                    selected === 'configure' ? 'white' : 'rgba(255,255,255,.3)',
                }}
              />
            </Avatar>
            <Avatar
              className={classes.settingsAvatar}
              onClick={() => setSelected('settings')}
            >
              <SettingsIcon
                fontSize="default"
                className={classes.icon}
                style={{
                  color:
                    selected === 'settings' ? 'white' : 'rgba(255,255,255,.3)',
                }}
              />
            </Avatar>
            <Paper className={classes.paper}>
              <form className={classes.container} noValidate autoComplete="off">
                {selected === 'configure' && (
                  <Grid container spacing={3}>
                    <ConfigureSite
                      src="/static/stack.png"
                      variant="stackoverflow"
                      label="StackOverflow URL"
                      profileUrl={stackOverflowUrl}
                      setProfileUrl={setStackOverflowUrl}
                    />
                    <ConfigureSite
                      src="/static/github.png"
                      variant="github"
                      label="Github URL"
                      profileUrl={githubUrl}
                      setProfileUrl={setGithubUrl}
                    />
                    <ConfigureSite
                      src="/static/spectrum.png"
                      variant="spectrum"
                      label="Spectrum URL (coming soon)"
                      profileUrl={spectrumUrl}
                      setProfileUrl={setSpectrumUrl}
                      unavailable
                    />
                    <ConfigureSite
                      src="/static/twitter.png"
                      variant="twitter"
                      label="Twitter URL"
                      profileUrl={twitterUrl}
                      setProfileUrl={setTwitterUrl}
                    />
                  </Grid>
                )}
                {selected === 'settings' && (
                  <Grid container item xs={12} justify="center">
                    <Grid container item alignItems="center" xs={12}>
                      <span className={classes.header}>Profile Key</span>
                    </Grid>
                    <Grid
                      container
                      item
                      alignItems="center"
                      justify="center"
                      xs={3}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={generateAccessKey}
                      >
                        Regenerate
                      </Button>
                    </Grid>
                    <Grid item xs={7}>
                      <TextField
                        className={classes.textField}
                        variant="outlined"
                        value={profileKey || ''}
                        disabled
                      />
                    </Grid>
                    <Grid container item xs={2} alignItems="center">
                      <IconButton
                        className={classes.fileCopyAvatar}
                        aria-label="delete"
                        onClick={copyProfileKey}
                      >
                        <FileCopyIcon fontSize="default" />
                      </IconButton>
                    </Grid>
                  </Grid>
                )}
              </form>
            </Paper>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Box>
    </div>
  );
};

Configure.getInitialProps = async () => {
  const apiName = 'contra';
  const stackPath = '/profile/stackoverflow';
  const gitPath = '/profile/github';
  const twitterPath = '/profile/twitter';
  const keyPath = '/key';
  try {
    const [stackOverflow, github, twitter, generatedKey] = await Promise.all([
      API.get(apiName, stackPath),
      API.get(apiName, gitPath),
      API.get(apiName, twitterPath),
      API.get(apiName, keyPath),
    ]);
    const stackOverflowUrl =
      stackOverflow.length > 0 ? stackOverflow[0].profileUrl : '';
    const githubUrl = github.length > 0 ? github[0].profileUrl : '';
    const twitterUrl = twitter.length > 0 ? twitter[0].profileUrl : '';
    return {
      stackOverflowUrl,
      githubUrl,
      twitterUrl,
      profileData: { stackOverflow, github, twitter },
      generatedKey: generatedKey.Item.accessKey,
    };
  } catch (err) {
    console.log(err);
    return {
      results: null,
    };
  }
};

Configure.defaultProps = {
  stackOverflowUrl: '',
  githubUrl: '',
  spectrumUrl: '',
  twitterUrl: '',
  profileData: {},
  generatedKey: '',
};

Configure.propTypes = {
  stackOverflowUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  spectrumUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  profileData: PropTypes.shape({
    stackOverflow: PropTypes.array,
  }),
  generatedKey: PropTypes.string,
};

export default Configure;
