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

  const initialState = {
    products: {
      loading: false,
      data: null,
      error: null
    },
    products: {
      loading: false,
      data: null,
      error: null
    }
  };

    // 로딩중일 때 바뀔 상태 객체
  const loadingState = {
    loading: true,
    data: null,
    error: null
  };

  // 성공했을 때의 상태 만들어주는 함수
  const success = data => ({
    loading: false,
    data,
    error: null
  });

  // 실패했을 때의 상태 만들어주는 함수
  const error = error => ({
    loading: false,
    data: null,
    error: error
  });

  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
      dispatch({ type: ADD_PRODUCT, product: product });
  };

  const alarmSetting = productId => {
      dispatch({ type: ALARM_SETTING, productId: productId });
  };

  const removeProductFromCart = productId => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
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
