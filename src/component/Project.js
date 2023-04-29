import React from "react";
import styled from "styled-components";

function Project(props) {
  const { style, img, title, explain, link, git } = props;
  return (
    <StyledProject style={style}>
        <div>
          <StyledImg src={img} alt={title} />
        </div>
        <ProjectExplain>
          <ProjectTitle>{title}</ProjectTitle>
          <p>{explain}</p>
          <p>
            {link ? (
              <a href={link} target="_blank">
                바로 가기
              </a>
            ) : null}
          </p>
          <p>
            {git ? (
              <a href={git} target="_blank">
                GitHub 링크
              </a>
            ) : null}
          </p>
        </ProjectExplain>
    </StyledProject>
  );
}
const StyledProject = styled.div`
  width: 540px;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${props => props.theme.bg_con};
  border-radius: 20px;
  box-shadow: 0 5px 15px rgb(0, 0, 0, 0.25);
  position: absolute;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1200px){ // 768 ~ 1024 ~ 1200
    width: 450px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    position: unset;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 768px){
    position: unset;
    margin: 0 auto;
    margin-bottom: 30px;
    width: 100%;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 20px;
  opacity: 80%;

`;
const ProjectExplain = styled.div`
  margin-top: 20px;
  padding: 20px;
  height: 100%;
`;
const ProjectTitle = styled.p`
  font-size: 25px;
  margin-bottom: 10px;
`;

export default Project;
