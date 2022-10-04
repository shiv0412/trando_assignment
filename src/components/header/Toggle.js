import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const ToggleContainer = styled.div`
  padding: 8px 10px;
  border: 1.5px solid #eaeded;
  border-radius: 50px;
  width: 335px;
  font-size: 14px;
  box-shadow: 1px 1px 15px 1px #f0f3f4;
  button {
    border: none;
    background-color: #fff;
    border-right: 1.5px solid #eaeded;
    padding: 0px 15px;
  }
  button:hover {
    color: red;
    cursor: pointer;
  }
  input {
    border: none;
    outline: none;
    padding: 0 10px 0 15px;
    width: 105px;
  }
`;
const SearchButton = styled.div`
  position: relative;
`;
const Search = styled(AiOutlineSearch)`
  background-color: red;
  border-radius: 50%;
  padding: 5px 5px;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  position: absolute;
  top: -24px;
  right: 0;
  :hover {
    background-color: pink;
    cursor: pointer;
  }
`;

const Toggle = () => {
  return (
    <>
      <ToggleContainer>
        <button>Anywhere</button>
        <button>Any week</button>
        <input type="text" placeholder="Add guests" />
        <SearchButton>
          <Search />
        </SearchButton>
      </ToggleContainer>
    </>
  );
};

export default Toggle;
