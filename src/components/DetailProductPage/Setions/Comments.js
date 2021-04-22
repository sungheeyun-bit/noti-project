import axios from 'axios';
import React, { useState, useContext } from 'react';
import SingleComment from './SingleComment';

axios.defaults.withCredentials = true;

export default function Comments(props) {
  const [comment, setComment] = useState("")
  const handleChange = (e) => {
    setComment(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(comment === "") {
      alert("내용을 입력해주세요")
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
        headers: { "Content-Type": "application/json" , "okCome": props.accessToken}, 
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
          alert("로그인이 필요합니다.")
      }
    })
  }
  return (
    <div>
      <br />
      <p> replies</p>
      {/* root comment form */}
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <textarea 
          style={{ width: "100%", borderRadius: "5px"}}
          onChange={handleChange}
          value={comment}
          placeholder="코멘트를 작성해 주세요."  
        />
        <br />
        <button style={{ width:"20%", height:"52px"}} onClick={onSubmit}>Submit</button>
      </form>
      {/* comment lists */}
    
      {props.commentLists && props.commentLists.map((comment, index) => (
          <SingleComment 
            key={index}
            comment={comment} 
            productId={props.productId} 
            accessToken={props.accessToken}
            updateLikes={props.updateLikes}
         />
      ))}
    </div>
  )
}