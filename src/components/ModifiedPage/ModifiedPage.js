import React, {useState, useEffect} from 'react'

export default function ModifiedPage({ accessToken, issueAccessToken}) {
  
  const [form, setForm] = useState({
    changeNickname: "",
    password: "",
    confirmPassword:""
  });

  const [errMessage, setErrMessage] = useState("");
  const { changeNickname, password, confirmPassword} = form;
  
  
  return (
    <div>
      MODI
    </div>
  )
}


