import {
  createTheme,
  responsiveFontSizes,
  Palette as DefaultPalette,
} from '@mui/material/styles';

interface Palette extends DefaultPalette {
  bg: string;
}

let theme = createTheme({
  palette: {
    primary: { main: '#ED6C50' },
    secondary: { main: '#ffcb2d' },
    bg: '#F6F6F6',
  } as Palette,
  components: {
    MuiButton: { defaultProps: { disableRipple: true } },
    MuiIconButton: { defaultProps: { disableRipple: true } },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F6F6F6',
          // overflowX: 'hidden',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
});

export default theme;
