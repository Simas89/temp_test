import {
  createTheme,
  responsiveFontSizes,
  Palette as DefaultPalette,
  PaletteColor,
} from '@mui/material/styles';

interface PaletteColorWithShadow extends PaletteColor {
  shadow: string;
}

interface Palette extends DefaultPalette {
  primary: PaletteColorWithShadow;
  white: string;
  black: string;
}

export enum ThemeColors {
  PRIMARY = '#ED6C50',
  WHITE = '#FFFFFF',
  BLACK = '#191919',
  BACKGROUND = '#F6F6F6',
}
export enum ThemeColorsEnum {
  'PRIMARY' = 'PRIMARY',
  'WHITE' = 'WHITE',
  'BLACK' = 'BLACK',
  'BACKGROUND' = 'BACKGROUND',
}

let theme = createTheme({
  palette: {
    primary: { main: ThemeColors.PRIMARY, shadow: 'rgba(255, 108, 75, 0.3)' },
    secondary: { main: '#ffcb2d' },
    white: ThemeColors.WHITE,
    black: ThemeColors.BLACK,
  } as Palette,
  components: {
    MuiButton: { defaultProps: { disableRipple: true } },
    MuiIconButton: { defaultProps: { disableRipple: true } },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: ThemeColors.BACKGROUND,
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
