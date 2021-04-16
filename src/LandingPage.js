import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from "./AlarmListPage/Template";
import ProductList from "./LandingPage/ProductList";
import { AlarmProvider } from './AlarmContext';
// import { ProductsProvider } from './AlarmContext';
import SearchBar from './LandingPage/SearchBar';
import Navbar from './components/Navbar/Navbar'
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function LandingPage() {


  // const [searchTerm, setSearchTerm] = useState("")
  
  // const updateSearchTerm = (newSearchTerm) => {
  //   setSearchTerm(newSearchTerm)

  //   axios.get(`https://localhost:4000/searchProduct?searchTerm=${newSearchTerm}`)
  //   .then(response => console.log("검색결과", response))  
  
  // }

  return (  
    <div>
      {/* <h1>랜딩페이지</h1> */}
      {/* <SearchBar/> */}
      {/* <ProductsProvider> */}
      {/* <Navbar updateSearchTerm= {updateSearchTerm}/> */}
      
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
