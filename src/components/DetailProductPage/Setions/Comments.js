import axios from 'axios';
import React, { useState } from 'react';
import SingleComment from './SingleComment';
import './Comments.css'
import { Box, IconButton, Input, Flex } from "@chakra-ui/react"
import { ChatIcon } from '@chakra-ui/icons'
import swal from "sweetalert";
axios.defaults.withCredentials = true;
export default function Comments(props) {
  const accessToken = window.localStorage.getItem('userToken')
  const [comment, setComment] = useState("")
  const handleChange = (e) => {
    setComment(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(comment === "") {
       swal("Oops", "내용을 입력해주세요.", "error")
      return
    }
  const body = {
      comment: comment,
      _id: props.productId
    }
   console.log("댓글 보내는값", body)
    axios
      .post("https://projectb1.com:4000/products/writeComment", 
      body,
      {
        headers: { "Content-Type": "application/json" , "okCome": accessToken}, 
      })
      .then(response => {
        console.log ("포스트", response.data)
        if(response.data.success) {
          console.log(response.data)
          props.updateComment(response.data.data.comment)
          setComment("")        
        } else {
          alert('failed to save comment')
        }
       })
      .catch((err) =>{
        if(err.response.status === 401) {
          swal({
           title: "로그인이 필요합니다.",
           icon: "warning",
        })            
      }
    })
  }
  return (
    <div> 
      <div className="container" 
      style={{ maxWidth:"1400px", 
               width:"100%", 
               margin:"100px auto",             
              }}> 
      <br />
      <div className="commentbox" style={{margin:"30px 16px"}}> 
      {/* <p> replies</p> */}
        <form style={{ display: "flex" }} onSubmit={onSubmit}>         
          <Input
            mb="16"
            focusBorderColor="purple.400"
            variant="outline" 
            placeholder="로그인 후 이용할 수 있어요!"
            onChange={handleChange}
            value={comment}
            size="lg"
          />
          <IconButton
            mb="16"
            marginLeft="16px"
            onClick={onSubmit}
            colorScheme="purple"
            aria-label="submit"
            size="lg"
            icon={<ChatIcon />}
         />
        </form>
      </div>
        {props.commentLists && props.commentLists.map((comment, index) => (
            <SingleComment
              key={index}
              comment={comment} 
              productId={props.productId} 
              updateLikes={props.updateLikes}
            />
          ))}
        </div> 
    </div>
  )
}