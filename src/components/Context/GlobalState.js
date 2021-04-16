import React, { useState, useReducer } from "react";
import ProductContext from "./ProductContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT, ALARM_SETTING } from "./Reducers";


const GlobalState = props => {
  const products = [
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
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  const addProductToCart = product => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 0);
  };
  const alarmSetting = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ALARM_SETTING, productId: productId });
    }, 0);
  };
  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 0);
  };
  return (
    <ProductContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        alarmSetting: alarmSetting
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default GlobalState;