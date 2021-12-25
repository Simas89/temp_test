import React from 'react';
import { ThemeColors } from 'util/theme';
import { motion } from 'framer-motion';

interface OnboardingDotProps {
  color: ThemeColors;
}

export const OnboardingDot: React.FC<OnboardingDotProps> = ({ color }) => {
  return (
    <svg
      width='10'
      height='11'
      viewBox='0 0 10 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        d='M9.32492 8.46954C9.53425 8.34791 9.69124 8.05252 9.69124 7.82663V3.56946C9.69124 3.32619 9.5168 3.04817 9.32492 2.92654L5.66181 0.771889C5.45249 0.650256 5.12107 0.650256 4.91175 0.771889L1.24864 2.90916C1.03931 3.03079 0.882324 3.32619 0.882324 3.55208V7.80925C0.882324 8.05252 1.05676 8.33053 1.24864 8.45217L4.91175 10.5894C5.12107 10.7111 5.45249 10.7111 5.66181 10.5894L9.32492 8.46954Z'
        animate={{ fill: color }}
        transition={{ type: 'tween', duration: 0.1 }}
      />
    </svg>
  );
};
