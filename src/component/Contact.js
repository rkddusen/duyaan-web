import React from "react";
import styled from "styled-components";
import SNS from "./SNS";
import IntersectionObserver from "../IntersectionObserver";

function Contact() {
  return (
    <StyledContact id="contact">
      <Article>
        <ContactTitle>
          <IntersectionObserver>
            <Title>Contact</Title>
          </IntersectionObserver>
        </ContactTitle>
        <IntersectionObserver>
          <ContactContent>
            <SNS
              img="./images/naver_logo.png"
              title="Naver"
              content="Email : k99endus@naver.com"
            ></SNS>
            <SNS
              img="./images/kakaotalk_logo.png"
              title="Kakao"
              link="https://open.kakao.com/o/sjXBWYre"
            ></SNS>
            <SNS
              img="./images/tistory_logo.png"
              title="Tistory"
              link="https://duyaan.tistory.com"
            ></SNS>
            <SNS
              img="./images/github_logo.png"
              title="GitHub"
              link="https://github.com/rkddusen"
            ></SNS>
            <SNS
              img="./images/instagram_logo.png"
              title="Instagram"
              link="https://www.instagram.com/duyeon_0915"
            ></SNS>
          </ContactContent>
        </IntersectionObserver>
      </Article>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  width: 100%;
`;
const Article = styled.div`
  width: 1240px;
  margin: 0 auto;
`;
const ContactTitle = styled.div`
  padding: 120px 0;
`;
const Title = styled.p`
  text-align: center;
  font-size: 40px;
`;
const ContactContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Contact;
