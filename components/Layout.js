import PropTypes from 'prop-types';
import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from './AppBar';
import Sidebar from './Sidebar';
import { useLayoutContext } from '../context/layout-context';
import { useAuthContext } from '../context/user-context';

const Layout = ({ children, classes }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const { isSideBarOpen } = useLayoutContext();
  const theme = useTheme();

  if (isLoggedIn)
    return (
      <div className={classes.root}>
        <Sidebar />
        <AppBar>
          <>
            {/* <div className={classes.backdrop} /> */}
            <div
              className={clsx(classes.content, {
                [classes.contentShift]: isSideBarOpen,
              })}
            >
              {children}
            </div>
          </>
        </AppBar>
      </div>
    );

  return (
    <div className={classes.root}>
      <AppBar>
        <>
          {/* <div className={classes.backdrop} /> */}
          <div className={clsx(classes.content)}>{children}</div>
        </>
      </AppBar>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(
  theme => ({
    backdrop: {
      width: '100%',
      height: 400,
      zIndex: -1,
      backgroundColor: theme.palette.secondary.main,
      position: 'fixed',
    },
    content: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      marginBottom: theme.spacing(4),
      paddingTop: theme.spacing(8),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    root: {
      display: 'flex',
    },
    contentShift: {
      width: `calc(100vw - ${theme.spacing(6)}px)`,
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(2),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }),
  { name: 'Layout' }
)(Layout);
