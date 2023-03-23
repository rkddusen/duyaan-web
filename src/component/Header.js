import React from "react";
import styled from 'styled-components';


const Sun = ({ size = 22, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      position: "absolute",
      left: "3px",
      top: "2px"
    }}
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
);

const Moon = ({ size = 22, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      position: "absolute",
      right: "3px",
      top: "2px",
      display: 'none'
    }}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <div>
          <img height="35px" src="./images/logo.png" />
        </div>
        <NavRight>
          <NavUl>
            <NavLi>About</NavLi>
            <NavLi>Projects</NavLi>
            <NavLi>Contact</NavLi>
          </NavUl>
          <NavDark>
            <DarkToggle>
              <Sun />
              <Moon />
            </DarkToggle>
          </NavDark>
        </NavRight>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
`;

const StyledNav = styled.div`
  width: 1240px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
const NavUl = styled.ul`
  display: flex;
`;
const NavLi = styled.li`
  margin-left: 50px;
  font-size: 23px;
`;
const NavDark = styled.div`
  margin-left: 100px;
`;
const DarkToggle = styled.div`
  width: 60px;
  height: 26px;
  border: 1px solid black;
  border-radius: 20px;
  position: relative;
`;
export default Header;
