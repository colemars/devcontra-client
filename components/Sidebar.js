import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useLayoutContext } from '../context/layout-context';

const drawerWidth = 200;

const Sidebar = ({ classes }) => {
  //   const { isSideBarOpen, setIsSideBarOpen } = useLayoutContext();

  const isSideBarOpen = true;
  const theme = useTheme();

  const handleDrawerClose = () => {
    setIsSideBarOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer)}
      classes={{
        paper: clsx(classes.drawer),
      }}
    >
      <div className={classes.toolbar}>
        <div className={classes.logo}>
          <Typography variant="h5" align="left">
            Awtarkey
          </Typography>
        </div>
        {/* <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton> */}
      </div>
      <Divider />
      <List>
        {['Overview', 'Designs', 'Organizations', 'Orders', 'Designers'].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {['Analytics', 'Promotions', 'Referrals'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      position: 'relative',
      height: '100vh',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.typography.sidebar,
      '& .MuiSvgIcon-root': {
        color: theme.palette.typography.sidebar,
      },
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    // drawerClose: {
    //   transition: theme.transitions.create('width', {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    //   }),
    //   overflowX: 'hidden',
    //   width: theme.spacing(7) + 1,
    //   [theme.breakpoints.up('sm')]: {
    //     width: theme.spacing(9) + 1,
    //   },
    // },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    logo: {
      width: '100%',
      textAlign: 'left',
      marginLeft: theme.spacing(1),
      color: '#fff',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
  { name: 'Layout' }
)(Sidebar);
