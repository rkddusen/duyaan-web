import './App.css';
import styled from 'styled-components';
import Header from './component/Header';
import Section from'./component/Section';
import Footer from './component/Footer';

function App() {
  return (
    <StyledApp>
      <Header></Header>
      <Section></Section>
      <Footer></Footer>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  margin: 0 auto;
  width: 100%;
`;
export default App;
