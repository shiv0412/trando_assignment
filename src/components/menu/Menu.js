import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { BiFilter } from "react-icons/bi";

import MenuOption from "./MenuOption";
import { menuOptions, responsive } from "../../constants";

const OptionsContainer = styled.div`
  position: relative;
`;
const Row = styled.div`
  padding: 0;
  margin: 0;
`;
const MenuContainer = styled.div`
  padding: 15px 0 15px 0;
`;
const Curosal = styled(Carousel)`
  position: unset;
  .react-multiple-carousel__arrow {
    position: absolute;
  }
  .react-multiple-carousel__arrow--left {
    top: calc(-3% + 1px);
    background-color: #cacfd2;
  }
  .react-multiple-carousel__arrow--right {
    right: calc(-3% + -15px);
    top: calc(-3% + 1px);
    background-color: #cacfd2;
  }
  @media (max-width: 776px) {
    .react-multiple-carousel__arrow--left {
      left: calc(-3% + -15px);
      top: calc(-3% + 1px);
      background-color: #cacfd2;
    }
  }
`;
const FilterButton = styled.span`
  border: 1.5px solid #cacfd2 !important;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  right: 23px;
  top: 5px;
  padding: 5px 5%;
  font-size: 1vw;
  font-weight: 600;
  color: #566573;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 776px) {
    display: none;
  }
`;

const Menu = () => {
  const options = menuOptions;
  return (
    <>
      <MenuContainer className="container">
        <Row className="row">
          <OptionsContainer className="col-10">
            <Curosal autoPlay={false} responsive={responsive}>
              {options.map((option) => {
                return (
                  <>
                    <MenuOption icon={option.icon} text={option.text} />
                  </>
                );
              })}
            </Curosal>
          </OptionsContainer>
          <div className="col-2" style={{ position: "relative" }}>
            <FilterButton>
              <BiFilter></BiFilter> Filters
            </FilterButton>
          </div>
        </Row>
      </MenuContainer>
    </>
  );
};

export default Menu;
