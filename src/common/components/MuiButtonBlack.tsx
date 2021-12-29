import styled, { css } from 'styled-components';
import { Button } from '@mui/material';

interface MuiButtonProps {}

export const MuiButtonBlack = styled(Button).attrs({
  variant: 'contained',
})<MuiButtonProps>`
  height: 48px;
  text-transform: none;
  font-weight: 300;
  font-size: 12px;
  background-color: ${({ theme }) => theme.palette.black};
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.palette.black};
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  }
`;
