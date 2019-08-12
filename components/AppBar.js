import React, { useContext } from 'react';
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
import { useAuthContext } from "../context/user-context";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logoName: {
    color: theme.palette.paper.main,
    marginRight: theme.spacing(2),
    flexGrow: 1
  },
  bar: {
    backgroundColor: theme.palette.primary.main,
    // boxShadow: 'none'
  },
  demo: {
    right: '2',
    color: theme.palette.paper.main
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

const DefaultAppBar = () => {
  const classes = useStyles();
  const { isLoggedIn } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.logoName} >
            <Link href="/" passhref>
              <a className={ classes.link }>
                dev.contra
              </a>
            </Link>
          </Typography>
          <Button color="inherit" edge="end">
            <Typography variant="h5" className={classes.demo} >
              demo
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
                <AccountCircle />
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
              </div>
              )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default DefaultAppBar;