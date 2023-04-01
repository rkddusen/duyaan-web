import React from "react";
import styled from "styled-components";
import Project from "./Project";
import IntersectionObserver from "../IntersectionObserver";

function Projects() {
  return (
    <StyledProjects id="projects">
      <Article>
        <ProjectsTitle>
          <IntersectionObserver>
            <Title>Projects</Title>
          </IntersectionObserver>
        </ProjectsTitle>
        <ProjectsContent>
          <ProjectsList>
            <Project
              style={{ top: "0", left: "0" }}
              img="./images/Kuphil_Web.png"
              title="Kuphil Web"
              explain="Kuphil Web 설명"
              link="http://13.124.56.187:8080"
              git=""
            ></Project>
            <Project
              style={{ bottom: "-50px", right: "0" }}
              img="./images/Color-me.png"
              title="Color, me"
              explain="Color, me 설명"
              link="https://rkddusen.github.io/Color-me"
              git="https://github.com/rkddusen/Color-me"
            ></Project>
          </ProjectsList>
          <ProjectsList>
            <Project
              style={{ top: "0", left: "0" }}
              img="./images/todo-app.png"
              title="TODOoO"
              explain="TODOoO 설명"
              link="https://rkddusen.github.io/todo-app"
              git="https://github.com/rkddusen/todo-app"
            ></Project>
            <Project
              style={{ bottom: "-50px", right: "0" }}
              img=""
              title="Duyaan-Web"
              explain="Duyaan-Web 설명"
              link=""
              git="https://github.com/rkddusen/duyaan-web"
            ></Project>
          </ProjectsList>
        </ProjectsContent>
      </Article>
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  width: 100%;
  background-color: #fafafa;
`;
const Article = styled.div`
  width: 1240px;
  margin: 0 auto;
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
  padding-bottom: 200px;
`;
const ProjectsList = styled.div`
  height: 900px;
  position: relative;
`;
export default Projects;
