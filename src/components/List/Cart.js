import React, { useState, useContext, useEffect } from "react";
// import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { ImBell, ImBin2 } from 'react-icons/im';
import { Button, Switch } from 'antd';
import ProductContext from "../Context/ProductContext";
import MainNavigation from "../MainNavigation";
// import { removeProductFromCart } from '../store/actions';
import "./Cart.css";

const CartPage = props => {
  const context = useContext(ProductContext);
  useEffect(() => {
    console.log(context);
  }, []);
  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      {/* <Headline /> */}
      <main className="cart">
        {context.cart.length <= 0 && <p>저장된 알림 리스트가 없어요!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.date}</strong> - {cartItem.productname} 
                {/* ({cartItem.quantity}) */}
              </div>
              <div>
              <Button> 
                {/* done={done} onClick={onChange}>{done && <ImBell />} */}
                알림 설정
              </Button>
                <Button
                  onClick={context.removeProductFromCart.bind(this,cartItem.id)}
                >
                  삭제
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};
export default CartPage;