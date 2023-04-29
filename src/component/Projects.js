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
        <ProjectsContent><IntersectionObserver>
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
              style={{ top: "200px", right: "0" }}
              img="./images/Color-me.png"
              title="Color, me"
              explain="Color, me 설명"
              link="https://rkddusen.github.io/Color-me"
              git="https://github.com/rkddusen/Color-me"
            ></Project>
          </ProjectsList></IntersectionObserver><IntersectionObserver>
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
              style={{ top: "200px", right: "0" }}
              img="./images/duyaan-web.png"
              title="Duyaan-Web"
              explain="Duyaan-Web 설명"
              link=""
              git="https://github.com/rkddusen/duyaan-web"
            ></Project>
          </ProjectsList></IntersectionObserver>
        </ProjectsContent>
      </Article>
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  width: 100%;
  background-color: ${props => props.theme.bg_2};
`;
const Article = styled.div`
  width: 1140px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) and (max-width: 1200px){
    width: 964px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 708px;
  }
  @media screen and (max-width: 768px){
    width: calc(100% - 60px);
    margin: 0 30px;
  }
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
  @media screen and (min-width: 768px) and (max-width: 1024px){
    padding-bottom: 140px;
  }
  @media screen and (max-width: 768px){
    padding-bottom: 170px;
  }
`;
const ProjectsList = styled.div`
  @media screen and (min-width: 1024px){
    height: 700px;
    position: relative;
  }
  @media screen and (max-width: 1024px){
  }
  
`;
export default Projects;
