import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SettingsInputComponent from '@material-ui/icons/settingsInputComponent';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '2.5em'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  root: {
    flexGrow: 1,
  },
  header: {
    position: "absolute",
    top: "11em",
    left: "44.4em",
    color: theme.palette.paper.main
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "35em",
    backgroundColor: theme.palette.background.light
  },
  grid: {
    marginTop: "3.5em"
  },
  settingsIcon: {
    color: theme.palette.paper.main
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    top: "1.5em",
    left: "1em"
  },
  siteIcon: {
    backgroundColor: "#F48024",
    width: "60%",
    height: "100%",
    borderRadius: "7px",
    marginLeft: "15%"
  },
  stackIconWrapper: {
    backgroundColor: "#F48024",
    width: "60%",
    height: "100%",
    borderRadius: "7px",
    marginLeft: "15%",
    marginTop: ".2em"
  },
  spectrumIconWrapper: {
    backgroundColor: "#7B16FF",
    width: "60%",
    height: "100%",
    borderRadius: "7px",
    marginLeft: "15%",
    marginTop: ".2em"
  },
  twitterIconWrapper: {
    backgroundColor: "#1DA1F2",
    width: "60%",
    height: "100%",
    borderRadius: "7px",
    marginLeft: "15%",
    marginTop: ".2em"
  },
  githubIconWrapper: {
    backgroundColor: "#24292E",
    width: "60%",
    height: "100%",
    borderRadius: "7px",
    marginLeft: "15%",
    marginTop: ".2em"
  },
  markerIcon: {
    width: "50%",
    height: "50%",
    marginTop: "1.2em"
  },
  stackIcon: {
    width: "50%",
    height: "50%",
    marginTop: "1.2em"
  }
}));

export default function NestedGrid() {
  const classes = useStyles();
  const [stackOverflow, setStackOverflow] = useState();

  return (
    <div className={classes.root}>
      <Box display={{ xs: 'block', md: 'none' }}>
        hide on screens wider than md
      </Box>
      {/* hide on screens smaller than md */}
      <Box display={{ xs: 'none', md: 'block' }}>
        <Grid className={classes.grid} container spacing={1}>
          <Grid container item xs={12} spacing={0}>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
              <Avatar className={classes.avatar}>
                <SettingsInputComponent fontSize="small" className={classes.settingsIcon} />
              </Avatar>
              <div className={classes.header}>
                <Typography component="h1" variant="h5">
                  Link your accounts
                </Typography>
              </div>
              <Paper className={classes.paper}>
                <form className={classes.container} noValidate autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid container item xs={12} spacing={3}>
                      <Grid item xs={1}>
                      </Grid>
                      <Grid item xs={3}>
                        <div className={classes.stackIconWrapper}>
                          <img src="/static/stack.png" className={classes.markerIcon} />
                        </div>
                      </Grid>
                      <Grid item xs={7}>
                        <TextField
                          id="standard-name"
                          label="StackOverflow URL"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                      <Grid item xs={1}>
                      </Grid>
                      <Grid item xs={3}>
                        <div className={classes.githubIconWrapper}>
                          <img src="/static/github.png" className={classes.markerIcon} />
                        </div>
                      </Grid>
                      <Grid item xs={7}>
                        <TextField
                          id="standard-name"
                          label="Github URL"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                      <Grid item xs={1}>
                      </Grid>
                      <Grid item xs={3}>
                        <div className={classes.spectrumIconWrapper}>
                          <img src="/static/spectrum.png" className={classes.markerIcon} />
                        </div>
                      </Grid>
                      <Grid item xs={7}>
                        <TextField
                          id="standard-name"
                          label="Spectrum URL"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                      <Grid item xs={1}>
                      </Grid>
                      <Grid item xs={3}>
                        <div className={classes.twitterIconWrapper}>
                          <img src="/static/twitter.png" className={classes.markerIcon} />
                        </div>
                      </Grid>
                      <Grid item xs={7}>
                        <TextField
                          id="standard-name"
                          label="Twitter Username"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={3}>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}