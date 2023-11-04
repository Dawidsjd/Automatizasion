import { createTheme } from '@mui/material';

const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#003366',
      dark: '#001e3b',
    },
    secondary: {
      main: '#88a2c4',
    },
    tetriary: {
      main: '#a9c9dd',
    },
    tiles: {
      main: '#003972',
      light: 'rgba(8, 52, 100, 0.5)',
    },
    textcolorprimary: {
      main: '#ffffff',
    },
    textcolorsecondary: {
      main: '#caf0f6',
    },
    textcolortetriary: {
      main: '#000000',
    },
  },
  typography: {
    semismallfontsize: {
      main: '14px',
    },
    smallfontsize: {
      main: '16px',
    },
    semimediumfontsize: {
      main: '20px',
    },
    mediumfontsize: {
      main: '24px',
    },
    semibigfontsize: {
      main: '30px',
    },
    bigfontsize: {
      main: '50px',
    },
  },
});

export default globalTheme;
