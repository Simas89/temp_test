import React, { useState } from 'react';
import styled from 'styled-components';
import { MuiButtonBlack, Spacer } from 'common/components';
import { Poppins } from 'common/typography';
import { SocialButtons, SignUpForm, SignInForm } from '.';

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: black;

  .inner {
    /* border: 1px solid orange; */
    margin: auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    flex: 1;
    width: 100%;
    margin-bottom: 14vh;

    .top-space {
      flex: 1;
      /* border: 5px solid gray; */
    }

    .input-wrapper {
      .max-width-400 {
        display: flex;
        max-width: 400px;
        margin: auto;
      }
    }

    .button-wrapper {
      /* border: 1px solid gray; */

      .max-width-400 {
        max-width: 400px;
        margin: auto;
      }
      .max-width-165 {
        max-width: 165px;
        margin: auto;
      }
    }
  }
`;

enum FormType {
  SIGNUP,
  SIGNIN,
}

export const AuthSlide = () => {
  const [page, setPage] = useState<FormType>(FormType.SIGNUP);

  return (
    <Div>
      <div className='inner'>
        <div className='top-space' />
        {page === FormType.SIGNUP ? <SignUpForm /> : <SignInForm />}
        <Spacer xs={45} />
        <Poppins align='center'>Or sign-{page ? 'in' : 'up'} with:</Poppins>
        <Spacer xs={16} />
        <SocialButtons />
        <Spacer xs={50} />
        <div className='button-wrapper'>
          <div className='max-width-165'>
            <MuiButtonBlack
              fullWidth
              onClick={() =>
                page ? setPage(FormType.SIGNUP) : setPage(FormType.SIGNIN)
              }
            >
              I need to sign-{page ? 'up' : 'in'}!
            </MuiButtonBlack>
          </div>
        </div>
      </div>
    </Div>
  );
};
