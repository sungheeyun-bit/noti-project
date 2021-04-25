import axios from 'axios';
import React, { useState } from 'react';
import SingleComment from './SingleComment';
import './Comments.css'
import { IconButton, Input } from "@chakra-ui/react"
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
      style={{ maxWidth:"1200px", 
               width:"100%", 
               margin:"100px auto",             
              }}> 
      <br />
   
      <div className="commentbox" style={{margin:"30px 110px"}}> 
      {/* <p> replies</p> */}
        <form style={{ display: "flex" }} onSubmit={onSubmit}>         
          <Input 
            focusBorderColor="purple.400"
            variant="outline" 
            placeholder="로그인 후 코멘트를 작성할 수 있습니다."
            onChange={handleChange}
            value={comment}
            size="lg"
          />
          <IconButton
            onClick={onSubmit}
            colorScheme="purple"
            aria-label="submit"
            size="lg"
            icon={<ChatIcon />}
         />
        </form>
      </div>
      {/* comment lists */}
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