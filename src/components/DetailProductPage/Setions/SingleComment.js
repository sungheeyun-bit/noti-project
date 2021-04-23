import React from 'react'
import Likes from './Likes'
import { Divider, Text, Stack } from "@chakra-ui/react"
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io5";

export default function SingleComment(props) {
  return (
    <div className="comment-list" style={{ boxShadow:"0 0 5px #ccc", margin:"30px 110px", display:"block" }}>  
    <ul className="comment-wrapper" > 
      <li className="comment" style={{listStyle: "none", display:"flex"}}>
        <span className="nickName" style={{padding:"5px"}}>{props.comment.nickName}</span> 
        <div className="content">{props.comment.content}</div> 
        <Likes 
          commentId={props.comment._id}
          productId={props.productId}
          updateLikes={props.updateLikes}
          state={props.comment.state}
          goodCount={props.comment.goodCount}
        />        

        {/* <Likes 
          commentId={props.comment._id}
          productId={props.productId}
          updateLikes={props.updateLikes}
          state={props.comment.state}
          goodCount={props.comment.goodCount}
        /> */}
      </li> 
      </ul>
    </div>
  )
}