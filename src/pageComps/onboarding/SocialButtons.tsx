import { Spacer } from 'common/components';
import { decorImage, flexCenter } from 'common/css';
import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

const Div = styled.div`
  ${flexCenter()};
  .sb-inner {
    flex: 1;
    display: flex;
    max-width: 400px;

    img {
      ${decorImage()}
    }
  }
`;

const SocialButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true,
})`
  background-color: white;
  height: 64px;
  border-radius: 4px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(0, 0, 0, 0.001);
  }
`;

export const SocialButtons = () => {
  return (
    <Div>
      <div className='sb-inner'>
        <SocialButton>
          <img src='assets/svg/logo-fb.svg' alt='' />
        </SocialButton>
        <Spacer xs={16} horizontal />
        <SocialButton>
          <img src='assets/svg/logo-google.svg' alt='' />
        </SocialButton>
        <Spacer xs={16} horizontal />
        <SocialButton>
          <img src='assets/svg/logo-apple.svg' alt='' />
        </SocialButton>
      </div>
    </Div>
  );
};
