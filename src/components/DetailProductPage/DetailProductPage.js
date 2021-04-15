// link를 통해서 상세페이지에 갈 수 있다
// 상품의 유니크아이디가 있다
// 발매정보리스트에서 하나당 링크를 달아야함
// 인프런 강의 randingpage에서 rendercard참고

// 상세페이지 갖고 올때는 백엔드에게 그 상품에 맞는 아이디를 

import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { initialState } from '../../assets/state';
import Comments from './Setions/Comments';
import '../../DetailProductPage.css';
// match는 route-> component로 넘겨 사용할 때 쓴다
// props는 component -> component로 변수 넘길 때 쓴다
// params(/about/:name형식)정보를 가지고있다
// 하나의 상품정보만 가져오기 때문에 type single로!

export default function DetailProductPage(props) {
  
  // const productId = props.match.params.productId
  
  // const [product, setProduct] = useState({})
  // const [commentLists, setCommentLists] = useState([])


  // useEffect(() => {
    
    
  //   axios
  //     .get(`/product/detailProduct?id=${productId}&type=single`)
  //       .then(response => {
  //         console.log("상세페이지", response)
  //         if(response.data.success){
  //           console.log('res.data', response.data)
  //           setProduct(response.data.product[0])
  //         } else {
  //           alert('상세 정보 가져오기를 실패했습니다')
  //         }
  //       })

  //     }, [])

  //   axios
  //     .get(`/product/comment`)
  //       .then(response => {
  //         if(response.data.success){
  //           console.log('res.data', response.data)
  //           setCommentLists(response.data.comment)
  //         } else {
  //           alert('상세 정보 가져오기를 실패했습니다')
  //         }
  //       })
  // }, [])


  const [product, setProducts] = useState(initialState.product);
  const [commentLists, setCommentLists] = useState([])
  const [index, setIndex] = useState(0)

  const myRef = useRef(null)

  const updateComment = (newComment) => {
    setCommentLists(commentLists.concat(newComment))
  }
  
  const handleTab = (index) =>{
    setIndex(index)
    const images = myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  }
  
  
  return (
  <>
    <div className="detail-wrapper">
      {
        product.map(item => (
          <div className="details" key={item.id}>
            <div className="big-img">
              <img src={item.images[index]} alt="" />
            </div>
            <div className="info">
              <div className="row">
                 <h2>{item.productName}</h2>
                  <i class="far fa-bell"></i>
              </div>
              <div className="row">
                <span>발매일</span> 
                <span style={{fontWeight:"500"}}>{item.releaseDate}</span> 
              </div>
              <div className="row">
                <span>발매가격</span>  
                <span style={{fontWeight:"500"}}>KRW {item.price}</span>
              </div>
              <div className="thumb" ref={myRef}>
                {
                  item.images.map((image, index) => (
                    <img src={image} alt="" key={index} 
                    onClick={()=> handleTab(index)}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
    <Comments 
      commentLists={commentLists} 
      productId={product.id} 
      accessToken={props.accessToken}
      updateComment={updateComment} />
  </>
   
  )
}

