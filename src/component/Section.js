import React from "react";
import styled from 'styled-components';
import Main from './Main';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Section() {
  return (
    <StyledSection>
      <StyledArticle>
        <Main></Main>
      </StyledArticle>
      <StyledContent>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </StyledContent>
    </StyledSection>
  );
}
const StyledSection = styled.div`
  width: 100%;
`;
const StyledArticle = styled.div`
  position: relative;
  width: 100%;
`;
const StyledContent = styled.div`
  position: relative;
  width: 1240px;
  margin: 0 auto;
`;
export default Section;
