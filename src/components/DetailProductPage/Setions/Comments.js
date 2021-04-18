import axios from 'axios';
import React, { useState, useContext } from 'react';
import SingleComment from './SingleComment';
import {userContext} from '../../../App';


axios.defaults.withCredentials = true;


export default function Comments(props) {

  const [comment, setComment] = useState("")
   
  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

      const variables = {
      content: comment,
      productId: props.productId
    }

   console.log(variables)

    axios
      .post("https://localhost:4000/products/writeComment", 
      variables,
      {
        headers: { "Content-Type": "application/json" , "okCome": props.accessToken}, 
      })
      .then(response => {
        console.log ("포스트", response)
        if(response.data.success) {
          setComment("") 
          props.updateComment(response.data.data)
        } else {
          alert('failed to save comment')
        }
       })
  }

  return (
    <div>
      <br />
      <p> replies</p>
      
      {/* root comment form */}
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <textarea 
          style={{ width: "100%", borderRadius: "5px"}}
          onChange={handleChange}
          value={comment}
          placeholder="코멘트를 작성해 주세요."  
        />
        <br />
        <button style={{ width:"20%", height:"52px"}} onClick={onSubmit}>Submit</button>

      </form>
      {/* comment lists */}
      {props.commentLists && props.commentLists.map((comment, index) => (
        // <React.Fragment>
          <SingleComment 
            comment={comment} 
            productId={props.poductId} 
           />
        //</React.Fragment>
      ))}



    </div>
  )
}









