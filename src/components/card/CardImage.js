import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { BsFillHeartFill } from "react-icons/bs";

import { responsiveImage } from "../../constants";

const ImageCurouselHolder = styled.div`
  position: relative;
  height: 150px;
  width: 13vw;
  img {
    height: 150px;
    width: 13vw;
  }
  @media (max-width: 992px) {
    width: 17vw;
  }
  img {
    width: 17vw;
  }
  @media (max-width: 778px) {
    width: 22vw;
  }
  img {
    width: 22vw;
  }
  @media (max-width: 576px) {
    width: 25vw;
    height: 100px;
    img {
      width: 25vw;
      height: 100px;
    }
  }
`;
const CustomCurousel = styled(Carousel)`
  border-radius: 10px;
`;
const FavIcon = styled(BsFillHeartFill)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CardImage = (props) => {
  return (
    <>
      <ImageCurouselHolder>
        <CustomCurousel
          autoPlay={false}
          responsive={responsiveImage}
          showDots={true}
          arrows={false}
        >
          {props.itemImages.map((itemImage,index) => {
            return (
              <>
                <img key={index} src={itemImage} alt=""></img>
              </>
            );
          })}
        </CustomCurousel>
        <FavIcon />
      </ImageCurouselHolder>
    </>
  );
};

export default CardImage;
