import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AuthSlide, SectionBase, SectionContainer } from '.';
import { Hexagon, Spacer } from 'common/components';
import { Poppins } from 'common/typography';
import { flexCenter, flexCenterBetween } from 'common/css';

const Div = styled.div`
  display: flex;
  position: absolute;
  color: white;

  .slide0 {
    .logo-header {
      ${flexCenter()};
    }
  }
  .slide1 {
    .text {
      position: relative;
      z-index: 1;
      max-width: 260px;
    }
    .hex-wrapper {
      position: absolute;
      right: -100px;
      bottom: 5%;
    }
  }
  .slide2 {
    display: flex;
    .text {
      align-self: flex-end;
      position: relative;
      z-index: 1;
      max-width: 260px;
      text-align: right;
      margin-left: auto;
      margin-bottom: 20%;
    }
    .hex-wrapper {
      position: absolute;
      left: -80px;
      top: -30px;
    }
  }
  .slide3 {
    display: flex;
    flex-direction: column;
    .guidlines-header {
      transform: translateY(-10px);
    }
    .guidlines-container {
      flex: 1;
      margin-bottom: 10%;
      ${flexCenterBetween('column')};
    }
  }
  .slide4 {
    display: flex;
    flex-direction: column;
  }
`;

const GuideDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;

  img {
    transform: translateY(-10px);
  }
  .guide-text {
    margin-left: 35px;
  }
`;

const Guide: React.FC<{ img: string; text: string }> = ({ img, text }) => {
  return (
    <GuideDiv>
      <img src={img} alt='' />
      <div className='guide-text'>
        <Poppins variant='body1' size={12} weight='300'>
          {text}
        </Poppins>
      </div>
    </GuideDiv>
  );
};

const MotionDiv = motion(Div);

interface SliderProps {
  slide: number;
  width: number;
}

export const SliderFront: React.FC<SliderProps> = ({ slide, width }) => {
  const slidesGap = 150;
  return (
    <MotionDiv
      animate={{
        x: (-width - slidesGap) * slide,
      }}
      transition={{ type: 'tween' }}
    >
      <SectionBase>
        <SectionContainer className='slide0'>
          <div className='logo-header'>
            <img src='assets/svg/logo.svg' alt='' />
          </div>
          <Spacer xs={180} />
          <Poppins variant='h1' size={20} weight='600' align='center'>
            Welcome!
          </Poppins>
          <Spacer xs={30} />
          <Poppins variant='body1' size={16} weight='300' align='center'>
            Here is the worlds first local worldwide community! No more
            searching for reliable trusted businesses based on reviews from
            people you don’t even know.
          </Poppins>
          <Spacer xs={30} />
          <Poppins variant='body1' size={16} weight='300' align='center'>
            Now you can easily find out who your people would recommend!
          </Poppins>
        </SectionContainer>
      </SectionBase>
      <Spacer horizontal xs={slidesGap} />
      <SectionBase>
        <SectionContainer className='slide1'>
          <div className='text'>
            <Poppins variant='body1' size={16} weight='300'>
              Circle of Trust is a platform for people and businesses to connect
              based on recommendations from those you already know and trust.
            </Poppins>
          </div>
          <div className='hex-wrapper'>
            <Hexagon size='LARGE' href='assets/images/onboardingHex1.png' />
          </div>
        </SectionContainer>
      </SectionBase>
      <Spacer horizontal xs={slidesGap} />
      <SectionBase>
        <SectionContainer className='slide2'>
          <div className='text'>
            <Poppins variant='body1' size={16} weight='300'>
              Businesses are added to individual’s circles as a sign of
              recommendation — and if you trust that person’s intuition — you
              can approach businesses with peace of mind.
            </Poppins>
          </div>
          <div className='hex-wrapper'>
            <Hexagon size='LARGE' href='assets/images/onboardingHex1.png' />
          </div>
        </SectionContainer>
      </SectionBase>
      <Spacer horizontal xs={slidesGap} />
      <SectionBase>
        <SectionContainer className='slide3'>
          <div className='guidlines-header'>
            <Poppins variant='body1' size={16} weight='400' align='center'>
              Community Guidelines
            </Poppins>
          </div>
          <div className='guidlines-container'>
            <Guide
              img='assets/svg/onboardingGuideId1.svg'
              text="We shall not recommend anyone that we don't know or wouldn't use ourselves."
            />
            <Guide
              img='assets/svg/onboardingGuideId2.svg'
              text="We will work together to strengthen the Circle's ethos of creating a moral, trusted, friendly, community!"
            />
            <Guide
              img='assets/svg/onboardingGuideId3.svg'
              text='We recognise that by inviting lots of friends and family to join it creates infinite potential new clients to all the circles on the platform.'
            />
            <Guide
              img='assets/svg/onboardingGuideId4.svg'
              text='We will all create a community based platform that will thrive by sharing, which will lead to direct donations to our local communities.'
            />
            <Guide
              img='assets/svg/onboardingGuideId5.svg'
              text='Companies acknowledge 6 key elements that potential new and old clients are look for when trusting are observed: Connections, Consistency, Compassion, Competency, Competitiveness, & Collaboration.'
            />
            <Guide
              img='assets/svg/onboardingGuideId6.svg'
              text='We create and evolve as a community and take pride in helping and supporting others.'
            />
          </div>
        </SectionContainer>
      </SectionBase>
      <Spacer horizontal xs={slidesGap} />
      <SectionBase>
        <SectionContainer className='slide4'>
          <Spacer xs={230} />
          <Poppins variant='body1' size={20} weight='400' align='center'>
            Let’s build those circles!
          </Poppins>
          <Spacer xs={30} />
          <Poppins variant='body1' size={16} weight='300' align='center'>
            Everyone has their very own <strong>Circle of Trust...</strong>{' '}
            who’s in yours? From here, you can create public or private circles
            filled with your people and the businesses that matter to them,
            harnessing the power of word of mouth.
          </Poppins>
        </SectionContainer>
      </SectionBase>
      <Spacer horizontal xs={slidesGap} />
      <SectionBase>
        <SectionContainer fullHeight>
          <AuthSlide />
        </SectionContainer>
      </SectionBase>
    </MotionDiv>
  );
};
