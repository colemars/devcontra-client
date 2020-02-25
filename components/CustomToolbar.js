import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useCreateDialogsContext } from '../context/create-dialogs-context';

const CustomToolbar = ({ classes }) => {
  const { setIsCreateDesignOpen } = useCreateDialogsContext();

  const handleOpen = () => {
    setIsCreateDesignOpen(true);
  };

  return (
    <Tooltip title="Create Design">
      <IconButton className={classes.iconButton} onClick={handleOpen}>
        <AddIcon className={classes.deleteIcon} />
      </IconButton>
    </Tooltip>
  );
};

export default withStyles(
  theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      // border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
  { name: 'CustomToolbar' }
)(CustomToolbar);
