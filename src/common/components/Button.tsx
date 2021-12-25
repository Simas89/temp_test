import { flexCenter } from 'common/css';
import { Poppins } from 'common/typography';
import React from 'react';
import styled, { css } from 'styled-components';
import { Spacer } from '.';

interface StyleProps {
  variant?: 'DEFAULT' | 'DARK';
  fullWidth?: boolean;
}
const Div = styled.div.attrs({ role: 'button' })<StyleProps>`
  height: 48px;
  padding: 0 18px;
  cursor: pointer;
  color: white;
  border-radius: 4px;
  user-select: none;
  ${flexCenter()};
  ${({ theme, variant }) => {
    switch (variant) {
      case 'DEFAULT':
        return css`
          background-color: ${theme.palette.primary.main};
          box-shadow: 0 0 15px 3px ${theme.palette.primary.shadow};
        `;
      case 'DARK':
        return css`
          background-color: ${theme.palette.dark};
          box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
        `;
    }
  }};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      flex-grow: 1;
    `}

  .spacer {
    margin: 0 4px;
  }
`;

interface ButtonProps extends StyleProps {
  onClick: () => void;
  text?: string;
  bold?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  bold,
  onClick,
  variant = 'DEFAULT',
  fullWidth,
}) => {
  return (
    <Div variant={variant} onClick={onClick} fullWidth={fullWidth}>
      <Poppins weight='300'>{text}</Poppins>
      {text && bold && <Spacer xs={4} horizontal />}
      <Poppins weight='500'>{bold}</Poppins>
    </Div>
  );
};

export default Button;
