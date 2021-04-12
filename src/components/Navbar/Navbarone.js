// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import "../../Navbar.css"

// export default function Navbar({ isLogin, loginHandler, handleLogout }){
//   const [click, setClick] = useState(false);

//   const history = useHistory();
//   const handleClick = () => setClick(!click);
 
 
//   return(
//     <>
//        <nav className="navbar">
//         {/* <div className="nav-container"> */}
//           <Link exact to="/" className="nav-logo">
//             NOTI
//           </Link> 
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             {isLogin ? (
//               <>
//                 <li className="nav-item">
//                   <Link 
//                     exact to="/"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={handleClick}
//                   >
//                   발매정보리스트
//                   </Link>                  
//                 </li>
//                 <li className="nav-item">
//                   <Link 
//                     exact to="/"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={handleClick}
//                   >
//                   알림리스트
//                   </Link>                  
//                 </li>        
//                 <li className="nav-item">
//                   <Link 
//                     exact to="/"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={handleClick}
//                   >
//                   회원정보수정
//                   </Link>                  
//                 </li> 
//                 <li className="nav-item">
//                   <Link 
//                     exact to="/"
//                     onClick={handleLogout}
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={()=>{
//                       handleClick();
//                       handleLogout();
//                     }}
//                   >
//                   로그아웃
//                   </Link>                  
//                 </li>                                
//               </>
//             ) : (
//               <>
//               <li className="nav-item">
//                 <Link exact to="/"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={handleClick}
//                 >
//                   발매정보리스트
//                 </Link>
//               </li>              
//               <li className="nav-item">
//                 <Link exact to="/login"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={handleClick}
//                 >
//                   로그인
//                 </Link>
//               </li>
//             </>
//             )}

//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>

//           {/* <form>
//             <input 
//             type="search" 
//             className="search-box" 
//             placeholder="Search"
//             required
//             />
//             <button type="submit" className="fas fa-search"></button>
//           </form> */}
//         {/* </div> */}
//       </nav>
//     </>
//   )
// }




// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import "../../Navbar.css"

// export default function Navbar({ isLogin, loginHandler, handleLogout }){
//   const [click, setClick] = useState(false);

//   const history = useHistory();
//   const handleClick = () => setClick(!click);
 
 
//   return(
//     <>
//        <div className="navbar">
//           <Link exact to="/" className="nav-logo">
//             NOTI
//           </Link> 
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             {isLogin ? (
//               <>
//                 <li className="nav-item">
//                   <Link exact to="/"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={handleClick}
//                   >
//                   발매정보리스트
//                   </Link>                  
//                 </li>
        
                 
//               </>
//             ) : (
//               <>
//               <li className="nav-item">
//                 <Link exact to="/"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={handleClick}
//                 >
//                   발매정보리스트
//                 </Link>
//               </li>              
//               <li className="nav-item">
//                 <Link exact to="/login"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={handleClick}
//                 >
//                   로그인
//                 </Link>
//               </li>
//             </>
//             )}

//           </ul>

//           <form>
//             <input 
//             type="search" 
//             className="search-box" 
//             placeholder="Search"
//             required
//             />
//             <button type="submit" className="fas fa-search"></button>
//           </form>
//         </div>
//     </>
//   )
// }

// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import "../../Navbar.css"

// export default function Navbar({ isLogin, loginHandler, handleLogout }){
//   const [click, setClick] = useState(false);

//   const history = useHistory();
//   const handleClick = () => setClick(!click);
 
 
//   return(
//     <nav>
//       <div className="menu-icon">
//         <span className="fas fa-bars"></span>
//       </div>
//        <div className="navbar">
//           <Link exact to="/" className="nav-logo">
//             NOTI
//           </Link> 
//           <div className="nav-items">
//             {isLogin ? (
//               <>
//                 <li>
//                   <Link exact to="/"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={handleClick}
//                   >
//                   발매정보리스트
//                   </Link>                  
//                 </li>
        
                 
//               </>
//             ) : (
//               <>
//               <li>
//                 <Link exact to="/"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={handleClick}
//                 >
//                   발매정보리스트
//                 </Link>
//               </li>              
//               <li>
//                 <Link exact to="/login"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={handleClick}
//                 >
//                   로그인
//                 </Link>
//               </li>
//             </>
//             )}

//           </div>
//       <div className="search-icon"><span className="fas fa-search"></span></div>
//             <div className="cancel-icon"><span className="fas fa-times"></span></div>

//           <form>
//             <input 
//             type="search" 
//             className="search-box" 
//             placeholder="Search"
//             required
//             />
//             <button type="submit" className="fas fa-search"></button>
//           </form>
//         </div>
//     </nav>
//   )
// }



// 여기가 진짜
// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import "../../Navbar.css"

// export default function Navbar({ isLogin, loginHandler, handleLogout }){
//   const [click, setClick] = useState(false);

//   const history = useHistory();
//   const handleClick = () => setClick(!click);
 
 
//   return(
//   <>
//     <nav className="navbar">
//       <div className="nav-container">
//       <div className="nav-logo">
//         <Link 
//           exact to="/" 
//           style={{textDecoration: "none", color: "black"}}>NOTI</Link> 
//         </div>

//       <ul className="nav-menu">
//         <li className="nav-item">
//           <Link 
//             exact to="/"
//             activeClassName="active"
//             className="nav-links"
//             onClick={handleClick}>발매정보리스트
//             </Link>                  
//         </li>
//         <li className="nav-item">
//           <Link 
//             exact to="/"
//             activeClassName="active"
//             className="nav-links"
//             onClick={handleClick}>알림리스트
//             </Link>                  
//         </li>        
//         <li className="nav-item">
//           <Link 
//             exact to="/"
//             activeClassName="active"
//             className="nav-links"
//             onClick={handleClick}>회원정보수정
//           </Link>                  
//         </li> 
//         <li className="nav-item">
//           <Link 
//             exact to="/"
//             onClick={handleLogout}
//             activeClassName="active"
//             className="nav-links"
//             onClick={()=>{
//               handleClick();
//               handleLogout();
//             }}>로그아웃
//           </Link>                  
//         </li>                 
//       </ul>


          








          /* <ul className={click ? "nav-menu active" : "nav-menu"}>
            {isLogin ? (
              <>
                <li className="nav-item">
                  <Link 
                    exact to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                  발매정보리스트
                  </Link>                  
                </li>
                <li className="nav-item">
                  <Link 
                    exact to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                  알림리스트
                  </Link>                  
                </li>        
                <li className="nav-item">
                  <Link 
                    exact to="/"
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
          </div> */

          /* <form>
            <input 
            type="search" 
            className="search-box" 
            placeholder="Search"
            required
            />
            <button type="submit" className="fas fa-search"></button>
          </form> */
//         </div>
//       </nav>
//     </>
//   )
// }
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../Navbar.css"

export default function Navbarone({ isLogin, loginHandler, handleLogout }){
  const [click, setClick] = useState(false);

  const history = useHistory();
  const handleClick = () => setClick(!click);
 
 
  return(
    <nav className="nav-bar">
      <div className="nav-wrapper">
        <div className="logo">
          
          <Link 
          exact to="/"
          style={{textDecoration: "none", color: "black"}}>
          NOTI</Link> 
          

        </div>
        <div className="list-wrapper">
          <div className="menu-icon"><span className="fas fa-bars"></span></div>
          <div className="cancel-icon"><span className="fas fa-times"></span></div>
        <ul>
          {isLogin ? (
          <>
          <li className="nav-item">
            <Link 
              exact to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
            발매정보리스트
            </Link>                  
          </li>
          <li className="nav-item">
            <Link 
              exact to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
            알림리스트
            </Link>                  
          </li>        
          <li className="nav-item">
            <Link 
              exact to="/"
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
          ): ( 
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
        </div>
      </div>
    </nav>


  )   
}