import imgOne from "./img/imgOne.jpg";
import imgTwo from "./img/imgTwo.jpg";
import imgThree from "./img/imgThree.jpg";
import imgFour from "./img/imgFour.jpg";
import imgFive from "./img/imgFive.jpg";
import {
  GiMushroomGills,
  GiSydneyOperaHouse,
  GiBirdHouse,
  GiLaserSparks,
  GiHorizonRoad,
  GiHomeGarage,
  GiFamilyHouse,
  GiCaravan,
} from "react-icons/gi";

export const menuOptions = [
  {
    icon: <GiMushroomGills />,
    text: "OMG",
  },
  {
    icon: <GiLaserSparks />,
    text: "National parks",
  },
  {
    icon: <GiHomeGarage />,
    text: "Cabins",
  },
  {
    icon: <GiSydneyOperaHouse />,
    text: "Islands",
  },
  {
    icon: <GiFamilyHouse />,
    text: "Design",
  },
  {
    icon: <GiHorizonRoad />,
    text: "Country side",
  },
  {
    icon: <GiBirdHouse />,
    text: "Domes",
  },
  {
    icon: <GiMushroomGills />,
    text: "OMG",
  },
  {
    icon: <GiLaserSparks />,
    text: "National parks",
  },
  {
    icon: <GiHomeGarage />,
    text: "Cabins",
  },
  {
    icon: <GiHorizonRoad />,
    text: "Country side",
  },
  {
    icon: <GiBirdHouse />,
    text: "Domes",
  },
  {
    icon: <GiSydneyOperaHouse />,
    text: "Islands",
  },
  {
    icon: <GiFamilyHouse />,
    text: "Design",
  },
  {
    icon: <GiCaravan />,
    text: "Camper van",
  },
  {
    icon: <GiHomeGarage />,
    text: "Cabins",
  },
  {
    icon: <GiHorizonRoad />,
    text: "Country side",
  },
];

export const itemsDetails = [
  {
    heading: "New west cost, Ireland",
    distance: "2,190 kilometers",
    date: "4-5 Oct",
    price: "8,000",
    bookingType: "night",
    rating: "4.2",
    itemImages: [imgOne, imgTwo, imgThree, imgFour, imgFive],
  },
  {
    heading: "Read house, Bellandur",
    distance: "1,290 kilometers",
    date: "6-7 Oct",
    price: "5,000",
    bookingType: "night",
    rating: "4.6",
    itemImages: [imgTwo, imgThree, imgFour, imgFive, imgOne],
  },
  {
    heading: "Myfest house, Delhi",
    distance: "1,190 kilometers",
    date: "4-9 Oct",
    price: "10,000",
    bookingType: "night",
    rating: "5.0",
    itemImages: [imgThree, imgFour, imgFive, imgOne, imgTwo],
  },
  {
    heading: "Batla events, Assam",
    distance: "3,190 kilometers",
    date: "4-10 Dec",
    price: "7,500",
    bookingType: "night",
    rating: "4.1",
    itemImages: [imgFour, imgFive, imgOne, imgTwo, imgThree],
  },
  {
    heading: "Crystal world, Nagpur",
    distance: "2,125 kilometers",
    date: "6-9 Oct",
    price: "8,050",
    bookingType: "night",
    rating: "3.9",
    itemImages: [imgFive, imgOne, imgTwo, imgThree, imgFour],
  },
  {
    heading: "Playall points, Mumbai",
    distance: "1,180 kilometers",
    date: "8-9 Oct",
    price: "5,100",
    bookingType: "night",
    rating: "4.4",
    itemImages: [imgOne, imgTwo, imgThree, imgFour, imgFive],
  },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 13,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 11,
  },
  largeTablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 767, min: 464 },
    items: 8,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
  },
};

export const responsiveImage = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  largeTablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
