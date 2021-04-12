import axios from 'axios';
import React, { useState, useContext } from 'react';
import SingleComment from './SingleComment';
import {userContext} from '../../../App';

export default function Comments(props) {

  //redux
//  const user = useSelector(state => state.user)
  const [comment, setComment] = useState("")

  const user = useContext(userContext)   

  const handleChange = (e) => {
    setComment(e.currentTarget.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // postId는 상위 컴포넌트에서 내려받아야 한다
    const variables = {
      content: comment,
      writer: user.id,
      postId: props.postId
    }

    // comment post하기
    axios
      .post('/api/comment/saveComment', variables)
      .then(response => {
        if(response.data.success) {
          setComment("") //다시 빈칸으로 바꿔주고
          props.updateComment(response.data.result)

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
          placeholder="write some comments"  
        />
        <br />
        <button style={{ width:"20%", height:"52px"}} onClick={onSubmit}>Submit</button>

      </form>
      {/* comment lists */}
      {props.commentLists && props.commentLists.map((comment, index) => (
        // <React.Fragment>
          <SingleComment comment={comment} postId={props.postId} updateComment={props.updateComment} />
        //</React.Fragment>
      ))}



    </div>
  )
}









