import { Hexagon } from 'common/components';
import React from 'react';
import styled from 'styled-components';

interface SectionWrapperProps {}

const SectionWrapper = styled.section<SectionWrapperProps>`
  position: relative;
  height: 100vh;
  min-width: 100vw;
  display: flex;
  /* border: 1px solid white; */
`;

export const SectionContainer = styled.div`
  /* border: 1px solid green; */
  position: relative;
  flex: 1;
  padding: 54px 10px 0 10px;
  margin: 0 auto;
  max-width: 500px;
  height: 85vh;
`;

interface SectionBaseProps {
  children?: React.ReactNode;
}
export const SectionBase: React.FC<SectionBaseProps> = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};
