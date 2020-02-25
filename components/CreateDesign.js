/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback, useEffect } from 'react';
import Grow from '@material-ui/core/Grow';
import { withStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DateTimePicker } from '@material-ui/pickers';
import amber from '@material-ui/core/colors/amber';
import { useDropzone } from 'react-dropzone';
import Typography from '@material-ui/core/Typography';
import { useCreateDialogsContext } from '../context/create-dialogs-context';
import s3Upload from '../utils/s3Upload';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const CreateDesign = ({ classes }) => {
  const [organizationId, setOrganizationId] = useState(0);
  const [selectedStartDate, handleStartDateChange] = useState(new Date());
  const [selectedEndDate, handleEndDateChange] = useState(new Date());
  const [designName, setDesignName] = useState('');
  const [targetFavorites, setTargetFavorites] = useState(0);
  const [files, setFiles] = useState([]);
  const {
    isCreateDesignOpen,
    setIsCreateDesignOpen,
  } = useCreateDialogsContext();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    setFiles(acceptedFiles, ...files);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/jpeg, image/png',
    noClick: true,
    onDrop,
    noKeyboard: true,
  });

  const handleClose = () => {
    setIsCreateDesignOpen(false);
  };

  const handleCreate = () => {
    s3Upload(files);
  };

  const handleOrganizationChange = event => {
    setOrganizationId(event.target.value);
  };

  const handleDesignNameChange = event => {
    setDesignName(event.target.value);
  };

  const handleTargetFavoritesChange = event => {
    setTargetFavorites(event.target.value);
  };

  return (
    <Dialog
      open={isCreateDesignOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      TransitionComponent={Transition}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="form-dialog-title" className={classes.dialogTitleBox}>
        Create Design
        <DialogContentText className={classes.dialogContentText}>
          Your Design will be made available at the specified &ldquo;Available
          On&ldquo; date and time.
        </DialogContentText>
      </DialogTitle>
      <DialogContent dividers className={classes.DialogContent}>
        <div className={classes.column}>
          <div className={classes.row}>
            <div className={classes.mediumTextField}>
              <TextField
                className={classes.formControl}
                autoFocus
                margin="dense"
                id="name"
                label="Design Name"
                type="email"
                fullWidth
                value={designName}
                onChange={handleDesignNameChange}
              />
            </div>
          </div>
          <div className={classes.row}>
            <FormControl className={classes.formControl}>
              <InputLabel id="organization-select-label">
                Organization
              </InputLabel>
              <Select
                labelId="organization-select-label"
                id="organization-select"
                value={organizationId}
                onChange={handleOrganizationChange}
              >
                <MenuItem value={0}>Select an Organization</MenuItem>
                <MenuItem value={10}>University of Alabama</MenuItem>
                <MenuItem value={20}>Florida Atlantic University</MenuItem>
                <MenuItem value={30}>Clemson</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.row}>
            <DateTimePicker
              className={classes.formControl}
              value={selectedStartDate}
              disablePast
              onChange={handleStartDateChange}
              label="Available on"
              showTodayButton
            />
          </div>
          <div className={classes.row}>
            <DateTimePicker
              className={classes.formControl}
              value={selectedEndDate}
              disablePast
              onChange={handleEndDateChange}
              label="Expires on"
              showTodayButton
            />
          </div>
          <div className={classes.row}>
            <TextField
              className={classes.formControl}
              margin="dense"
              id="favoritesTarget"
              label="Target Favorites"
              type="number"
              value={targetFavorites}
              onChange={handleTargetFavoritesChange}
            />
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.row}>
            <div className={classes.imageDrop} {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <Typography className={classes.dropText}>
                  Drop Images Here
                </Typography>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCreate} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(theme => ({
  root: {},
  DialogContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    flexBasis: '50%',
  },
  formControl: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  imageDrop: {
    display: 'flex',
    width: '100%',
    height: 150,
    border: '2px dashed #ff6e00',
    borderRadius: '6px',
    margin: 'auto',
    fontSize: '.9em',
    marginTop: theme.spacing(3),
  },
  close: {
    position: 'fixed',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  dropText: {
    margin: 'auto',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  mediumTextField: {
    // width: '30%',
  },
  dialogTitleBox: {
    background: amber[900],
    color: '#fff',
  },
  dialogContentText: {
    marginTop: theme.spacing(2),
    color: '#ffddc4',
  },
  //   formButton: {
  //     marginTop: theme.spacing(3),
  //     marginLeft: theme.spacing2
  //   },
}))(CreateDesign);
