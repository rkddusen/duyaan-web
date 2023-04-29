import React from "react";
import styled from "styled-components";

const Link = ({ size = 18 }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </StyledSvg>
);
const StyledSvg = styled.svg`
  margin-left: 3px;
  stroke: ${props => props.theme.color};
`;

function Project(props) {
  const { style, img, title, explain, link, git } = props;
  return (
    <StyledProject style={style}>
      <div>
        <StyledImg src={img} alt={title} />
      </div>
      <ProjectExplain>
        <ProjectTitle>
          {title}
          {link ? (
            <a href={link} target="_blank">
              <Link />
            </a>
          ) : null}
          {git ? (
            <a href={git} target="_blank">
              <GitLogo />
            </a>
          ) : null}
        </ProjectTitle>
        <p>{explain}</p>
        <p>
          
        </p>
      </ProjectExplain>
    </StyledProject>
  );
}
const StyledProject = styled.div`
  width: 540px;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => props.theme.bg_con};
  border-radius: 20px;
  box-shadow: 0 5px 15px rgb(0, 0, 0, 0.25);
  position: absolute;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    // 768 ~ 1024 ~ 1200
    width: 450px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    position: unset;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 768px) {
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
const ProjectTitle = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;
const GitLogo = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-left: 3px;
  background-image: url(${props => props.theme.git});
  background-size: cover;
  background-position: center;
`;

export default Project;
