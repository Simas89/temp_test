import React, { useState } from 'react';
import { flexCenter, flexCenterBetween } from 'common/css';
import {
  ArrowButton,
  Dots,
  SliderFront,
  SliderBack,
  SliderBackground,
  StickyLogo,
} from 'pageComps/onboarding';
import styled from 'styled-components';
import useDimensions from 'hooks/useDimensions';
import { MuiButtonPrimary } from 'common/components';
import Div100vh from 'react-div-100vh';

const Main = styled(Div100vh)`
  height: 100%;
  overflow-x: hidden;
  position: relative;

  .navigation {
    position: absolute;
    width: 100%;
    bottom: 0;
    margin-bottom: 10vh;
    padding: 0 20px;
    ${flexCenter()};

    .arrow-navigation {
      margin: auto;
      max-width: 300px;
      ${flexCenterBetween()};
      flex-grow: 1;
    }
    .button-navigation {
      margin: auto;
      max-width: 400px;
      flex-grow: 1;
    }
  }
`;

const Index = () => {
  const [slide, setSlide] = useState(0);

  const {
    ref,
    dimensions: { width },
  } = useDimensions();

  const nextSlide = () => {
    setSlide((state) => state + 1);
  };

  const prevSlide = () => {
    setSlide((state) => state - 1);
  };

  return (
    // @ts-ignore
    <Main data-cy='home_page' ref={ref}>
      <SliderBackground slide={slide} />
      <SliderBack slide={slide} width={width} />
      <SliderFront slide={slide} width={width} />
      <StickyLogo slide={slide} />
      {slide !== 5 && (
        <div className='navigation'>
          {slide ? (
            <div className='arrow-navigation'>
              <ArrowButton arrowInverted onClick={prevSlide} slide={0} />
              <Dots slide={slide} />
              <ArrowButton onClick={nextSlide} slide={slide} />
            </div>
          ) : (
            <div className='button-navigation'>
              <MuiButtonPrimary onClick={nextSlide} fullWidth>
                Let's go!
              </MuiButtonPrimary>
            </div>
          )}
        </div>
      )}
    </Main>
  );
};

export default Index;
