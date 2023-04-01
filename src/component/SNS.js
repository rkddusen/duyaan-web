import React from 'react';
import styled from 'styled-components';

function SNS(props){
  const { img, title, content, link} = props;
  return(
    <StyledSNS>
      <div>
        <img src={img} alt={title} width="80px" height="80px"/>
      </div>
      <SNSDetail>
        <SNSTitle>{title}</SNSTitle>
        <p>{link ? <a href={link} target="_blank">바로 가기</a> : content}</p>
      </SNSDetail>
    </StyledSNS>
  );
}

const StyledSNS = styled.div`
  width: 510px;
  height: 210px;
  padding: 20px;
  margin: 0 0 100px 0;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgb(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.bg_con};
`;
const SNSDetail = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const SNSTitle = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
`;

export default SNS;