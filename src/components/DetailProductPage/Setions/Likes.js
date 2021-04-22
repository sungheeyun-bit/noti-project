import React, { useEffect, useState } from 'react'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import axios from 'axios';
import swal from "sweetalert";

axios.defaults.withCredentials = true;
export default function Likes(props) {

  const [likeCount, setLikeCount] = useState(props.goodCount);
  const [action, setAction] = useState(props.state);

  const accessToken = window.localStorage.getItem('userToken')

  const onLikeClick = () => {

    const body = {
      id: props.productId,
      comment_id: props.commentId
    }
    axios.patch(`https://projectb1.com:4000/products/good`, body, 
      {
        headers: { "Content-Type": "application/json" , "okCome": accessToken}
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
          swal({
           title: "로그인이 필요합니다.",
           icon: "warning",
        })     
      }
    })    
  }


  return (
    <div className="like-icon">
      <div onClick={onLikeClick}>
        
        <span>{action=== 0 ? 
          <IoMdHeartEmpty  size="25"/> :
          <IoMdHeart size="25" color="rgb(201, 89, 113)" />}</span>
        <span className="like-count">{likeCount}</span>
      </div>
    </div>
  )
}




