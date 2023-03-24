import React from 'react';
import styled from 'styled-components';

function Footer(){
  return(
    <StyledFooter>
      <FooterContent>
        <p>COPYRIGHT DUYAAN. ALL RIGHTS RESERVED.</p>
        <p>본 사이트는 개인 포트폴리오 사이트로 제작되어 상업적 목적이 아닙니다. 사용된 일부 이미지 및 폰트 등은 별도의 출처가 있습니다.</p>
      </FooterContent>
    </StyledFooter>
  );
}
const StyledFooter = styled.div`
  width: 100%;
  background-color: #dddddd;
`;
const FooterContent = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 50px 0;
  line-height: 30px;
`;
export default Footer;