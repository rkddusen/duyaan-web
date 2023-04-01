import React from "react";
import styled from "styled-components";
import IntersectionObserver from "../IntersectionObserver";

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
  width: 300px;
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
            <Box justify="start">
              <BoxImg
                src="./images/profile.jpeg"
                alt="profile 이미지"
                width="300px"
                height="300px"
                style={{ marginRight: "60px" }}
              />
              <BoxExplain>
                <Boxtitle>Profile</Boxtitle>
                <BoxDetail>이름 : 강두연</BoxDetail>
                <BoxDetail>성별 : 남자</BoxDetail>
                <BoxDetail>생년월일 : 1999.06.30</BoxDetail>
                <BoxDetail>학력 : 건국대학교 재학 중</BoxDetail>
                <BoxDetail>주소 : 경기도 성남시 분당구</BoxDetail>
                <BoxDetail>좌우명 : </BoxDetail>
              </BoxExplain>
            </Box>
          </IntersectionObserver>
          <IntersectionObserver>
            <Box justify="end">
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
              <BoxImg
                src="./images/career.png"
                alt="career 이미지"
                width="300px"
                height="300px"
                style={{ marginLeft: "60px" }}
              />
            </Box>
          </IntersectionObserver>
          <IntersectionObserver>
            <Box justify="start">
              <BoxImg
                src="./images/skills.png"
                alt="skills 이미지"
                width="300px"
                height="300px"
                style={{ marginRight: "60px" }}
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
  width: 1240px;
  margin: 0 auto;
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
  justify-content: ${(props) => props.justify};
`;
const BoxImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgb(0, 0, 0, 0.25);
`;
const BoxExplain = styled.div`
  padding: 20px;
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
`;

export default About;
