import React, { useState, createContext, useEffect, useReducer } from "react";
import { ChakraProvider } from "@chakra-ui/react"
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
import UploadProdctPage from './components/UploadProductPage/UploadProdctPage';
import LandingPage from "./components/LandingPage/LandingPage";
import AlarmPage from "./components/AlarmPage/AlarmPage";

export const ProductsContext = createContext();
axios.defaults.withCredentials = true;

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
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

  return (
    <Router>
     <ChakraProvider>
      <Navbar 
        loginHandler={loginHandler}
        handleLogout={handleLogout}
        isLogin={isLogin}
        // setProducts={setProducts}
      />
      <Switch>
      {/* <Route exact path="/" component={LandingPage} /> */}
      <Route exact path="/">
      <LandingPage accessToken={accessToken} issueAccessToken={issueAccessToken} />
      </Route>
      {/* <Route exact path="/user/alarmpage" component={AlarmPage} /> */}
      <Route exact path="/user/alarmpage">
        <AlarmPage accessToken={accessToken} issueAccessToken={issueAccessToken} />
      </Route>
        <Route exact path="/login">
          <LoginPage loginHandler={loginHandler} /> 
        </Route>
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/product/upload" component={UploadProdctPage} />
        {/* <Route path="/" exact={true} component={LandingPage} /> */}
        <Route path="/modified">
          <ModifiedPage accessToken={accessToken} issueAccessToken={issueAccessToken} />
        </Route> 
        <Route 
          path="/product/:productId" 
          render={(props) =>  <DetailProductPage accessToken={accessToken} issueAccessToken={issueAccessToken} {...props} />} />
      </Switch>
      </ChakraProvider>
    </Router>
    
  );
}
export default App;