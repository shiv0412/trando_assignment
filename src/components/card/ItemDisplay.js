import React from "react";
import styled from "styled-components";

import Card from "./Card";

const ItemShowcase = styled.div`
  padding: 15px 0;
`;
const Row = styled.div`
  padding: 0;
  margin: 0;
`;

const ItemDisplay = () => {
  return (
    <>
      <ItemShowcase className="container">
        <Row className="row">
          <Card />
        </Row>
      </ItemShowcase>
    </>
  );
};

export default ItemDisplay;
