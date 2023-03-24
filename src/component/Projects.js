import React from "react";
import styled from 'styled-components';
import Project from './Project';

function Projects() {
  return (
    <StyledProjects id='projects'>
      <ProjectsTitle>
        <Title>Projects</Title>
      </ProjectsTitle>
      <ProjectsContent>
        <ProjectsList>
          <Project style={{top: "0", left: "0"}}></Project>
          <Project style={{bottom: "0", right: "0"}}></Project>
        </ProjectsList>
        <ProjectsList>
          <Project style={{top: "0", left: "0"}}></Project>
          <Project style={{bottom: "0", right: "0"}}></Project>
        </ProjectsList>
      </ProjectsContent>
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  width: 100%;
  background-color: #f1f1f1;
`;
const ProjectsTitle = styled.div`
  padding: 120px 0;
`;
const Title = styled.p`
  text-align: center;
  font-size: 40px;
`;
const ProjectsContent = styled.div`
  width: 100%;
  padding-bottom: 100px;
`;
const ProjectsList = styled.div`
  height: 1000px;
  position: relative;
`;
export default Projects;
