import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logoName: {
    color: theme.palette.primary.main
  },
  bar: {
    backgroundColor: theme.palette.paper.main,
    boxShadow: 'none'
  }
}));

 const DefaultAppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.logoName} >
            dev.contra
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default DefaultAppBar;