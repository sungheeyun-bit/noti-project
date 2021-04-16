import React, { useState, useContext, useEffect } from "react";
// import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { ImBell, ImBin2 } from 'react-icons/im';
import { Button, Switch } from 'antd';
import ProductContext from "../Context/ProductContext";
import MainNavigation from "../components/MainNavigation";
import Tooltip from "../LandingPage/Tooltip";
import "./Cart.css";

const CartPage = props => {
  const context = useContext(ProductContext);

  useEffect(() => {
    console.log(context);
  }, []);

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <h1>3일뒤</h1>
      <h2>나이키 조던 1 발매 됩니다.</h2>
      <span>알림 설정 0개 완료</span>
      {/* <span>알림 설정 {doneTasks.length}개 완료</span> */}
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
              <Tooltip>
              <Switch
              onClick={context.alarmSetting.bind(this,cartItem.done)}
              >
                알림 설정
              </Switch>
              </Tooltip>
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
