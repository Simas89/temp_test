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
    top: -57px;
    right: calc(50% - 172px);
  }
`;

const MotionDiv = motion(Div);

interface SliderProps {
  slide: number;
  width: number;
}

export const SliderBack: React.FC<SliderProps> = ({ slide, width }) => {
  const variants = {
    visible: {
      opacity: 1,
      transition: { type: 'tween', duration: 0.1 },
    },
    hidden: {
      opacity: 0,
      transition: { type: 'tween', duration: 0.1 },
    },
  };

  const slidesGap = 50;
  return (
    <MotionDiv
      animate={{
        x: (-width - slidesGap) * slide,
      }}
      transition={{
        type: 'spring',
        delay: 0.1,
        mass: 1,
        stiffness: 60,
        damping: 12,
        restDelta: 0.001,
        restSpeed: 0.001,
      }}
    >
      <SectionBase>
        <motion.img
          variants={variants}
          initial='hidden'
          animate={slide === 0 ? 'visible' : 'hidden'}
          className='bg bg0'
          src='assets/svg/onboardingBG_A.svg'
          alt=''
        />
      </SectionBase>
      <Spacer horizontal xs={slidesGap} />
      <SectionBase>
        <motion.img
          variants={variants}
          initial='hidden'
          animate={slide === 1 ? 'visible' : 'hidden'}
          className='bg bg1'
          src='assets/svg/onboardingBG_B.svg'
          alt=''
        />
      </SectionBase>
      <Spacer horizontal xs={slidesGap} />
      <SectionBase>
        <motion.img
          variants={variants}
          initial='hidden'
          animate={slide === 2 ? 'visible' : 'hidden'}
          className='bg bg2'
          src='assets/svg/onboardingBG_A.svg'
          alt=''
        />
      </SectionBase>
      <Spacer horizontal xs={slidesGap} />
      <SectionBase>
        <motion.img
          variants={variants}
          initial='hidden'
          animate={slide === 3 ? 'visible' : 'hidden'}
          className='bg bg0'
          src='assets/svg/onboardingBG_A.svg'
          alt=''
        />
      </SectionBase>
      <Spacer horizontal xs={slidesGap} />
      <SectionBase>
        <motion.img
          variants={variants}
          initial='hidden'
          animate={slide === 4 ? 'visible' : 'hidden'}
          className='bg bg1'
          src='assets/svg/onboardingBG_B.svg'
          alt=''
        />
      </SectionBase>
      <Spacer horizontal xs={slidesGap} />
      <SectionBase>
        <motion.img
          variants={variants}
          initial='hidden'
          animate={slide === 5 ? 'visible' : 'hidden'}
          className='bg bg3'
          src='assets/svg/mainBG.svg'
          alt=''
        />
      </SectionBase>
    </MotionDiv>
  );
};
