import React from "react";
import styled from 'styled-components';

function About() {
  return (
    <StyledAbout>
      <AboutTitle>
        <Title>About</Title>
      </AboutTitle>
      <AboutContent>
      <div>
        <OneSentence>'Artistic Developer'</OneSentence>
      </div>
      <Box>
        <img src='' alt='profile 이미지' width="300px" height="300px" style={{marginRight: "30px"}}/>
        <BoxExplain>
          <p>이름 : 강두연</p>
        </BoxExplain>
      </Box>
      <Box>
        <BoxExplain>
          <p></p>
        </BoxExplain>
        <img src='' alt='career 이미지' width="300px" height="300px" style={{marginLeft: "30px"}}/>
      </Box>
      <Box>
        <img src='' alt='skills 이미지' width="300px" height="300px" style={{marginRight: "30px"}}/>
        <BoxExplain>
          <p></p>
        </BoxExplain>
      </Box>
      </AboutContent>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  width: 100%;
  background-color: #f5f5f5;
`;
const AboutTitle = styled.div`
  padding: 100px 0;
`;
const Title = styled.p`
  text-align: center;
  font-size: 40px;
`;
const AboutContent = styled.div`
  width: 100%;
  padding-bottom: 100px;
`;
const OneSentence = styled.div`
  font-size: 30px;
`;
const Box = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: start;
`;
const BoxExplain = styled.div`
  border: 1px solid black;
  width: 100%;
  padding: 20px;
`;
export default About;
