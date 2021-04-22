import React, { useState } from 'react'
// import Modal from "./Modal"
// import ModalButton from "./ModalButton";
import styled from "styled-components";
// import { Row, Col, Button } from 'antd';
import { Button, Box, Image, AspectRatio, Badge, Container, Link, HStack } from "@chakra-ui/react"
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
export default function Product(props) {
    const [isOpen, toggle] = useState(false);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    // function handlOpenModal(open) {
    //   console.log("close modal");
    //   toggle(open);
    // }

  return ( 
    <HStack>
    <Container maxW="sm">
             <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
             <AspectRatio maxW="600px" ratio={1}>
             <Image
            src={`https://projectb1.com:4000/${props.data.images[0]}`}/>
            </AspectRatio>

            <Badge 
            borderRadius="full" px="2" colorScheme="teal">
                New
            </Badge>
            
            <Box
                mt="2"
                fontSize="lg"
                fontWeight="semibold"
                as="h3"
                lineHeight="1.5"
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
                href={`/product/${props.data._id}`}
                onClick={handleClick}>
                 상세정보 확인하기
            </Link>

            <Button 
            onClick={(e) => props.handleClick(e, props.data.ProductId)}
            >
            저장
            </Button>

                {/* <ModalButton 
                // handlClick={() => handlOpenModal(true)}
                onClick={(e) => props.handleClick(e, props.data.ProductId)}
                >
                    저장
                </ModalButton>
                <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
                <ModalContent>
                    <h1> 로그인이 필요합니다. </h1>
                    <Link
                    color="purple" 
                    href="/login">
                    👉 로그인하기
                    </Link>
                </ModalContent>
                </Modal> */}
       
        </Box>
        </Container>
    {/* </div> */}
    </HStack>
  )    
}