import React, { useState, useReducer } from "react";
import ProductContext from "./ProductContext";
import { 
  // shopReducer, 
  ADD_PRODUCT, REMOVE_PRODUCT, ALARM_SETTING, FETCH_PRODUCTS } from "./Reducers";


  function reducer(state, action) {
    // switch (action.type) {
    //   case 'FETCH_PRODUCTS':
    //     return {
    //       users: state.products.concat(action.products)
    //     };
      // default:
      //   return state;
      return state;
  }

const GlobalState = props => {
  
  const [productsState, productsDispatch] = useState(reducer, { products: [] });
  // const updateProducts = (products) => {
  //   setTimeout(() => {
  //     dispatch({ type: FETCH_PRODUCTS, products: products });
  //   }, 0);
  // }
  // const [cart, setCart] = useState([]);
  // const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  // const addProductToCart = product => {
  //   setTimeout(() => {
  //     // setCart(updatedCart);
  //     dispatch({ type: ADD_PRODUCT, product: product });
  //   }, 0);
  // };
  // const alarmSetting = productId => {
  //   setTimeout(() => {
  //     // setCart(updatedCart);
  //     dispatch({ type: ALARM_SETTING, productId: productId });
  //   }, 0);
  // };
  // const removeProductFromCart = productId => {
  //   setTimeout(() => {
  //     // setCart(updatedCart);
  //     dispatch({ type: REMOVE_PRODUCT, productId: productId });
  //   }, 0);
  // };
  return (
    <ProductContext.Provider
      value={productsDispatch}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default GlobalState;