import styled, { css } from 'styled-components';
import { Typography } from '@mui/material';

interface FontProps {
  size?: number;
  customColor?: string;
  weight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export const Poppins = styled(Typography)<FontProps>`
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-ExtraLightItalic.ttf')
      format('truetype');
    font-weight: 200;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-RegularItalic.ttf')
      format('truetype');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-MediumItalic.ttf')
      format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-SemiBoldItalic.ttf')
      format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf')
      format('truetype');
    font-weight: 800;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins/Poppins-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  font-family: 'Poppins';

  ${({ size }) =>
    size &&
    css`
      font-size: ${size}px !important;
    `};

  ${({ customColor }) =>
    customColor &&
    css`
      color: ${customColor} !important;
    `};

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight} !important;
    `};
`;
