import React from 'react'
import LikeDislikes from './LikeDislikes'

export default function SingleComment({props}) {
  return (
    <div>
      <li className="content" style={{listStyle: "none"}}>
        {/* <div>{props.comment}</div>
        <div>{props.writer}</div>
        <div>{props.postId}</div> */}
        <LikeDislikes />
      </li>
    </div>
  )
}
