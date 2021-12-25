import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionBase, SectionContainer } from '.';
import { Hexagon, Spacer } from 'common/components';
import { Poppins } from 'common/typography';
import { flexCenter } from 'common/css';

const Div = styled.div`
  display: flex;
  position: absolute;
  height: 100%;

  .slide0 {
    color: white;
    .logo-header {
      ${flexCenter()};
    }
  }
`;

const MotionDiv = motion(Div);

interface SliderProps {
  slide: number;
  width: number;
}

export const SliderFront: React.FC<SliderProps> = ({ slide, width }) => {
  return (
    <MotionDiv
      animate={{
        x: -width * slide,
      }}
      transition={{ type: 'tween' }}
    >
      <SectionBase>
        <SectionContainer className='slide0'>
          <div className='logo-header'>
            <img src='assets/svg/logo.svg' alt='' />
          </div>
          <Spacer xs={180} />
          <Poppins variant='h1' size={20} weight='600' align='center'>
            Welcome!
          </Poppins>
          <Spacer xs={30} />
          <Poppins variant='body1' size={16} weight='300' align='center'>
            Here is the worlds first local worldwide community! No more
            searching for reliable trusted businesses based on reviews from
            people you don’t even know.
          </Poppins>
          <Spacer xs={30} />
          <Poppins variant='body1' size={16} weight='300' align='center'>
            Now you can easily find out who your people would recommend!
          </Poppins>
        </SectionContainer>
        {/* <Hexagon size='MEDIUM' href='image.jpg' /> */}
      </SectionBase>
      <SectionBase>
        {/* <Hexagon size='MEDIUM' href='image.jpg' /> */}
      </SectionBase>
      <SectionBase>
        {/* <Hexagon size='MEDIUM' href='image.jpg' /> */}
      </SectionBase>
      <SectionBase>
        {/* <Hexagon size='MEDIUM' href='image.jpg' /> */}
      </SectionBase>
      <SectionBase>
        {/* <Hexagon size='MEDIUM' href='image.jpg' /> */}
      </SectionBase>
    </MotionDiv>
  );
};
