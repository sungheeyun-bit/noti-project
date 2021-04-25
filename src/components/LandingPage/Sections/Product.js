import React, { useState } from 'react'
// import Modal from "./Modal"
// import ModalButton from "./ModalButton";
import styled from "styled-components";
import { FaRegBookmark } from 'react-icons/fa';
import { Button, Box, Image, AspectRatio, Badge, Container, Link, HStack, IconButton, ExternalLinkIcon } from "@chakra-ui/react"
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
    <Container maxW="md">
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
             <AspectRatio maxW="400px" ratio={1}>
             <Link
                href={`/product/${props.data._id}`}
             >
            
                

             <Image
            
                src={`https://projectb1.com:4000/${props.data.images[0]}`}/>
            </Link>
            </AspectRatio>
            

            <Badge 
            borderRadius="full" 
            px="2"
            mt="4" 
            ml="3"
            colorScheme="purple">
                New
            </Badge>
            <Badge 
            borderRadius="full" 
            px="2"
            mt="4" 
            ml="3"
            colorScheme="red">
                Hot
            </Badge>

            
            <Box
                mt="2"
                ml="3"
                fontSize="lg"
                fontWeight="semibold"
                as="h3"
                lineHeight="1.5"
                isTruncated
                >
                {props.data.releaseString}
                <IconButton
                    ml="10"
                    // ml="28"
                    icon={<FaRegBookmark />}
                    size="md"
                    variant="outline"
                    // isRound='true' 
                    onClick={(e) => props.handleClick(e, props.data.ProductId)}
                    >
                    저장
                </IconButton>

            </Box>

            <Box
                mb="2"
                ml="3">
                {props.data.productName}
                <Box as="span" color="gray.600" fontSize="md">
                </Box>
            </Box>


            <Box
            mb="4"
            >
            <Link
                ml="3"
                href={`/product/${props.data._id}`}
                onClick={handleClick}
            >
                 상세정보 확인하기
            
            </Link>
            </Box>



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
