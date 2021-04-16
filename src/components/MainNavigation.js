import React from "react";
import { NavLink } from "react-router-dom";

import "./MainNavigation.css";

const mainNavigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">발매정보 리스트</NavLink>
        </li>
        <li>
          <NavLink to="/cart">알림 리스트 ({props.cartItemNumber})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
