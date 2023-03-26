import React from "react";
import styled from 'styled-components';

function Project(props) {
  const { style, img, title, explain, link, git } = props;
  return (
    <StyledProject style={style}>
      <div>
        <StyledImg src={img} alt={title} width="100%" height="300px"/>
      </div>
      <ProjectExplain>
        <ProjectTitle>{title}</ProjectTitle>
        <p>{explain}</p>
        <p>{link ? <a href={link} target="_blank">페이지 링크</a> : null}</p>
        <p>{git ? <a href={git} target="_blank">GitHub 링크</a> : null}</p>
      </ProjectExplain>
    </StyledProject>
  );
}
const StyledProject = styled.div`
  width: 510px;
  height: 660px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgb(0,0,0,0.25);
  position: absolute;
  display: flex;
  flex-direction: column;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 300px;
  border: 1px solid #dddddd;
  border-radius: 20px;
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
