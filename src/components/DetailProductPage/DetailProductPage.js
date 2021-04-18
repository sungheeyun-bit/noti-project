import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { initialState } from '../../assets/state';
import Comments from './Setions/Comments';
import '../../DetailProductPage.css';

export default function DetailProductPage(props) {
  
  console.log('props가 뭐니', props)
const productId = props.match.params.productId
  
const [product, setProduct] = useState([])
const [commentLists, setCommentLists] = useState([])



  useEffect(() => {
    
    axios
      .get(`/product/detailProduct?id=${productId}&type=single`)
        .then(response => {
          console.log("상세페이지", response.data)
          if(response.data.success){
            console.log('res.data', response.data)
            setProduct(response.data.product[0])
          } else {
            alert('상세 정보 가져오기를 실패했습니다')
          }
        })

      }, [])

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


  // const [product, setProducts] = useState(initialState.product);
  // const [commentLists, setCommentLists] = useState([])
  const [index, setIndex] = useState(0)

  const myRef = useRef(null)

  const updateComment = (newComment) => {
    console.log("뉴코멘트", newComment)
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
  {console.log(product)}
    {/* <div className="detail-wrapper">
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
    </div> */}
        <div className="detail-wrapper">
      {
        product.map(item => (
          <div className="details" key={item.id}>
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
            </div>
          </div>
        ))
      }
    </div>
    <Comments 
      commentLists={commentLists} 
      // productId={product[0]._id} 
      accessToken={props.accessToken}
      updateComment={updateComment} />
  </>   
  )
}

