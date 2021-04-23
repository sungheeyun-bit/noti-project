import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../Navbar.css";

export default function Navbar({ loginHandler, handleLogout, isLogin, alarmList }){
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
              <li className="nav-item">
                <Link exact to="/user/alarmpage"
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



// import React, {useState } from "react"
// import { Link } from "react-router-dom"
// import { Box, Flex, Text, Button, Stack, CloseIcon } from "@chakra-ui/react"
// import { MdMenu } from "react-icons/md"

// const MenuItems = (props) => {
//   const { loginHandler, handleLogout, children, isLast, to = "/", ...rest } = props
//   return (
//     <Text
//       mb={{ base: isLast ? 0 : 8, sm: 0 }}
//       mr={{ base: 0, sm: isLast ? 0 : 8 }}
//       display="block"
//       {...rest}
//     >
//       <Link to={to}>{children}</Link>
//     </Text>
//   )
// }

// const Navbar = (props) => {

//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const [show, setShow] = useState(false)
//   const toggleMenu = () => setShow(!show)

//   return (
//     <Flex
//       as="nav"
//       align="center"
//       justify="space-between"
//       wrap="wrap"
//       w="100%"
//       mb={8}
//       p={8}
//       bg={["primary.500", "primary.500", "transparent", "transparent"]}
//       color={["white", "white", "primary.700", "primary.700"]}
//       {...props}
//     >
//       <Flex align="center">
//         NOTI
//       </Flex>

//       <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
//         {show ? <CloseIcon /> : <MdMenu />}
//       </Box>

//       <Box
//         display={{ base: show ? "block" : "none", md: "block" }}
//         flexBasis={{ base: "100%", md: "auto" }}
//       >
//         <Flex
//           align={["center", "center", "center", "center"]}
//           justify={["center", "space-between", "flex-end", "flex-end"]}
//           direction={["column", "row", "row", "row"]}
//           pt={[4, 4, 0, 0]}
//         >
//           <MenuItems to="/">발매정보리스트</MenuItems>
//           <MenuItems to="/user/alarmpage">알림 리스트 </MenuItems>
//           <MenuItems to="/">회원정보수정 </MenuItems>
//           <MenuItems 
//           to="/"
//           onClick={()=>{
//           handleClick();
//           // handleLogout();
//           }}
//           >로그아웃 </MenuItems>
//           <MenuItems to="/signup" isLast>
//             <Button
//               size="sm"
//               rounded="md"
//               color={["primary.500", "primary.500", "white", "white"]}
//               bg={["white", "white", "primary.500", "primary.500"]}
//               _hover={{
//                 bg: [
//                   "primary.100",
//                   "primary.100",
//                   "primary.600",
//                   "primary.600",
//                 ],
//               }}
//             >
//               Create Account
//             </Button>
//           </MenuItems>
//         </Flex>
//       </Box>
//     </Flex>
//   )
// }

// export default Navbar
