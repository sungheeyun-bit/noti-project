import React, { useState } from "react";
import validation from "../utils/Validation";
import axios from "axios";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

axios.defaults.withCredentials = true;

export default function SingupPage() {

  const [values, setValues] = useState({
    nickName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (key) => (e) => {
    setValues({
      ...values,
      [key]: e.target.value,
    });
    setErrors(validation(values));
  };
  
  const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();

    const { nickName, email, password, confirmPassword } = values;
    if (!email || !password || !nickName || !confirmPassword) {
      return swal("Oops", "모든 항목은 필수입니다.", "error");
    }
   
    axios
      .post(
        "https://localhost:4000/users/signup",
        {
          nickName,
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        swal("Oops", err.response.data.message, "error")
        history.push("/login");
      });
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <h2 className="title"> sign up</h2>
        <form className="form-wrapper">
          <div className="nickName">
          <br />
             닉네임
            <input
              className="input"
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={handleChange("nickName")}
            />
            {errors.nickName && (
              <p className="error-signup">{errors.nickName}</p>
            )}
          </div>
          <div className="email">
          <br />
             이메일
            <input
              className="input"
              type="text"
              placeholder="이메일를 입력해주세요"
              onChange={handleChange("email")}
            />
            {errors.email && <p className="error-signup">{errors.email}</p>}
          </div>
          <div className="password">
          <br />
            🔐 비밀번호
            <input
              className="input"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handleChange("password")}
            />
            {errors.password && (
              <p className="error-signup">{errors.password}</p>
            )}
          </div>
          <div className="confirmPassword">
          <br />
             🔐 비밀번호 확인
            <input
              className="input"
              type="password"
              placeholder="비밀번호를 다시한번 입력해주세요"
              onChange={handleChange("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="error-signup">{errors.confirmPassword}</p>
            )}
          </div>
          <div>
          <br />
            <button className="btn-singup" onClick={handleSignup}>
              회원가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
