import { css, FlattenSimpleInterpolation } from 'styled-components';

type FlexProps = (
  direction?: 'row' | 'column' | undefined
) => FlattenSimpleInterpolation;

export const flexCenterBetween: FlexProps = (direction = 'row') => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: space-between;
    align-items: center;
  `;
};

export const flexCenter: FlexProps = (direction = 'row') => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: center;
    align-items: center;
  `;
};

export const decorImage = () => {
  return css`
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  `;
};
