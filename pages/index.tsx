import { flexCenter, flexCenterBetween } from 'common/css';
import {
  ArrowButton,
  Dots,
  SliderFront,
  SliderBack,
  SliderBackground,
} from 'pageComps/onboarding';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'common/components/Button';
import useDimensions from 'hooks/useDimensions';

const Main = styled.main`
  height: 100vh;
  overflow: hidden;
  position: relative;

  .navigation {
    position: absolute;
    width: 100%;
    bottom: 0;
    margin-bottom: 5vh;
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
      /* ${flexCenterBetween()}; */
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
    <Main data-cy='home_page' ref={ref}>
      <SliderBackground slide={slide} />
      <SliderBack slide={slide} width={width} />
      <SliderFront slide={slide} width={width} />
      <div className='navigation'>
        {slide ? (
          <div className='arrow-navigation'>
            <ArrowButton arrowInverted onClick={prevSlide} slide={0} />
            <Dots slide={slide} />
            <ArrowButton onClick={nextSlide} slide={slide} />
          </div>
        ) : (
          <div className='button-navigation'>
            <Button text="Let's go!" onClick={nextSlide} fullWidth />
          </div>
        )}
      </div>
    </Main>
  );
};

export default Index;
