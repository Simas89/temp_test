import styled, { css } from 'styled-components';
import { TextField } from '@mui/material';

interface MuiTextFieldProps {
  aligncenter?: number;
}

export const MuiTextField = styled(TextField)<MuiTextFieldProps>`
  outline: none;

  input,
  textarea {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    padding: 13px 12px;
    background-color: white;
    border-radius: 4px;
    font-size: 16px;
    ${({ aligncenter }) =>
      Boolean(aligncenter) &&
      css`
        text-align: center;
      `};
  }
  & input::placeholder,
  textarea::placeholder {
    color: black;
    opacity: 0.7;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  .MuiOutlinedInput-root:hover fieldset {
    border: none;
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .Mui-error {
    border: 1px solid ${({ theme }) => theme.palette.error.main};
  }
  .Mui-error.MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${({ theme }) => theme.palette.error.main};
  }

  .MuiFormHelperText-root {
    border: none;
    font-size: 12px;
  }
`;
