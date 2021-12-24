import styled, { css } from 'styled-components';
import { Typography } from '@mui/material';
import '@fontsource/poppins';

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
