import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeColors } from 'util/theme';

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
`;

const MotionDiv = motion(Div);

const getBackgroundColor = (idx: number) => {
  switch (idx) {
    case 0:
      return 'rgb(0,0,0)';
    case 1:
      return ThemeColors.PRIMARY;
    case 2:
      return 'rgb(0,0,0)';
    case 3:
      return 'rgb(0,0,0)';
    case 4:
      return ThemeColors.PRIMARY;
    default:
      return ThemeColors.BACKGROUND;
  }
};

interface SliderProps {
  slide: number;
}

export const SliderBackground: React.FC<SliderProps> = ({ slide }) => {
  return (
    <MotionDiv
      animate={{
        backgroundColor: getBackgroundColor(slide),
      }}
      transition={{ type: 'tween', duration: 0.4 }}
    ></MotionDiv>
  );
};
