import React from 'react'

export default function SingleComment(props) {
  return (
    <div>
      <li className="content">
        <div>{props.content}</div>
        <div>{props.writer}</div>
        <div>{props.postId}</div>
      </li>
    </div>
  )
}
