import React from "react";
import styled from 'styled-components';
import SNS from './SNS';

function Contact() {
  return (
    <StyledContact>
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
    </StyledContact>
  );
}

const StyledContact = styled.div`
  width: 100%;
  background-color: #f5f5f5;
`;
const ContactTitle = styled.div`
  padding: 100px 0;
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
