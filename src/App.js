// import './App.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   BrowserRouter as Router, 
//   Route, 
//   Switch 
// } from 'react-router-dom';
// import LoginPage from './components/LoginPage/LoginPage';
// import SignupPage from './components/SignupPage/SignupPage';
// import Navbar from './components/Navbar/Navbar';

// axios.defaults.withCredentials = true;

// function App() {
//   const [isLogin, setIsLogin] = useState(false);
//   const [userInfo, setUserInfo] = useState("");
  
//   const loginHandler = () => {
//     setIsLogin(true)

//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     setIsLogin(false);
//   }

//   const initializeUser = () => {
//     if(localStorage.getItem("loggedInUser") === null) {
//       return;
//     }
//     const { accessToken } = JSON.parse(localStorage.getItem("loggedInUser"));
//     axios
//       .get("https://localhost:4000/userInfo", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json"
//         }
//       })
//       .then(() => {
//         JSON.parse(localStorage.getItem("loggedInUser")).isLogged = true;
//         setIsLogin(true);
//       })
//       .catch(err => console.log(err))
//   }
//   return (
//     <Router>
//       <Navbar 
//         loginHandler={loginHandler}
//         handleLogout={handleLogout}
//         isLogin={isLogin}     
//       />
//       <Switch>
//         <Route exact path="/signup" component={SignupPage} />
//         <Route exact path="/login">
//           <LoginPage 
//             loginHandler={loginHandler}
//           />
//         </Route>
//       </Switch>
//     </Router>

//   );
// }

// export default App;


// import './App.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   BrowserRouter as Router, 
//   Route, 
//   Switch 
// } from 'react-router-dom';
// import LoginPage from './components/LoginPage/LoginPage';
// import SignupPage from './components/SignupPage/SignupPage';
// import Navbar from './components/Navbar/Navbar';



// axios.defaults.withCredentials = true;


// function App() {
//   const [isLogin, setIsLogin] = useState(false);
//   const [accessToken, setAccessToken] = useState("");
  
//   const loginHandler = (data) => {
//     setIsLogin(true)
//     issueAccessToken(data.data.accessToken);
//   };

//   const issueAccessToken = (token) => {
//     setAccessToken(token);
//   }
 
//   const handleLogout = () => {
//     localStorage.clear();
//     setIsLogin(false);
//   }

//   return (
//     <Router>
//       <Navbar 
//         loginHandler={loginHandler}
//         handleLogout={handleLogout}
//         isLogin={isLogin}     
//       />
//       <Switch>
//         <Route exact path="/signup" component={SignupPage} />
//         <Route exact path="/login">
//           <LoginPage 
//             loginHandler={loginHandler}
//           />
//         </Route>
//       </Switch>
//     </Router>

//   );
// }

// export default App;





import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import Navbar from './components/Navbar/Navbar';
import DetailProductPage from './components/DetailProductPage/DetailProductPage';
import { initialState } from './assets/state';

export const userContext = createContext();


function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    
    const [user, setUser] = useState(initialState.user);

  const loginHandler = (data) => {
    setIsLogin(true)
    issueAccessToken(data.data.accessToken);
  };

  const issueAccessToken = (token) => {
    setAccessToken(token);
  }

  const handleLogout = () => {
    setIsLogin(false);
    setAccessToken("");
  }

  const userValue = user 

  return (
  <userContext.Provider value={userValue}> 
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
        <Route exact path="/product/:productId" component={DetailProductPage} />
      </Switch>
    </Router>
  </userContext.Provider>
  );
}
export default App;