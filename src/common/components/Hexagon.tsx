import { flexCenter } from 'common/css';
import React from 'react';
import styled, { css } from 'styled-components';

interface StyleProps {
  size: 'SMALL' | 'MEDIUM';
  shadow?: boolean;
}

const styleData = {
  SMALL: {
    width: 146,
    height: 152,
    scale: 0.5,
  },
  MEDIUM: {
    width: 292,
    height: 300,
    scale: 1,
  },
};

const Div = styled.div<StyleProps>`
  /* border: 1px solid white; */
  margin: 5px;
  cursor: pointer;

  ${flexCenter()};

  ${({ size }) => css`
    width: ${styleData[size].width}px;
    height: ${styleData[size].height}px;
    svg {
      transform: scale(${styleData[size].scale});
    }
  `};

  svg {
    ${({ shadow }) =>
      shadow &&
      css`
        filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.5));
      `};
  }
`;

interface HexagonProps extends StyleProps {
  href: string;
}
export const Hexagon: React.FC<HexagonProps> = ({ href, size, shadow }) => {
  return (
    <Div size={size} shadow={shadow}>
      <div>
        <svg xmlns='http://www.w3.org/2000/svg' width={290} height={290}>
          <defs>
            <clipPath id='hexagonClip'>
              <path
                d='
                M138 7.04
                a14 14 0 0 1 14 0
                l108.97560733739 62.91
                a14 14 0 0 1 7 12.12
                l0 125.83419246269
                a14 14 0 0 1 -7 12.12
                l-108.97560733739 62.91
                a14 14 0 0 1 -14 0
                l-108.97560733739 -62.91
                a14 14 0 0 1 -7 -12.12
                l 2.004110622581e-13 -125.83
                a14 14 0 0 1 7 -12.12z'
              />
            </clipPath>
          </defs>
          <image
            href={href}
            clipPath='url(#hexagonClip)'
            preserveAspectRatio='xMidYMid slice'
            height='100%'
            width='100%'
          />
        </svg>
      </div>
    </Div>
  );
};
