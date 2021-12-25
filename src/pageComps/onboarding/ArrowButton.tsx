import { decorImage, flexCenter } from 'common/css';
import React from 'react';
import styled, { css } from 'styled-components';
import { ThemeColors, ThemeColorsEnum } from 'util/theme';
import { motion } from 'framer-motion';

interface ThemeProps {
  arrowInverted?: boolean;
}

const Div = styled.div<ThemeProps>`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  ${flexCenter()};
  ${decorImage()};

  ${({ arrowInverted }) =>
    arrowInverted &&
    css`
      img {
        transform: scaleX(-1);
      }
    `};
`;

const MotionDiv = motion(Div);

interface ArrowButtonProps extends ThemeProps {
  onClick: () => void;
  slide?: number;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  arrowInverted,
  onClick,
  slide = 0,
}) => {
  const getBackgroundColor = (idx: number) => {
    switch (idx) {
      case 0:
        return ThemeColors.BLACK;
      case 1:
        return ThemeColors.WHITE;
      case 2:
        return ThemeColors.PRIMARY;
      case 3:
        return ThemeColors.PRIMARY;
      case 4:
        return ThemeColors.WHITE;
      default:
        return ThemeColors.BACKGROUND;
    }
  };
  const getInvert = (idx: number) => {
    switch (idx) {
      case 0:
        return 1;
      case 1:
        return 0;
      case 2:
        return 1;
      case 3:
        return 1;
      case 4:
        return 0;
      default:
        return 0;
    }
  };

  return (
    <MotionDiv
      animate={{
        backgroundColor: getBackgroundColor(slide),
      }}
      transition={{ type: 'tween', duration: 0.1 }}
      arrowInverted={arrowInverted}
      onClick={onClick}
    >
      <motion.img
        animate={{ filter: `invert(${getInvert(slide)})` }}
        transition={{ type: 'tween', duration: 0.1 }}
        src='assets/svg/onboardingArrow.svg'
      />
    </MotionDiv>
  );
};
