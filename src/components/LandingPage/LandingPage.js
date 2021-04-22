// import React, { useEffect, useState } from 'react'
// import { useHistory, withRouter } from "react-router-dom";
// import { useDispatch } from 'react-redux'
// import Toast from './Sections/Toast'
// import axios from "axios";
// import { Row } from 'antd';
// import SearchBox from "./Sections/SearchBox";
// import Modal from "./Sections/Modal"
// import ModalButton from "./Sections/ModalButton";
// import styled from "styled-components";
// import { Box, Image, AspectRatio, Badge, Container, Link } from "@chakra-ui/react"



// const ModalContent = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   h1 {
//     color: #5c3aff;
//   }
// `;

// export default function LandingPage(props) {
//     console.log("랜딩 프롭스", props)

//     const [isOpen, toggle] = useState(false);

//     function handlOpenModal(open) {
//       console.log("close modal");
//       toggle(open);
//     }
    
//     const [ProductList, setProductList] = useState([])
//     const history = useHistory();
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);
    
//     const [searchTerm, setSearchTerm] = useState("")


//     useEffect(() => {
//         // axios.get("https://localhost:4000/products/filterProductList")
//         axios.get("https://projectb1.com:4000/products/filterProductList")
//             .then(response => {
//                 console.log("제품 정보", response.data)
//                 if (response.data.data) {
//                     setProductList(response.data.data)
//                 } else {
//                     alert(" 상품들을 가져오는데 실패 했습니다.")
//                 }
//             })

//     },[])

//     const updateSearchTerm = (newSearchTerm) => {
    
//     //   axios.get(`https://localhost:4000/products/searchProduct?searchTerm=${newSearchTerm}`,
//       axios.get(`https://projectb1.com:4000/products/searchProduct?searchTerm=${newSearchTerm}`,
//         {headers: {
//           "Content-Type": "application/json"
//         }})
//         .then(response => {
//           console.log("검색결과", response.data.data)
//           setProductList(response.data.data)
//       })  
//   }

//     // const dispatch = useDispatch()

//     const addCart = (productId) => {
//       const goToList = ProductList.filter(product => {
//           return productId === productId
//       })
//       console.log("클릭된제품", goToList)
      
//     //  const body = goToList[0]
      
//       axios.post(`https://projectb1.com:4000/products/addMyLIst?productId=${productId}`,
//       {
//         headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
//       })
//         .then(response => 
//             console.log("장바구니",response.data))
//             // props.history.push('');
//         }

    
//     const renderCards = ProductList.map((data, index) => {    

//         console.log("저장된 각 제품 불러오는지", data.releaseString)
//         return <Container maxW="sm">
//             <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
//             <AspectRatio maxW="600px" ratio={1}>
//             <Image
//             src={`https://projectb1.com:4000/${data.images[0]}`}/>
//             </AspectRatio>

//             <Badge 
//             borderRadius="full" px="2" colorScheme="teal">
//                 New
//             </Badge>
            
//             <Box
//                 mt="2"
//                 fontSize="lg"
//                 fontWeight="semibold"
//                 as="h3"
//                 lineHeight="1.5"
//                 isTruncated
//                 >
//                 {data.releaseString}
//             </Box>

//             <Box>
//                 {data.productName}
//                 <Box as="span" color="gray.600" fontSize="md">
//                 </Box>
//             </Box>
            
//             <Link
//                 href={`/product/${data._id}`}
//                 onClick={handleClick}>
//                  상세정보 확인하기
//             </Link>

//                 <ModalButton 
//                 handlClick={() => handlOpenModal(true)}
//                 onClick={addCart(data.ProductId)}
//                 >
//                     저장
//                 </ModalButton>
//                 <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
//                 <ModalContent>
//                     <h1> 로그인이 필요합니다. </h1>
//                     <Link 
            
//                     color="purple" 
//                     href="/login">
//                     👉 로그인하기
//                     </Link>
//                 </ModalContent>
//                 </Modal>
       
//         </Box>
//         </Container>
//     })

//     return (
//         <div style={{ width: '75%', margin: '3rem auto' }}>

//              <div style={{ textAlign: 'center' }}>
//                 {/* <h1>서비스 소개 콘텐츠 {addCart}</h1> */}
//             </div>
//             <Box bg="tomato" w="100%" p={4} color="white">
//                 서비스 소개 콘텐츠
//             </Box>            
//             <SearchBox updateSearchTerm={updateSearchTerm} />
//             <br />
//             <h1>최신발매정보</h1>
//             <Row gutter={[16, 16]} >
//                 {renderCards}
//             </Row>

//         </div>
//     )
// }

import React from 'react'
import SearchBox from "./Sections/SearchBox";
import Product from './Sections/Product';
import { Box, Container, HStack} from "@chakra-ui/react"
export default function LandingPage(props) {    
  return (
    <div style={{ width: '75%', margin: '3rem auto' }}>
      <div style={{ textAlign: 'center' }}>
      <Container maxW="sm">
      <Box bg="tomato" w="100%" p={4} color="white">
        서비스 소개 콘텐츠
      </Box>
        </Container>
      </div>
            <SearchBox updateSearchTerm={props.updateSearchTerm} />
            <br />
            <h1>최신발매정보</h1>
            <HStack>
            {props.productList.map((data, index) => 
              <Product 
                data={data} 
                key={index} 
                handleClick={() => {props.addToCart(data._id)}}
         />)}
            </HStack>        
    </div>
  )
}








