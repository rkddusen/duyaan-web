import React from 'react';
import styled from 'styled-components';

function SNS(props){
  const { img, title, content, link} = props;
  return(
    <StyledSNS>
      <div>
        <SNSImg src={img} alt={title}/>
      </div>
      <SNSDetail>
        <SNSTitle>{title}</SNSTitle>
        <p>{link ? <a href={link} target="_blank">바로 가기</a> : content}</p>
      </SNSDetail>
    </StyledSNS>
  );
}

const StyledSNS = styled.div`
  width: 480px;
  height: 180px;
  padding: 20px;
  margin-top: 100px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgb(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.bg_con};

  @media screen and (min-width: 1024px) and (max-width: 1200px){
    width: 400px;
    height: 160px;
    margin-top: 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 300px;
    height: 140px;
    margin-top: 60px;
  }
`;

const SNSImg = styled.img`
  width: 80px;
  height: 80px;
  
  
  @media screen and (min-width: 1024px) and (max-width: 1200px){
    width: 70px;
    height: 70px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 50px;
    height: 50px;
  }
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