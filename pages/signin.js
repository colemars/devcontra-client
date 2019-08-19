import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Build from '@material-ui/icons/Build';
import { Auth } from 'aws-amplify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthContext } from '../context/user-context';
import CustomizedSnackbars from '../components/SnackBarContentWrapper';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  header: {
    color: theme.palette.paper.main,
  },
  link: {
    textDecoration: 'none',
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
    color: theme.palette.paper.main,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.paper.main,
  },
  field: {
    borderColor: 'yellow !important',
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
    color: theme.palette.secondary.dark,
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
}));

const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link href="/" passHref>
        <a className={classes.link}>DevContra</a>
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
};

const SignIn = () => {
  const { setIsLoggedIn, isLoggedIn } = useAuthContext();
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [snackMessage, setSnackMessage] = useState('error');
  const [snackVariant, setSnackVariant] = useState('error');
  const [snackOpen, setSnackOpen] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    return password.length > 0 && email.length > 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Auth.signIn(email, password);
      setEmailError(false);
      setPasswordError(false);
      setSnackMessage('Successfully logged in');
      setSnackVariant('success');
      setSnackOpen(true);
      setIsLoggedIn(true);
    } catch (err) {
      if (err.code === 'UserNotFoundException') {
        setEmailError(true);
        setPasswordError(false);
        setSnackMessage(err.message);
        setSnackVariant('error');
        setSnackOpen(true);
        return;
      }
      if (err.code === 'NotAuthorizedException') {
        setPasswordError(true);
        setEmailError(false);
        setSnackMessage('Invalid Password, please try again');
        setSnackVariant('error');
        setSnackOpen(true);
        return;
      }
      setSnackMessage(err.code);
      setSnackVariant('error');
      setSnackOpen(true);
    }
  };

  useEffect(() => {
    if (email.length === 0) setEmailError(false);
  }, [email]);

  useEffect(() => {
    if (password.length === 0) setPasswordError(false);
  }, [password]);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/configure');
    }
  }, [isLoggedIn]);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Build />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.header}>
          Sign in
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
              inputMode: 'numeric',
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
            className={classes.field}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel
            className={classes.formControlLabel}
            control={<Checkbox value="remember" className={classes.checkbox} />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" passHref>
                <a className={classes.link}>Forgot password?</a>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" passHref>
                <a className={classes.link}>
                  {"Don't have an account? Sign Up"}
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
  );
};

export default SignIn;
