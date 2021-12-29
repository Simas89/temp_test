import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexCenter } from 'common/css';

const Div = styled.div`
  position: absolute;
  width: 100%;

  margin-top: 54px;
  ${flexCenter()};
`;

const MotionDiv = motion(Div);

export const StickyLogo: React.FC<{ slide: number }> = ({ slide }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: slide >= 4 ? 1 : 0 }}
    >
      <motion.img
        src='assets/svg/logo.svg'
        alt=''
        animate={{ filter: `invert(${Number(slide === 5)})` }}
      />
    </MotionDiv>
  );
};
