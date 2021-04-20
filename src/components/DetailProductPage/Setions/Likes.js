import React, { useEffect, useState } from 'react'
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Likes(props) {

  const [likeCount, setLikeCount] = useState(props.goodCount);
  const [action, setAction] = useState(props.state);

  const onLikeClick = () => {

    const body = {
      id: props.productId,
      comment_id: props.commentId
    }

    axios.patch(`https://localhost:4000/products/good`, body, 
      {
        headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
      })
      .then(response => {
        const comments = response.data.data.comment
        const filteredLike = comments.filter((comment) => {
          return comment._id === props.commentId
       })    
        setAction(filteredLike[0].state)
        props.updateLikes(filteredLike[0].state)
        setLikeCount(filteredLike[0].goodUsers.length)  
      })
      .catch((err) =>{
        if(err.response.status === 401) {
          alert("로그인이 필요합니다.")
      }
    })    
  }


  return (
    <div className="like-icon">
      <div onClick={onLikeClick}>
        <i className= {action=== 0 ? "far fa-heart" : "fas fa-heart"}></i>
        <span className="like-count">{likeCount}</span>
      </div>
    </div>
  )
}




