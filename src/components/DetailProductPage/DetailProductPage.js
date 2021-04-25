import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Comments from './Setions/Comments';
import '../../DetailProductPage.css';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Divider, Container, Center, SimpleGrid, Box, Text } from "@chakra-ui/react";

export default function DetailProductPage(props) {
const productId = props.match.params.productId

const [product, setProduct] = useState([])
const [commentLists, setCommentLists] = useState([])
const [likes, setLikes] = useState(0)

useEffect(() => {
    axios
      .get(`https://projectb1.com:4000/products/detailProduct?id=${productId}`)
        .then(response => {
          if(response.data.success){
            console.log('res.data', response.data.data)
            setProduct(response.data.data)
            setCommentLists(response.data.data[0].comment)
          } else {
            alert('상세 정보 가져오기를 실패했습니다')
          }
        })
  }, [])
  const [index, setIndex] = useState(0)
  const myRef = useRef(null)
  const updateLikes = (newLike) => {
    setLikes(newLike)
  }
  const updateComment = (newComment) => {
    setCommentLists(newComment)
  }
  const handleTab = (index) =>{
    setIndex(index)
    const images = myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  }
  return (
  <>
    <div className="detail-wrapper">
      {
        product.map(item => (
          <div className="details" key={item.id}>
            <div className="big-img">
              <img src={`https://projectb1.com:4000/${item.images[index]}`} alt="" />
            </div>
            <div className="info">
              <div className="row">
              <Text
              fontSize="2xl"
              fontWeight="extrabold"
              >
                 {item.productName}
              </Text>
              </div>
              <br />
              <div className="row">
                <span className="info-text">브랜드 사이트</span> 
              <a href={item.brand}>
                <ExternalLinkIcon w={6} h={6} />
              </a>
              </div>    
              <Divider orientation="horizontal" />          
              <div className="row">
                <span className="info-text">발매일</span> 
                <span style={{fontWeight:"500", fontSize:"17px"}}>{item.releaseString}</span> 
              </div>
              <Divider orientation="horizontal" />
              <div className="row">
                <span className="info-text">발매가격</span>  
                <span style={{fontWeight:"500", fontSize:"17px"}}>KRW {item.price}</span>
              </div>
              <div className="thumb" ref={myRef}>
                {
                  item.images.map((image, index) => (
                    <img src={`https://projectb1.com:4000/${image}`} alt="" key={index} 
                    onClick={()=> handleTab(index)}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
      <Box
      mb="100"
      >
      <Comments
        commentLists={commentLists} 
        productId={productId} 
        accessToken={props.accessToken}
        updateComment={updateComment} 
        updateLikes={updateLikes}
      />
      </Box>
  </>   
  )
}