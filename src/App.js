import React, { useState, createContext, useEffect } from "react";
import {
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import Navbar from './components/Navbar/Navbar';
import DetailProductPage from './components/DetailProductPage/DetailProductPage';
import ModifiedPage from './components/ModifiedPage/ModifiedPage';
import { initialState } from './assets/state';
import axios from "axios";
import LandingPage from "./LandingPage.js";
import AlarmListPage from './AlarmListPage.js';
import UploadProdctPage from './components/UploadProductPage/UploadProdctPage';


export const ProductsContext = createContext();

axios.defaults.withCredentials = true;

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    
   // const [products, setProducts] = useState([]);
   
  const loginHandler = (data) => {
    setIsLogin(true)
    issueAccessToken(data.data);
  };

  

  const issueAccessToken = (token) => {
   setAccessToken(token);
   console.log("토큰", token)  
  }

  const handleLogout = () => {
    setIsLogin(false);
    setAccessToken("");
  }
  
  // useEffect(() => {
  //   axios.get("https://localhost:4000/products/productList", {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then((res) => {
  //     console.log("제품들", res.data)
  //     setProducts(res.data)
  //   })
  // }, [])
   

  //landingpage
  // const [products, setProducts] = useState([]);


  // useEffect(() => {
  //  searchProducts()

  // }, [])


  // const searchProducts = (newSearchTerm) => {
  //   axios.get("https://localhost:4000/products/",{
  //     headers: {
  //       "Content-Type":"application/json"
  //     }
  //   })
  //   .then(res => {
  //     console.log(res)
  //     setProducts(res.data)
  //   })
  // }

  return (
    <Router>
      <Navbar 
        loginHandler={loginHandler}
        handleLogout={handleLogout}
        isLogin={isLogin}
      />
      <Switch>
        <Route exact path="/login">
          <LoginPage 
            loginHandler={loginHandler}
          /> 
        </Route>
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/product/upload" component={UploadProdctPage} />

        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/alarmList" exact={true} component={AlarmListPage} />
        <Route path="/modified">
          <ModifiedPage accessToken={accessToken} issueAccessToken={issueAccessToken} />
        </Route> 
        {/* <Route exact path="/product/:productId" component={DetailProductPage} /> */}
        <Route path="/product/:productId">
          <DetailProductPage accessToken={accessToken} issueAccessToken={issueAccessToken} />
        </Route> 
      </Switch>
    </Router>
  );
}
export default App;




