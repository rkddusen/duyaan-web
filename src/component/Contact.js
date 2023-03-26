import React from "react";
import styled from 'styled-components';
import SNS from './SNS';

function Contact() {
  return (
    <StyledContact id='contact'>
      <Article>
        <ContactTitle>
          <Title>Contact</Title>
        </ContactTitle>
        <ContactContent>
          <SNS></SNS>
          <SNS></SNS>
          <SNS></SNS>
          <SNS></SNS>
          <SNS></SNS>
          <SNS></SNS>
        </ContactContent>
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
