import React from 'react';
import styled from 'styled-components';
import { OnboardingDot } from 'assets/dynamicSvg';
import { flexCenterBetween } from 'common/css';
import { ThemeColors } from 'util/theme';

const Div = styled.div`
  width: 30%;
  ${flexCenterBetween()};
`;

interface DotsProps {
  slide: number;
}

export const Dots: React.FC<DotsProps> = ({ slide }) => {
  const getColor = (idx: number) => {
    if (idx === slide) {
      if (slide === 2 || slide === 3) return ThemeColors.PRIMARY;
      else return ThemeColors.BLACK;
    } else return ThemeColors.WHITE;
  };
  return (
    <Div>
      <OnboardingDot color={getColor(1)} />
      <OnboardingDot color={getColor(2)} />
      <OnboardingDot color={getColor(3)} />
      <OnboardingDot color={getColor(4)} />
    </Div>
  );
};
