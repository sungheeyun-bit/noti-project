import React from 'react'
import Likes from './Likes'
import { Divider, Text, Stack } from "@chakra-ui/react"
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io5";

export default function SingleComment(props) {
  return (
    <div className="comment-list" 
         style={{ 
          boxShadow:"0 0 3px #ccc",
          margin:"30px 110px", 
          display:"block",
          borderRadius: "30px"
        }}>  
     <ul className="comment-wrapper" > 
      <li className="comment" 
          style={{
            listStyle: "none", 
            display:"flex", 
            alignItems:"center",
            height: "30px",
            padding: "50px 50px",
            fontSize: "18px"
          }}>
        <span className="nickName" 
          style=
            {{
              padding:"5px",
              fontWeight: "700", 
            }}
            >{props.comment.nickName}</span> 
        <div className="content" style={{flexGrow: "1"}}>{props.comment.content}</div> 
        <Likes 
          commentId={props.comment._id}
          productId={props.productId}
          updateLikes={props.updateLikes}
          state={props.comment.state}
          goodCount={props.comment.goodCount}
          style={{ alignItem: "center"}}
        />        
      </li> 
      </ul>
    </div>
  )
}



