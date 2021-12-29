import styled, { css } from 'styled-components';
import { Button } from '@mui/material';

interface MuiButtonProps {}

export const MuiButtonPrimary = styled(Button).attrs({
  variant: 'contained',
})<MuiButtonProps>`
  height: 48px;
  text-transform: none;
  font-weight: 300;
  box-shadow: 0 0 15px 3px ${({ theme }) => theme.palette.primary.shadow};
  font-size: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 0 15px 3px ${({ theme }) => theme.palette.primary.shadow};
    /* box-shadow: 0 3px 10px 1px
      ${({ theme }) => theme.palette.primary.shadowHover}; */
  }
`;
