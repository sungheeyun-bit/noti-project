import React, { useState } from 'react';
import { Card } from './Section/Card'
import { useHistory } from 'react-router-dom';
import GoogleLogin from "react-google-login";
import "./LoginPage.css";
import axios from 'axios';
import swal from "sweetalert";
import Toast from "../LandingPage/Sections/Toast"
import {
  Box,
  Button,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
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
      window.localStorage.setItem("userToken", res.data.data )
    })
    .catch(err => {
      console.log(err.message);
      alert(err.message)
    })
  }

  const handleLoginSuccess = (response) => {
    console.log("구글로그인", response.accessToken)
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
          console.log(res)
          window.localStorage.setItem("userToken", res.data.data )
          loginHandler(res.data)
          setUser(response.profileObj);
          history.push("/");
        });
    }
  };

   const handleLoginFailure = (error) => {
    console.log(error);
  };

  return (
    <Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{ base: '4', lg: '8' }}
  >
    <Box maxW="md" mx="auto">
    <SimpleGrid mt="16" columns={3} spacing="3"/>
    <Heading textAlign="center" size="lg" fontWeight="extrabold">
        🔔 꼭 갖고 싶은 아이템 놓치지 마세요!
      </Heading>
      {/* simpleGrid mt===lineHeight 적용 */}
      <SimpleGrid mt="10" columns={3} spacing="3"/>
      <Card>
        <Stack spacing="6">
          <FormControl id="email">
            <FormLabel>💌 이메일</FormLabel>
              <Input onChange={(e) => setDetails({...details, email: e.target.value})}
                value={details.email}
                name="email" 
                type="email" 
                placeholder="이메일을 입력해주세요."
                autoComplete="email" required />
            </FormControl>

        </Stack>
          <SimpleGrid mt="6" columns={3} spacing="3"/>
          <FormControl id="email">
           <FormLabel>🔐 비밀번호</FormLabel>
              <Input onChange={(e) => setDetails({...details, password: e.target.value})}
              value={details.password}
              name="email" 
              type="password"
              placeholder="비밀번호를 입력해주세요."
              autoComplete="email" required />
           </FormControl>

           <SimpleGrid mt="6" columns={3} spacing="3"/>
          <Button
              onClick={submitHandler}  
              type="submit" 
              colorScheme="purple" 
              // size="lg"
              width="full"
              fontSize="md">
              이메일로 시작하기
          </Button>

          <SimpleGrid mt="6" columns={3} spacing="3"/>
          
          <GoogleLogin
            buttonSize="320px"
            className="btn-google"
            clientId="996092186048-291mg21lf890quda77fdgrqn11il9c0h.apps.googleusercontent.com"
            buttonText="구글 계정으로 시작하기"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            cookiePolicy={"single_host_origin"}
          />
          <Text>
          아직 계정이 없으신가요?{" "}
            <Link 
            color="purple" 
            href="/signup">
            👉 회원가입하기
            </Link>
          </Text>
      </Card>    
    </Box>
    </Box>
  )
};
