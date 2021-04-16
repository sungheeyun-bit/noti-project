import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from "./AlarmListPage/Template";
import Headline from "./AlarmListPage/Headline";
import AlarmList from "./AlarmListPage/AlarmList";
import Cart from "./List/Cart"
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
      <AlarmProvider>
      {/* <ProductsProvider> */}
      <GlobalStyle />
      <Template>
        <Headline />
        <AlarmList />
        <Cart />
      </Template>
      {/* </ProductsProvider> */}
      </AlarmProvider>
    </div>
    )
}

export default AlarmListPage;
