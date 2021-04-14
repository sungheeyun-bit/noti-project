import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from "./AlarmListPage/Template";
import Headline from "./AlarmListPage/Headline";
import AlarmList from "./AlarmListPage/AlarmList";
// import { ProductsProvider } from './AlarmContext';
import { AlarmProvider } from './AlarmContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function AlarmListPage() {
  return (  
    <div>
      <h1>알림 리스트 페이지</h1>
      <AlarmProvider>
      {/* <ProductsProvider> */}
      <GlobalStyle />
      <Template>
        <Headline />
        <AlarmList />
      </Template>
      {/* </ProductsProvider> */}
      </AlarmProvider>
    </div>
    )
}

export default AlarmListPage;
