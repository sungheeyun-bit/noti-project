import React, { useEffect, useState } from 'react'
import axios from 'axios';

// import { user } from '../../../../../noti-server/models/user';

export default function Likes(props) {

console.log("라이크", props)
 // 제품아이디, 토큰, 코멘트아이디 (클라)


  const [like, setLikes] = useState(0);
  const [action, setAction] = useState(0);

const  onLikeClick = () => {

    const body = {
      id: props.productId,
      comment_id: props.commentId
    }

    axios.patch(`https://localhost:4000/products/good`, body, 
      {
        headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
      }).then(response => {
        console.log("하트클릭",response.data.data.comment)
      })
    
  }


  return (
    <div>
      <span onClick={onLikeClick}>
      <i class="far fa-heart"></i>
      <i class="fas fa-heart"></i>
      </span>
    </div>
  )
}


