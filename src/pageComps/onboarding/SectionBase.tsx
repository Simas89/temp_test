import { Hexagon } from 'common/components';
import React from 'react';
import styled from 'styled-components';

interface SectionWrapperProps {}

const SectionWrapper = styled.section<SectionWrapperProps>`
  position: relative;
  min-width: 100vw;
  display: flex;
  overflow: hidden;
`;

export const SectionContainer = styled.div<{ fullHeight?: boolean }>`
  border: 1px solid green;
  position: relative;
  flex: 1;
  padding: 54px 20px 0 20px;
  margin: 0 auto;
  max-width: 600px;
  height: ${({ fullHeight }) => (fullHeight ? 100 : 85)}vh;

  /* height: fill-available; */
`;

interface SectionBaseProps {
  children?: React.ReactNode;
}
export const SectionBase: React.FC<SectionBaseProps> = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};
