import React, { useEffect, useState } from 'react'
import axios from "axios";
import Toast from '../LandingPage/Sections/Toast'
import AlarmItem from './Sections/AlarmItem';
import { Switch, Button, HStack, Heading, Box, useColorModeValue,
  VStack, Text, IconButton, StackDivider, Spacer, Badge, Avatar, Wrap, WrapItem
} from "@chakra-ui/react"

function AlarmPage() {
 
  const [alarmList, setAlarmList] = useState([])
  const [leftDay, setLeftDay] = useState("")
  const [productName, setProductName] = useState("")

  const accessToken = window.localStorage.getItem('userToken')

  console.log("알림페이지토큰", accessToken)

  useEffect(() => {
    axios
      .get("https://projectb1.com:4000/products/myList",{
        headers: { "Content-Type": "application/json" , "okCome": accessToken}
      })
      .then(response => {
        if(response.status === 200){
          setAlarmList(response.data.data)
          setLeftDay(response.data.data[0].leftDay)
          setProductName(response.data.data[0].productName)
        }
      })
  },[])

  const handleDelete = (productId) => {
        
  axios.delete(`https://projectb1.com:4000/products/removeAlarm?productId=${productId}`, {
    headers: { "Content-Type": "application/json" , "okCome": accessToken}
  })
  .then(response => {
    console.log("삭제버튼누른뒤", response.data.data.myList);
    setAlarmList(response.data.data.myList)
  });
}

return (
  <Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{ base: '4', lg: '8' }}
  >
      <Box maxW="md" mx="auto">
        <Heading
          mb='8'
          fontWeight='extrabold'
          size='2xl'
          bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
          color='purple'
          bgClip='text'
        >
          {leftDay}일 뒤,
          <br></br>
          {productName}가 발매 됩니다.
        </Heading>

          <div className="alarmList-container">
             {!alarmList.length ? (
                <div className="alarmList-text">
                  알림리스트에 아이템이 없습니다.
                </div>
                ) : (
                  <div className="alarmList">
                    {alarmList.map((data, idx) => {
                      return <AlarmItem 
                        key={idx}
                        item={data}
                        handleDelete={handleDelete}
                        accessToken={accessToken}
                      />
                      })}
                    </div>
                    )}
            </div>
        </Box>
    </Box>
  )
}

export default AlarmPage    
