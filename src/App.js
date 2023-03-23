import './App.css';
import styled from 'styled-components';
import Header from './component/Header';

function App() {
  return (
    <StyledApp>
      <Header></Header>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  margin: 0 auto;
  width: 1240px;
  position: relative;
`;
export default App;
