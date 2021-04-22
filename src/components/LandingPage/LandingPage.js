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