// import React, { useEffect, useState } from 'react'
// import { useToast } from "@chakra-ui/react"
// import { Switch, Box, Button, Container, Toast, Heading, useColorModeValue,
//          HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge, Avatar, Wrap, WrapItem
//          } from '@chakra-ui/react'
// import axios from "axios";
// import { FaTrash } from 'react-icons/fa';
// // import Toast from '../LandingPage/Sections/Toast'
// function AlarmPage(props) {
//     console.log("상품 잘 겟하는지", props)
//     const [AlarmList, setAlarmList] = useState([])
//     const [LeftDay, setLeftDay] = useState("")
//     const [ProductName, setProductName] = useState("")
//     useEffect(() => {
//         axios.get("https://projectb1.com:4000/products/myList",{
//         headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
//       })
//         .then(response => {
//             console.log("알림리스트",response.status)
//             if (response.status === 200) {
//                 setAlarmList(response.data.data)
//                 setLeftDay(response.data.leftDay)
//                 setProductName(response.data.ProductName)
//             }
//         })
//     },[])
//     const alarmSetting = (productId) => {
//         console.log("알람설정")
//         let body = {
//         productId: productId
//         }
//         axios.patch(`https://projectb1.com:4000/products/changeAlarm`, body, {
//         headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
//       })
//           .then(response => {
//             console.log(response.data);
//           });
//     }
//     const handleDelete = (productId) => {
//         console.log("삭제버튼")
//         axios.delete(`https://projectb1.com:4000/products/removeAlarm?productId=${productId}`, {
//         headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
//       })
//           .then(response => {
//             console.log(response.data);
//           });
//     }
//     const renderCards = AlarmList.map((data, index) => {
//         console.log("저장된 각 제품 불러오는지", data)
//         const key={index}
//         return (
//             <VStack
//                 divider={<StackDivider  mt="3" />}
//                 borderColor='gray.100'
//                 borderWidth='2px'
//                 spacing={8}
//                 p={4}
//                 borderRadius='lg'
//                 w='100%'
//                 maxW={{ base: '120vw', sm: '100vw', lg: '50vw', xl: '40vw' }}
//                 alignItems='stretch'
//                 >
//                 <HStack key={index}>
//                     <Wrap>
//                         <WrapItem>
//                         <Avatar size="xl" name="shoes" src={`https://projectb1.com:4000/${data.images}`} />
//                         </WrapItem>
//                         <Box p={4} >
//                             <Heading fontSize="xl">{data.releaseString}</Heading>
//                             <Text mt={4}>{data.productName}</Text>
//                         </Box>
//                         <Spacer />
//                         <Switch onChange={alarmSetting}></Switch>
//                         <IconButton
//                             icon={<FaTrash />}
//                             isRound='true'
//                             onClick={handleDelete}
//                         />
//                     </Wrap>
//                 </HStack>
//             // </VStack>
//         )    
// })
//         return (
//                 <Box
//                     bg={useColorModeValue('gray.50', 'inherit')}
//                     minH="100vh"
//                     py="12"
//                     px={{ base: '4', lg: '8' }}
//                     >
//                 <Box maxW="md" mx="auto">
//                 <Heading
//                     mb='8'
//                     fontWeight='extrabold'
//                     size='2xl'
//                     bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
//                     color='purple'
//                     bgClip='text'
//                 >
//                     {LeftDay}일 뒤,
//                     {ProductName} 발매 됩니다.
//                 </Heading>
//                     {renderCards}
//                 </Box>
//                 </Box>
//         )
//     }
// export default AlarmPage



import React, { useState } from 'react'
import axios from "axios";
import { Switch, Button, HStack, Heading, Box,
         VStack, Text, IconButton, StackDivider, Spacer, Badge, Avatar, Wrap, WrapItem
} from "@chakra-ui/react"
import { FaTrash } from 'react-icons/fa';
 


export default function AlarmItem({ item, handleDelete, accessToken }) {


      const alarmSetting = (productId) => {
        
        console.log("알람설정")
        let body = {
          productId: productId,
        }
        axios.post(`https://projectb1.com:4000/products/changeAlarm`, body, 
        {
        headers: {"okCome": accessToken}
      })
      .then(response => {
            console.log(response);
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
 
