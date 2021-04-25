import React, { useState } from "react";
import { Button, Link, Image } from "@chakra-ui/react"
import { useHistory } from "react-router-dom";
import "../../Navbar.css";
import Logo from "../../assets/Icon.png"
export default function Navbar({ loginHandler, handleLogout, isLogin, alarmList }){
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return(
        <div className="nav-container">
        
          <Link 
            href="/"
            className="nav-logo"
            style={{textDecoration: "none", color: "black"}}>
            <Image 
            boxSize="48px"
            src={Logo}
            >
            </Image>
          </Link>     
          <ul className={click ? "nav-menu active" : "nav-menu"}>
             {isLogin ? (
            <>
              <li className="nav-item">
                <Link href="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  발매정보리스트
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/user/alarmpage"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  알림리스트
                </Link>
              </li>           
              <li className="nav-item">
                <Link href="/modified"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  회원정보수정
                </Link>
              </li>           
              <li className="nav-item">
                <Link 
                  href="/"
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
                <Link href="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  발매정보리스트
                </Link>
              </li>              
              <li className="nav-item">
                <Link href="/login"
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
  );
}
