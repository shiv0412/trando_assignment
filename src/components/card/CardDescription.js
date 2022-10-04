import React from "react";
import styled from "styled-components";

const Description = styled.div`
  width: 13vw;
  display: flex;
  padding-top: 5px;
  div:nth-child(1) {
    width: 145px;
    ul {
      list-style-type: none;
      padding: 0;
      font-size: 1vw;
      color: #2c3e50;
    }
    span {
      font-weight: 600;
    }
  }
  div:nth-child(2) {
    width: 35px;
    font-size: 1vw;
    font-weight: 600;
    color: #2c3e50;
    text-align: right;
  }
  @media (max-width: 992px) {
    width: 17vw;
    ul {
      font-size: 1.2vw !important;
    }
    div:nth-child(2) {
      font-size: 1.2vw !important;
    }
  }
  @media (max-width: 778px) {
    width: 22vw;
    ul {
      font-size: 1.6vw !important;
    }
    div:nth-child(2) {
      font-size: 1.6vw !important;
    }
  }
  @media (max-width: 576px) {
    width: 25vw;
    ul {
      font-size: 1.9vw !important;
    }
    div:nth-child(2) {
      font-size: 1.9vw !important;
    }
  }
`;

const CardDescription = (props) => {
  return (
    <>
      <Description>
        <div>
          <ul>
            <li>
              <span>{props.itemDescription.heading}</span>
            </li>
            <li>{props.itemDescription.distance}</li>
            <li>{props.itemDescription.date}</li>
            <li>
              <span>&#x20B9;{props.itemDescription.price}</span>{" "}
              {props.itemDescription.bookingType}
            </li>
          </ul>
        </div>
        <div>
          <span> &#9733; {props.itemDescription.rating}</span>
        </div>
      </Description>
    </>
  );
};

export default CardDescription;
