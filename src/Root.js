import React from 'react';
import { Route, Link } from 'react-router-dom';
import LandingPage from "./LandingPage.js";
import AlarmListPage from './AlarmListPage.js';
import DetailPage from './DetailPage';
import Test from './Test';


function Root() {
  return (  
    <div>
      <ul>
        <li>
          <Link to="/">랜딩 페이지</Link>
        </li>
        <li>
          <Link to="/AlarmListPage">알림 리스트</Link>
        </li>
        <li>
          <Link to="/DetailPage">상세 정보</Link>
        </li>
        <li>
          <Link to="/Test">테스트 페이지 입니다.</Link>
        </li>
      </ul>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/AlarmListPage" exact={true} component={AlarmListPage} />
      <Route path="/DetailPage" exact={true} component={DetailPage} />
      <Route path="/Test" exact={true} component={Test} />
    </div>
    
  
    )
}

export default Root;
