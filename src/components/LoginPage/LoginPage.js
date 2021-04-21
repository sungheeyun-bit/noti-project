import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import GoogleLogin from "react-google-login";
import axios from 'axios';
import swal from "sweetalert";

axios.defaults.withCredentials = true;
 
export default function LoginPage({ loginHandler }) {
  
  const [details, setDetails] = useState({email: "", password: ""})
  const [user, setUser] = useState(null);
  const history = useHistory();

  const submitHandler = (e) =>{
    e.preventDefault();
 
    const { email, password } = details;

    if(!email || !password){
      return swal("Oops", "모든 항목은 필수입니다.", "error");
    }

    axios.post("https://projectb1.com:4000/users/login", 
    {
      email,
      password
    },
    {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => {
      history.push("/");
      loginHandler(res.data)
    })
    .catch(err => {
      console.log(err.message);
      alert(err.message)
    })
  }

  const handleLoginSuccess = (response) => {
    console.log("구글로그인", response.profileObj)
    if (response.profileObj) {
      axios
        .post(
          "https://projectb1.com:4000/users/socialLogin",
          {
            email: response.profileObj.email,
            nickName: response.profileObj.name,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setUser(response.profileObj);
          history.push("/");
        });
    }
  };

   const handleLoginFailure = (error) => {
    console.log(error);
  };

  return (
    <div className="container">
      <h2>Log in</h2>
      <form onSubmit={submitHandler}>
        <div className="email-form">
          📧 이메일
          <input 
            className="input"
            type="text"
            placeholder="이메일을 입력해주세요."
            value={details.email}
            onChange={(e) => setDetails({...details, email: e.target.value})}
          />
        </div>
        <div className="password-form">
          🔐 비밀번호
          <input 
            className="input"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={details.password}
            onChange={(e) => setDetails({...details, password: e.target.value})}
          />
        </div>
        <div>
          <button className="btn-signin" onClick={submitHandler}>
          이메일로 시작하기
          </button>
        </div>
       </form>   
       <div>
          <GoogleLogin
            className="btn-google"
            clientId="996092186048-291mg21lf890quda77fdgrqn11il9c0h.apps.googleusercontent.com"
            buttonText="구글 계정으로 시작하기"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div> 
        <div className="link-singup">
          <span>아직 계정이 없으신가요?</span>
          <Link to="/signup" style={{color:"black", textDecoration:"none"}}>
          👉 회원가입하기
          </Link>          
        </div>    
    </div>
  )
};

