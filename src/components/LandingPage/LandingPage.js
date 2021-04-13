LandingPage
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from "./AlarmListPage/Template";
import ProductList from "./LandingPage/ProductList";
import { AlarmProvider } from './AlarmContext';
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
function LandingPage() {
  return (  
    <div>
      <h1>랜딩페이지</h1>
      <AlarmProvider>
      <GlobalStyle />
      <Template>
        <ProductList />
      </Template>
      </AlarmProvider>
    </div>
    )
}
export default LandingPage;