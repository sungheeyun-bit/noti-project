import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from "./AlarmListPage/Template";
import ProductList from "./LandingPage/ProductList";
import { AlarmProvider } from './AlarmContext';
// import { ProductsProvider } from './AlarmContext';
import SearchBar from './LandingPage/SearchBar';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function LandingPage() {
  return (  
    <div>
      {/* <h1>랜딩페이지</h1> */}
      {/* <SearchBar/> */}
      {/* <ProductsProvider> */}
      <AlarmProvider>
      <GlobalStyle />
      <Template>
        <ProductList />
      </Template>
      </AlarmProvider>
      {/* </ProductsProvider> */}
      
    </div>
    
  
    )
}

export default LandingPage;
