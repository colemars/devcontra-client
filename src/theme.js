import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#23252B',
    },
    secondary: {
      main: '#96C197',
    },
    other: {
      main: '#1D2A33'
    },
    paper: {
      main: '#fff'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#314759',
    },
  },
});

export default theme;