import React from "react";
import styled from 'styled-components';

function Project(props) {
  const { style } = props;
  return (
    <StyledProject style={style}>
      <div>
        <img src='' alt='project img' width="100%" height="300px"/>
      </div>
      <ProjectExplain>
        <ProjectTitle>프로젝트명</ProjectTitle>
        <p>프로젝트 설명</p>
      </ProjectExplain>
    </StyledProject>
  );
}
const StyledProject = styled.div`
  width: 510px;
  height: 660px;
  padding: 20px;
  border: 1px solid black;
  position: absolute;
  display: flex;
  flex-direction: column;
`;
const ProjectExplain = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid black;
  height: 100%;
`;
const ProjectTitle = styled.p`
  font-size: 25px;
  margin-bottom: 10px;
`;

export default Project;
