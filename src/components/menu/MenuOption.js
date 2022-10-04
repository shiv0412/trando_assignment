import React from "react";
import styled from "styled-components";

const MenuOptions = styled.div`
  display: inline-block;
  margin: auto;
  text-align: center;
  span:nth-child(1) {
    color: #566573;
  }
  span:nth-child(3) {
    color: #566573;
    font-size: 12px;
    font-weight: 500;
  }
  :hover {
    border-bottom: 1.5px solid #566573;
    cursor: pointer;
  }
`;

const MenuOption = (props) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <MenuOptions>
          <span>{props.icon}</span>
          <br />
          <span>{props.text}</span>
        </MenuOptions>
      </div>
    </>
  );
};

export default MenuOption;
