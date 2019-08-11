import React, { useState, useContext, useEffect } from 'react';
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
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { Auth } from 'aws-amplify';
import Link from '@material-ui/core/Link';
import UserContext from '../context/user-context';
import Layout from '../components/Layout';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DevContra
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

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
    color: theme.palette.primary.dark
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
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

  checkbox: {
    color: theme.palette.secondary.dark
  },

  cssLabel: {
    color: 'green'
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.other.light} !important`,
    },
    '&:hover': {
      borderColor: `${theme.palette.other.light} !important`,
    },
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
  },
}));

const SignIn = (signIn) => {
  const user = useContext(UserContext)
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const validateForm = () => {
    return password.length > 0 && email.length > 0;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log(user);
      await Auth.signIn(email, password);
      await user.setIsLoggedIn(true);
      console.log("logged in")
      console.log(await user);
    } catch (e) {
      console.log(Auth);
      console.log("Error", e);
    }
  }

  useEffect(() => {
    console.log(user);
  });

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccessAlarmIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.header}>
            Sign in
        </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
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
                <Link className={classes.link} href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}

export default SignIn;