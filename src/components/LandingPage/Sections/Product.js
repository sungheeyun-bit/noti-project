import React from 'react'
import { Col, Card, Row, } from 'antd';
import { Link } from "react-router-dom";
import { Box, Image, AspectRatio, Badge } from "@chakra-ui/react"

export default function Product(props) {


  return (
    <div>
         <Row gutter={[16, 16]} >                     
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <AspectRatio maxW="600px" ratio={1}>
                <Image
            src={`https://projectb1.com:4000/${props.data.images[0]}`}/>
            </AspectRatio>

            <Badge                 lineHeight="1.5"

            borderRadius="full" px="2" colorScheme="teal">
                New
            </Badge>
              <Box
                mt="2"
                fontSize="lg"
                fontWeight="semibold"
                as="h3"
                isTruncated
                >
                {props.data.releaseString}
            </Box>

            <Box>
                {props.data.productName}
                <Box as="span" color="gray.600" fontSize="md">
                </Box>
            </Box>
            

            <Link
                exact
                to={`/product/${props.data._id}`}
                >
                 상세정보 확인하기
            </Link>
                <button onClick={(e) => props.handleClick(e, props.data.ProductId)}>
                저장
                </button>
        </Box>            
      </Row>
      
    </div>
  )
}


