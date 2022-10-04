import React from "react";
import styled from "styled-components";

import logo from "../../img/logo.png";
import Toggle from "./Toggle";
import TopMenu from "./TopMenu";

const HeaderContainer = styled.div`
  padding: 12px 0px;
  border-bottom: 1.5px solid #eaeded;
`;
const ToggleContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const ToggleContainerSmall = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 25px 0;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
    margin: auto;
  }
`;
const Row = styled.div`
  padding: 0;
  margin: 0;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer className="container-fluid">
        <Container className="container">
          <Row className="row">
            <div className="col-lg-4 col-md-2 col-sm-6 col-4">
              <img src={logo} height="40px" width="120px" alt="logo"></img>
            </div>
            <ToggleContainer className=" col-lg-4 col-md-5">
              <Toggle />
            </ToggleContainer>
            <div className=" col-lg-4 col-md-5 col-sm-6 col-8">
              <TopMenu />
            </div>
            <ToggleContainerSmall className=" col-lg-4 col-md-5">
              <Toggle />
            </ToggleContainerSmall>
          </Row>
        </Container>
      </HeaderContainer>
    </>
  );
};

export default Header;
