import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import qs from 'qs';

// import {ProductsDispatch, productsReducer} from '../../contexts/ProductsContext';

import SearchBox from "./SearchBox"
import "../../Navbar.css";
import axios from "axios";

export default function Navbar({ loginHandler, handleLogout, isLogin,
  // setProducts
}){
  const [click, setClick] = useState(false);

  // const history = useHistory();

  const handleClick = () => setClick(!click);

  // const [searchTerm, setSearchTerm] = useState("")
  // const updateSearchTerm = (newSearchTerm) => {
  //   setSearchTerm(newSearchTerm)
  // }

  // const [ productsState, dispatch ] = useReducer(productsReducer, {products: []});

  const updateSearchTerm = (newSearchTerm) => {
    // setSearchTerm(newSearchTerm)
    axios.get(`https://localhost:4000/products/searchProduct?searchTerm=${newSearchTerm}`,
      {headers: {
        "Content-Type": "application/json"
      }})
      .then(response => {
        console.log("검색결과", response)
        // setProducts(response.data.data)
      })  

  }

  return(
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link 
            exact to="/"
            className="nav-logo"
            style={{textDecoration: "none", color: "black"}}>
            NOTI
          </Link>
          <SearchBox updateSearchTerm={updateSearchTerm}/>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
             {isLogin ? (
            <>
              <li className="nav-item">
                <Link exact to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  발매정보리스트
                </Link>
              </li>
              {/* <li>
                <Link 
                to="/cart">Cart ({props.cartItemNumber})
                </Link>
              </li> */}
              <li className="nav-item">
                <Link exact to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  알림리스트
                </Link>
              </li>           
              <li className="nav-item">
                <Link exact to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  회원정보수정
                </Link>
              </li>           
              <li className="nav-item">
                <Link 
                  exact to="/"
                  onClick={handleLogout}
                  activeClassName="active"
                  className="nav-links"
                  onClick={()=>{
                    handleClick();
                    handleLogout();
                  }}
                >
                로그아웃
                </Link>                  
              </li> 
            </>
             ) : (
            <>
              <li className="nav-item">
                <Link exact to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  발매정보리스트
                </Link>
              </li>              
              <li className="nav-item">
                <Link exact to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  로그인
                </Link>
              </li>   
            </>            
            )}          
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
