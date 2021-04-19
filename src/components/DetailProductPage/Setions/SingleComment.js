import React from 'react'
import Likes from './Likes'

export default function SingleComment(props) {

  console.log("싱글코멘트 pros", props)
  return (
    <div>
      <li className="content" style={{listStyle: "none"}}>
        <div>{props.comment.nickName}</div> 
        <div>{props.comment.content}</div> 
        {/* <div>{props.postId}</div>  */}
        <Likes 
          accessToken={props.accessToken}
          commentId={props.comment._id}
          productId={props.productId}
          />
      </li>
    </div>
  )
}
