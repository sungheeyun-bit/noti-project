import React, { useState, useEffect } from "react";
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
import UploadProdctPage from './components/UploadProductPage/UploadProdctPage';
import LandingPage from "./components/LandingPage/LandingPage";
import AlarmPage from "./components/AlarmPage/AlarmPage";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  // const [accessToken, setAccessToken] = useState("");
  const loginHandler = (data) => {
    setIsLogin(true)
    // issueAccessToken(data.data);
  };
  // const issueAccessToken = (token) => {
  //  setAccessToken(token);
  //  console.log("토큰", token)  
  // }
  const handleLogout = () => {
    setIsLogin(false);
    // setAccessToken("");
    window.localStorage.removeItem("userToken")
  }

  const accessToken = window.localStorage.getItem("userToken")
  
  const [productList, setProductList] = useState([])

  useEffect(() => {
    axios
      .get("https://projectb1.com:4000/products/filterProductList")
        .then(response => {
         console.log("제품 정보", response.data)
          if(response.data.data) {
            setProductList(response.data.data)
          } else {
            alert(" 상품들을 가져오는데 실패 했습니다.")
          }
        })

      if(accessToken){
        setIsLogin(true)
      }
    }, [])


    const addToCart = (productId) => { 
    const goToList = productList.filter((el) => el._id === productId)[0]
    console.log("고투", goToList)
    const body = goToList
    axios
      .post('https://projectb1.com:4000/products/addMyLIst',
      body,
      {
        headers: { "Content-Type": "application/json" , "okCome": accessToken}
      })
        .then((response) => {
          if(response.status === 201){
            alert("저장되었습니다")
          }
      })
      .catch((err) => {
        if(err.response.status === 400){
          alert("이미 리스트에 저장된 상품입니다")
        } else if(err.response.status === 404) {
          alert("로그인이 필요합니다.")
        }
      })
  }

  const updateSearchTerm = (newSearchTerm) => {
    axios
      .get(`https://projectb1.com:4000/products/searchProduct?searchTerm=${newSearchTerm}`,
        {
        headers: {"Content-Type": "application/json"}
        })
        .then(response => {
          setProductList(response.data.data)
    })  
  }

  
return (  
    <Router>
     <ChakraProvider>
      <Navbar 
        loginHandler={loginHandler}
        handleLogout={handleLogout}
        isLogin={isLogin}      
      />
      <Switch>
      <Route exact path="/">
      <LandingPage 
        productList={productList}
        addToCart={addToCart}
        updateSearchTerm={updateSearchTerm}
        />
      </Route>
      <Route exact path="/user/alarmpage">
        <AlarmPage/>
      </Route>
        <Route exact path="/login">
          <LoginPage loginHandler={loginHandler} /> 
        </Route>
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/product/upload" component={UploadProdctPage} />
        <Route path="/modified">
          <ModifiedPage/>
        </Route> 
        <Route 
          path="/product/:productId" 
          render={(props) =>  <DetailProductPage {...props} />} />
      </Switch>
      </ChakraProvider>
    </Router>    
  );
}
export default App;