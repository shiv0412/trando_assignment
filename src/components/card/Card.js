import React from "react";

import { itemsDetails } from "../../constants";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";

const Card = () => {
  return (
    <>
      {itemsDetails.map((itemData) => {
        return (
          <>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4">
              <CardImage itemImages={itemData.itemImages} />
              <CardDescription itemDescription={itemData} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
