import React, { useState } from 'react'
import axios from "axios";
import { Switch, Button, HStack, Heading, Box,
         VStack, Text, IconButton, StackDivider, Spacer, Badge, Avatar, Wrap, WrapItem
} from "@chakra-ui/react"
import { FaTrash } from 'react-icons/fa';
import swal from "sweetalert"; 


export default function AlarmItem({ item, handleDelete, accessToken}) {


  // const accessToken = window.localStorage.getItem('userToken')

      const alarmSetting = (productId) => {
        
        console.log("알람설정")
        let body = {
          productId: item.productId,
        }
        console.log("바디가뭐야", body)
        axios.post(`https://projectb1.com:4000/products/changeAlarm`, body, 
        {
        headers: {"okCome": accessToken}
      })
      .then(response => {
            console.log(response.data.data.myList);
        const myList = response.data.data.myList;
        const alarmProduct = myList.filter((el) => el.productId === item.productId)
        console.log("알람프로덕트", alarmProduct)
          if(alarmProduct[0].alarm === true){
            swal({
              title: "Good job!",
              text: "발매 하루 전에 메일로 발송됩니다.",
              icon: "success",
            });     
          }else{
             swal("Oops", "알람 설정이 취소되었습니다.", "error")
          }        
       });
    }
  
  return (
      <VStack
                divider={<StackDivider  mt="3" />}
                borderColor='gray.100'
                borderWidth='2px'
                spacing={8}
                p={4}
                borderRadius='lg'
                w='100%'
                maxW={{ base: '120vw', sm: '100vw', lg: '50vw', xl: '40vw' }}
                alignItems='stretch'
                >
                <HStack >
                    <Wrap>
                        <WrapItem>
                        <Avatar size="xl" name="shoes" src={`https://projectb1.com:4000/${item.images[0]}`} />
                        </WrapItem>
                        <Box p={4} >
                            <Heading fontSize="xl">{item.releaseString}</Heading>
                            <Text mt={4}>{item.productName}</Text>
                        </Box>
                        <Spacer />
                        <Switch defaultChecked="true"
                         onChange={alarmSetting}></Switch>
                        <IconButton
                            icon={<FaTrash />}
                            isRound='true'
                            onClick={() => {handleDelete(item.productId)}}
                        />
                    </Wrap>
                </HStack>
      </VStack>
  )
};
 
