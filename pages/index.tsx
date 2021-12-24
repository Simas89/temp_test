import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  height: 100vh;
  position: relative;
  /* overflow: hidden; */

  .slider {
    display: flex;
    border: 3px solid red;
    position: absolute;
    height: 100%;
  }
`;

const Section = styled.div`
  border: 1px solid green;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Game = () => {
  return (
    <Main data-cy='home_page'>
      <div className='slider'>
        <Section />
        <Section />
      </div>
    </Main>
  );
};

export default Game;
