import React from 'react'
import Likes from './Likes'
export default function SingleComment(props) {
  return (
    <div>
      <li className="contents" style={{listStyle: "none"}}>
        <div className="nickName" style={{fontWeight:"500"}}>{props.comment.nickName}</div> 
        <div className="content">{props.comment.content}</div> 
        <Likes 
          commentId={props.comment._id}
          productId={props.productId}
          updateLikes={props.updateLikes}
          state={props.comment.state}
          goodCount={props.comment.goodCount}
          />
      </li>
    </div>
  )
}