import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import clsx from 'clsx';
import CreateDesign from './CreateDesign';
import { useLayoutContext } from '../context/layout-context';
import { useAuthContext } from '../context/user-context';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  location: {
    color: '#B9E1E6',
    // marginRight: theme.spacing(2),
    flexGrow: 1,
    transition: theme.transitions.create(['transform', 'opacity'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: 'translateY(32px)',
    opacity: 0,
  },
  locationToggle: {
    opacity: '1',
    transform: 'translateY(0)',
  },
  Appbar: {
    // backgroundColor: theme.palette.primary.main,
    width: '100%',
    // boxShadow: 'none'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  accountIcon: {
    color: theme.palette.paper.main,
  },
}));

const DefaultAppBar = ({ children }) => {
  const classes = useStyles();
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const { isSideBarOpen, setIsSideBarOpen } = useLayoutContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [locationToggle, setLocationToggle] = useState(false);
  const [contentNode, setContentNode] = useState();
  const contentRef = useCallback(node => {
    if (node !== null) {
      setContentNode(node);
    }
  }, []);

  useEffect(() => {
    const check = () => {
      const { y } = contentNode.getBoundingClientRect();
      if (y > 0) {
        setToggle(false);
        return setLocationToggle(false);
      }
      if (y > -45) {
        setToggle(true);
        return setLocationToggle(false);
      }
      setToggle(true);
      return setLocationToggle(true);
    };
    if (contentNode) {
      window.addEventListener('scroll', check);
      return () => window.removeEventListener('scroll', check);
    }
  }, [contentNode]);

  useEffect(() => {
    console.log('render');
  }, []);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenSidebar = () => {
    setIsSideBarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSideBarOpen(false);
  };

  const handleSignOut = async () => {
    await Auth.signOut();
    setAnchorEl(null);
    router.replace('/');
  };

  return (
    <div className={classes.root}>
      <AppBar
        color="secondary"
        className={classes.Appbar}
        position="sticky"
        elevation={toggle ? 1 : 0}
      >
        <Toolbar>
          {/* {isSideBarOpen ? (
            <IconButton color="secondary" onClick={handleCloseSidebar}>
              <ChevronRightIcon />
            </IconButton>
          ) : (
            <IconButton color="secondary" onClick={handleOpenSidebar}>
              <MenuIcon />
            </IconButton>
          )} */}
          <Typography
            variant="body1"
            className={clsx(classes.location, {
              [classes.locationToggle]: locationToggle,
            })}
          >
            Design List
          </Typography>
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
      <div className={classes.content} ref={contentRef}>
        {children}
      </div>
      <CreateDesign />
    </div>
  );
};

export default DefaultAppBar;
