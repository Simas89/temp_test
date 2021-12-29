import React from 'react';
import styled from 'styled-components';
import { flexCenter, flexCenterBetween } from 'common/css';
import { Poppins } from 'common/typography';
import { Spacer } from 'common/components';

const Div = styled.div`
  position: relative;
  border: 1px solid orange;
  width: 100%;
  /* padding-bottom: 50%; */
  color: white;
  /* margin-bottom: 20px; */
  aspect-ratio: 2 / 1;
  /* max-width: 900px; */
  max-height: 200px;
  margin: auto;
  background-color: ${({ theme }) => theme.palette.black};
  ${flexCenterBetween('column')};

  .profile-image {
    position: absolute;
    top: 10%;
    border: 1px solid red;
    cursor: pointer;
    ${flexCenter('column')};

    .add {
      min-width: 56px;
      min-height: 56px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.palette.primary.main};
      ${flexCenter()};
    }
  }

  .cover-image {
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    ${flexCenter()};
  }
`;

export const PrifileHead = () => {
  return (
    <Div>
      <div className='profile-image'>
        <div className='add'>
          {' '}
          <img src='/assets/svg/add.svg' alt='' />
        </div>
        <Spacer xs={12} horizontal />
        <Poppins>Add profile image</Poppins>
      </div>
      <div className='cover-image'>
        <Poppins>Add cover image</Poppins>
        <Spacer xs={8} horizontal />
        <img src='/assets/svg/icon-image.svg' alt='' />
      </div>
    </Div>
  );
};
