import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#11283F',
    },
    secondary: {
      main: '#01A6B9',
    },
    other: {
      main: '#1D2A33',
      dark: '#223340',
    },
    paper: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F2F2F2',
      light: '#fff',
    },
    typography: {
      sidebar: '#B8BFC6',
    },
  },
});

export default theme;
