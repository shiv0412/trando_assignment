import React from "react";
import styled from "styled-components";
import { GiWireframeGlobe } from "react-icons/gi";

const TopMenuContainer = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  button {
    border: none;
    background-color: #fff;
  }
  button:hover {
    color: red;
  }
`;
const MenuHolder = styled.span`
  border: 1.5px solid #eaeded;
  padding: 6px 5px;

  border-radius: 50px;
`;
const Globe = styled(GiWireframeGlobe)`
  font-size: 13px;
  :hover {
    color: red;
  }
`;
const ProfileIcon = styled.span`
  background-color: lightgrey;
  padding: 5px 5px;
  border-radius: 50%;
`;
const HamburgerMenu = styled.span`
  padding: 0px 10px;
`;

const TopMenu = () => {
  return (
    <>
      <TopMenuContainer>
        <button>
          Become a host&nbsp;&nbsp;&nbsp;
          <Globe />
          &nbsp;&nbsp;&nbsp;
        </button>
        <MenuHolder>
          <button>
            <HamburgerMenu>&#9776;</HamburgerMenu>
          </button>
          <button>
            <ProfileIcon>&#128100;</ProfileIcon>
          </button>
        </MenuHolder>
      </TopMenuContainer>
    </>
  );
};

export default TopMenu;
