import React from "react";
import styled from "styled-components";
import IntersectionObserver from "../IntersectionObserver";

export function Profile(props) {
  const { title, content } = props;
  return (
    <>
      <PTitle>{title}</PTitle>
      {content}
    </>
  );
}
const PTitle = styled.span`
  min-width: 80px;
`;

export function Career(props) {
  const { date, text } = props;
  return (
    <>
      <Date>{date}</Date>
      {text}
    </>
  );
}
const Date = styled.span`
  min-width: 150px;
`;

export function Skills(props) {
  const { subject, value } = props;
  return (
    <>
      <Subject>{subject}</Subject>
      <StyledProgress value={value} max="100" />
    </>
  );
}
const Subject = styled.span`
  min-width: 100px;
`;
const StyledProgress = styled.progress`
  appearance: none;
  width: 350px;
  margin: 5px;

  &::-webkit-progress-bar {
    background: #f0f0f0;
    border-radius: 5px;
    box-shadow: inset 3px 3px 10px #ccc;
  }
  &::-webkit-progress-value {
    border-radius: 5px;
    background: -webkit-linear-gradient(to right, #888888, #333333);
    background: linear-gradient(to right, #888888, #333333);
  }
  
  @media screen and (min-width: 1024px) and (max-width: 1200px){
    width: 300px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 250px;
  }
  @media screen and (max-width: 768px){
    width: 250px;
  }
`;

function About() {
  return (
    <StyledAbout id="about">
      <Article>
        <AboutTitle>
          <IntersectionObserver>
            <Title>About</Title>
          </IntersectionObserver>
        </AboutTitle>
        <AboutContent>
          <div>
            <IntersectionObserver>
              <OneSentence>'Artistic Developer'</OneSentence>
            </IntersectionObserver>
          </div>
          <IntersectionObserver>
            <Box>
              <BoxImg
                src="./images/profile.jpeg"
                alt="profile 이미지"
              />
              <BoxExplain>
                <Boxtitle>Profile</Boxtitle>
                <BoxDetail><Profile title="이름" content="강두연"></Profile></BoxDetail>
                <BoxDetail><Profile title="성별" content="남자"></Profile></BoxDetail>
                <BoxDetail><Profile title="생년월일" content="1999.06.30"></Profile></BoxDetail>
                <BoxDetail><Profile title="학력" content="건국대학교 재학 중"></Profile></BoxDetail>
                <BoxDetail><Profile title="주소" content="경기도 성남시 분당구"></Profile></BoxDetail>
                <BoxDetail><Profile title="좌우명" content=""></Profile></BoxDetail>
              </BoxExplain>
            </Box>
          </IntersectionObserver>
          <IntersectionObserver>
            <Box><BoxImg
                src="./images/career.png"
                alt="career 이미지"
              />
              <BoxExplain>
                <Boxtitle>Career</Boxtitle>
                <BoxDetail>
                  <Career
                    date="2018.03"
                    text="건국대학교 소프트웨어학과 입학"
                  />
                </BoxDetail>
                <BoxDetail>
                  <Career
                    date="2019.03 - 2020.02"
                    text="건국대학교 아마추어 오케스트라 동아리 16기 부회장"
                  />
                </BoxDetail>
                <BoxDetail>
                  <Career date="2019.07 - 2019.12" text="2019년 sw활동 장학1" />
                </BoxDetail>
                <BoxDetail>
                  <Career date="2020.05 - 2021.11" text="육군 복무" />
                </BoxDetail>
                <BoxDetail>
                  <Career date="2022.03 - 2022.12" text="2022년 sw활동 장학2" />
                </BoxDetail>
              </BoxExplain>
              
            </Box>
          </IntersectionObserver>
          <IntersectionObserver>
            <Box>
              <BoxImg
                src="./images/skills.png"
                alt="skills 이미지"
              />
              <BoxExplain>
                <Boxtitle>Skills</Boxtitle>
                <BoxDetail>
                  <Skills subject="Html, CSS" value={80} />
                </BoxDetail>
                <BoxDetail>
                  <Skills subject="JavaScript" value={80} />
                </BoxDetail>
                <BoxDetail>
                  <Skills subject="React" value={70} />
                </BoxDetail>
                <BoxDetail>
                  <Skills subject="NodeJS" value={70} />
                </BoxDetail>
                <BoxDetail>
                  <Skills subject="Java" value={50} />
                </BoxDetail>
                <BoxDetail>
                  <Skills subject="Python" value={50} />
                </BoxDetail>
                <BoxDetail>
                  <Skills subject="MySql" value={80} />
                </BoxDetail>
              </BoxExplain>
            </Box>
          </IntersectionObserver>
        </AboutContent>
      </Article>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  width: 100%;
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
const AboutTitle = styled.div`
  padding: 120px 0;
`;
const Title = styled.p`
  text-align: center;
  font-size: 40px;
`;
const AboutContent = styled.div`
  width: 100%;
`;
const OneSentence = styled.div`
  font-size: 30px;
`;
const Box = styled.div`
  margin: 50px 0 100px 0;
  display: flex;
  justify-content: start;

  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;
const BoxImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgb(0, 0, 0, 0.25);
  background-color: ${props => props.theme.bg_con};
  margin-right: 60px;

  @media screen and (min-width: 1024px) and (max-width: 1200px){
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 1024px){
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 768px){
    margin-left: 0;
    margin-right: 0;
  }
`;
const BoxExplain = styled.div`
  padding: 20px;
  @media screen and (max-width: 768px){
    text-align: center;
  }
`;
const Boxtitle = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;
const BoxDetail = styled.p`
  margin: 10px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px){
    flex-direction: column;
    margin: 20px 0;
  }
`;

export default About;
