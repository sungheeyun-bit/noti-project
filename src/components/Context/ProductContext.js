import React from "react";
export default React.createContext({
  products: [
    {
      id: 1,
      img: "../../IMG/조던1.jpeg",
      date: '04월 30일 발매',
      productname: "조던1",
      done: false
    },
    {
      id: 2,
      img: "../../IMG/조던1.jpeg",
      date: '05월 30일 발매',
      productname: "조던1",
      done: false
    },
    {
      id: 3,
      img: "../../IMG/조던1.jpeg",
      date: '06월 30일 발매',
      productname: "조던1",
      done: false
    },
    {
      id: 4,
      img: "../../IMG/조던1.jpeg",
      date: '07월 28일 발매',
      productname: "조던1",
      done: false
    }
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  alarmSetting: productId => {}
});