import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SettingsInputComponent from '@material-ui/icons/SettingsInputComponent';
import { useRouter } from 'next/router';
import Avatar from '@material-ui/core/Avatar';
import ConfigureSite from '../components/ConfigureSite';
import { useAuthContext } from '../context/user-context';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '2.5em',
  },
  root: {
    flexGrow: 1,
  },
  header: {
    position: 'absolute',
    top: '11em',
    left: '44.4em',
    color: theme.palette.paper.main,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '35em',
    backgroundColor: theme.palette.background.light,
  },
  grid: {
    marginTop: '3.5em',
  },
  settingsIcon: {
    color: theme.palette.paper.main,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    top: '1.5em',
    left: '1em',
  },
}));

const Configure = () => {
  const router = useRouter();
  const classes = useStyles();
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/signin ');
    }
  }, [isLoggedIn]);

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
            <Avatar className={classes.avatar}>
              <SettingsInputComponent
                fontSize="small"
                className={classes.settingsIcon}
              />
            </Avatar>
            <Paper className={classes.paper}>
              <form className={classes.container} noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <ConfigureSite
                    src="/static/stack.png"
                    variant="stackoverflow"
                    label="StackOverflow URL"
                  />
                  <ConfigureSite
                    src="/static/github.png"
                    variant="github"
                    label="Github URL (coming soon)"
                  />
                  <ConfigureSite
                    src="/static/spectrum.png"
                    variant="spectrum"
                    label="Spectrum URL (coming soon"
                  />
                  <ConfigureSite
                    src="/static/twitter.png"
                    variant="twitter"
                    label="Twitter URL (coming soon"
                  />
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Box>
    </div>
  );
};

export default Configure;
