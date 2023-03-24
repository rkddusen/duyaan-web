import React from 'react';
import styled from 'styled-components';

function SNS(){
  return(
    <StyledSNS>
      <div>
        <img src='' alt='sns 사진' width="100px" height="100px"/>
      </div>
      <div>
        <SNSTitle>Naver</SNSTitle>
      </div>
    </StyledSNS>
  );
}

const StyledSNS = styled.div`
  width: 510px;
  height: 210px;
  padding: 20px;
  margin: 0 0 100px 0;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SNSTitle = styled.p`
  margin-top: 20px;
`;

export default SNS;