import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionBase } from '.';
import { Spacer } from 'common/components';

const Div = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .bg {
    position: absolute;
  }
  .bg0 {
    top: 30%;
    right: -46px;
  }
  .bg1 {
    top: -40px;
    right: -45px;
  }
  .bg2 {
    bottom: 20%;
    right: -45px;
    transform: scaleX(-1) scaleY(-1);
  }
  .bg3 {
    top: -40px;
    right: -45px;
  }
`;

const MotionDiv = motion(Div);

interface SliderProps {
  slide: number;
  width: number;
}

export const SliderBack: React.FC<SliderProps> = ({ slide, width }) => {
  return (
    <MotionDiv
      animate={{
        x: (-width - 50) * slide,
      }}
      transition={{ type: 'spring', delay: 0.1, duration: 1 }}
    >
      <SectionBase>
        <motion.img
          animate={{ opacity: slide === 0 ? 1 : 0 }}
          transition={{ type: 'tween', duration: 0.1 }}
          className='bg bg0'
          src='assets/svg/onboardingBG_A.svg'
          alt=''
        />
      </SectionBase>
      <Spacer horizontal xs={50} />
      <SectionBase>
        <motion.img
          animate={{ opacity: slide === 1 ? 1 : 0 }}
          transition={{ type: 'tween', duration: 0.1 }}
          className='bg bg1'
          src='assets/svg/onboardingBG_B.svg'
          alt=''
        />
      </SectionBase>
      <Spacer horizontal xs={50} />
      <SectionBase>
        <motion.img
          animate={{ opacity: slide === 2 ? 1 : 0 }}
          transition={{ type: 'tween', duration: 0.1 }}
          className='bg bg2'
          src='assets/svg/onboardingBG_A.svg'
          alt=''
        />
      </SectionBase>
      <Spacer horizontal xs={50} />
      <SectionBase>
        <motion.img
          animate={{ opacity: slide === 3 ? 1 : 0 }}
          transition={{ type: 'tween', duration: 0.1 }}
          className='bg bg0'
          src='assets/svg/onboardingBG_A.svg'
          alt=''
        />
      </SectionBase>
      <Spacer horizontal xs={50} />
      <SectionBase>
        <motion.img
          animate={{ opacity: slide === 4 ? 1 : 0 }}
          transition={{ type: 'tween', duration: 0.1 }}
          className='bg bg1'
          src='assets/svg/onboardingBG_B.svg'
          alt=''
        />
      </SectionBase>
    </MotionDiv>
  );
};
