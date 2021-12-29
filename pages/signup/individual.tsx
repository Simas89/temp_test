import { PrifileHead } from 'pageComps/signup';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: black;

  .inner {
    padding: 0 20px;
    border: 1px solid orange;
    margin: auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }
`;

const Individual = () => {
  return (
    <Main>
      <PrifileHead />
      <div className='inner'> Hi there</div>
    </Main>
  );
};

export default Individual;
