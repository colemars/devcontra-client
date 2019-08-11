import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import UserContext from '../context/user-context';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logoName: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    flexGrow: 1
  },
  bar: {
    backgroundColor: theme.palette.paper.main,
    boxShadow: 'none'
  },
  demo: {
    right: '2'
  }
}));

const DefaultAppBar = () => {
  const classes = useStyles();
  const user = useContext(UserContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.logoName} >
            dev.contra
          </Typography>
          <Button color="inherit" edge="end">
            <Typography variant="h5" className={classes.demo} >
              demo
            </Typography>
          </Button>
            {user.isLoggedIn && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              </div>
              )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default DefaultAppBar;