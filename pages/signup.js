import React, { useState, useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AddCircleOutlined';
import BorderClear from '@material-ui/icons/BorderClear'
import { amber, green } from '@material-ui/core/colors';
import { Auth } from 'aws-amplify';
import Link from 'next/link';
import { useAuthContext } from "../context/user-context";
import Layout from '../components/Layout';
import CustomizedSnackbars from '../components/SnackBarContentWrapper';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  header: {
    color: theme.palette.paper.main
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.paper.main
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.paper.main
  },
  field: {
    borderColor: "yellow !important"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  checkbox: {
    color: theme.palette.secondary.dark
  },
  cssLabel: {},
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.other.light} !important`,
    },
    '&:hover': {
      borderColor: `${theme.palette.other.light} !important`,
    },
  },
  close: {
    padding: theme.spacing(0.5),
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: '1px',
  },
  passwordStrengthIndicator: {
    color: theme.palette.error.light
  },
  weak: {
    color: theme.palette.error.light
  },
  medium: {
    color: amber[700]
  },
  strong: {
    color: green[600]
  }

}));

const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link href="/" passhref>
        <a className={classes.link}>
          DevContra
        </a>
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const Signup = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [snackMessage, setSnackMessage] = useState("error");
  const [snackVariant, setSnackVariant] = useState("error");
  const [snackOpen, setSnackOpen] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("weak");

  const validateForm = () => {
    return password.length > 0 && email.length > 0 && confirmPassword === password;
  }

  const validateConfirmationForm = () => {
    return confirmationCode.length > 0;
  }

  const validatePasswordStrength = (value) => {
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    if (strongRegex.test(value)) return setPasswordStrength("strong");
    if (mediumRegex.test(value) && value.length > 12) return setPasswordStrength("strong");
    if (mediumRegex.test(value)) return setPasswordStrength("medium");
    
    return setPasswordStrength("weak");
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    validatePasswordStrength(e.target.value);
  } 

  const handleSubmit = async e => {
    e.preventDefault();

    setIsLoading(true);
    setNewUser("test");
    setIsLoading(false);
  }

  const handleConfirmationSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
  }

  useEffect(() => {
    if (email.length === 0) setEmailError(false);
    if (password.length === 0) setPasswordError(false);
  });

  const inputAdornment = isSelected 
    ? { 
        startAdornment: (
          <InputAdornment position="start">
            <BorderClear className={clsx(classes[passwordStrength])} />
          </InputAdornment>
        ),
      } 
    : {}

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircle fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.header}>
            Sign up
        </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              error={emailError}
              InputLabelProps={{
                classes: {
                  root: classes.field,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                inputMode: "numeric"
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              error={passwordError}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              InputProps={inputAdornment}
              onFocus={e => setIsSelected(true)}
              onBlur={e => setIsSelected(false)}
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handlePasswordChange}
            />
            <TextField
              error={passwordError}
              className={classes.field}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm password"
              label="Confirm Password"
              type="confirm"
              id="confirmPassword"
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!validateForm()}
            >
              Sign Up
          </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2" passhref>
                  <a className={classes.link} >
                    {"Already have an account? Sign In"}
                  </a>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
        <CustomizedSnackbars
          message={snackMessage}
          variant={snackVariant}
          open={snackOpen}
          setOpen={setSnackOpen}
        />
      </Container>
    </Layout>
  );
}

export default Signup;