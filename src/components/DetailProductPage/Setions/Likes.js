import React, { useEffect, useState } from 'react'
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Likes(props) {

  const [likeCount, setLikeCount] = useState(0);
  const [action, setAction] = useState(0);

  const onLikeClick = () => {

    console.log("라이크클릭됨")
    const body = {
      id: props.productId,
      comment_id: props.commentId
    }

    axios.patch(`https://localhost:4000/products/good`, body, 
      {
        headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
      })
      .then(response => {
        console.log("라이크", response.data)
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

//   useEffect(() => {
//     const body = {
//     id: props.productId,
//       comment_id: props.commentId
//     }
// })


  return (
    <div className="like-icon">
      {console.log("액션스테이트", action)}
      <div onClick={onLikeClick}>
        <i className= {action === 0 ? "far fa-heart" : "fas fa-heart"}></i>
        <span className="like-count">{likeCount}</span>
      </div>
    </div>
  )
}





// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// axios.defaults.withCredentials = true;

// export default function Likes(props) {

//   const [likeCount, setLikeCount] = useState(0);
//   const [action, setAction] = useState(0);

//   const onLikeClick = () => {

//     console.log("라이크클릭됨")
//     const body = {
//       id: props.productId,
//       comment_id: props.commentId
//     }



    // axios.patch(`https://localhost:4000/products/good`, body, {
    //   headers: {"Content-Type": "application/json", "okCome": props.accessToken}
    // })
    // .then(response => {
    //   const comments = response.data.data.comment;
    //   const filteredLike = comments.filter((comment) => {
    //     return comment._id === props.commentId
    //   })
    //   if(action === 0)
    // })

 
    // if(action === 0)





    // if(action === 0) {
    //   axios.patch(`https://localhost:4000/products/good`, 
    //   body, 
    //   {
    //     headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
    //   })
    //   .then(response => {
    //     console.log("라이크", response.data)
    //     const comments = response.data.data.comment
    //     const filteredLike = comments.filter((comment) => {
    //       return comment._id === props.commentId
    //    })
    //    if(filteredLike[0].state === 1){
    //      setAction(1);
        //  setLikeCount((prev) => prev + 1);
      //  } else {
      //    alert(response.data.err)
      //  }
    //   })
    //   .catch(err => {
    //     if(err.status === 401) {
    //     alert("로그인이 필요합니다")
    //     }
    //   })  
    // } else if (action === 1) {
    //   axios.patch(`https://localhost:4000/products/good`, 
    //   body, 
    //   {
    //     headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
    //   })
    //   .then(response => {
    //     console.log("라이크", response.data)
    //     const comments = response.data.data.comment
    //     const filteredLike = comments.filter((comment) => {
    //       return comment._id === props.commentId
    //    })      
    //   if(filteredLike[0].state === 0){
    //     setAction(0)
        // setLikeCount((prev) => prev - 1);
  //     }else{
  //       alert(response.data.err)
  //     }
  //   })
  //   .catch((err) =>{
  //       if(err.response.status === 401) {
  //         alert("로그인이 필요합니다.")
  //     }
  //   })    
  //   }
  // }

    // if (action === 0){
      
    //    axios.patch(`https://localhost:4000/products/good`, body, 
    //   {
    //     headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
    //   })
    //   .then(response => {
    //     console.log("라이크", response.data)
    //     const comments = response.data.data.comment
    //     const filteredLike = comments.filter((comment) => {
    //       return comment._id === props.commentId
    //    })
       
    // }

    // axios.patch(`https://localhost:4000/products/good`, body, 
    //   {
    //     headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
    //   })
    //   .then(response => {
    //     console.log("라이크", response.data)
    //     const comments = response.data.data.comment
    //     const filteredLike = comments.filter((comment) => {
    //       return comment._id === props.commentId
    //    })    
    //     setAction(filteredLike[0].state)
    //     setLikeCount(filteredLike[0].goodUsers.length)  
        
    //   })
  //     .catch((err) =>{
  //       if(err.response.status === 401) {
  //         alert("로그인이 필요합니다.")
  //     }
  //   })    
  // }






  
//   return (
//     <div className="like-icon">
//       <div onClick={onLikeClick}>
//         <i className= {action === 0 ? "far fa-heart" : "fas fa-heart"}></i>
//         <span className="like-count">{likeCount}</span>
//       </div>
//     </div>
//   )
// }







