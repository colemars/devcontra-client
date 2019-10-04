import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { useAuthContext } from '../context/user-context';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logoName: {
    color: theme.palette.paper.main,
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  bar: {
    backgroundColor: theme.palette.primary.main,
    // boxShadow: 'none'
  },
  demo: {
    right: '2',
    color: theme.palette.paper.main,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  accountIcon: {
    color: theme.palette.paper.main,
  },
}));

const DefaultAppBar = () => {
  const classes = useStyles();
  const { isLoggedIn } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    await Auth.signOut();
    setAnchorEl(null);
    router.replace('/');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.logoName}>
            <Link href="/" passHref>
              <a className={classes.link}>dev.contra</a>
            </Link>
          </Typography>
          <Button color="inherit" edge="end">
            <Typography variant="h5" className={classes.demo}>
              <Link href="/demo" passHref>
                <a className={classes.link}>DEMO</a>
              </Link>
            </Typography>
          </Button>
          {isLoggedIn && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle className={classes.accountIcon} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default DefaultAppBar;
