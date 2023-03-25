import React from "react";
import styled from 'styled-components';

function Main() {
  return (
    <StyledMain>
      <MainImg width="80%" src='./images/main.png' alt='main 이미지' />
      <MainExplain>
        <MainExplainRe>
          <MainExplainAb>
            <Sentence>Welcome to</Sentence>
            <Sentence>DuYaan's Web</Sentence>
          </MainExplainAb>
        </MainExplainRe>
      </MainExplain>
    </StyledMain>
  );
}
const StyledMain = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  height: 100vh;
  position: relative;
`;
const MainImg = styled.img`
position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const MainExplain = styled.div`
  position: absolute;
  width: 1240px;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
const MainExplainRe = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const MainExplainAb = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0,-50%);
`;
const Sentence = styled.p`
  font-size: 80px;
  line-height: 1.5;
  letter-spacing: 10px;
  font-weight: 500;
`;

export default Main;
