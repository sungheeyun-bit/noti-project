import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Comments from './Setions/Comments';
import '../../DetailProductPage.css';

export default function DetailProductPage(props) {

const productId = props.match.params.productId
  
const [product, setProduct] = useState([])
const [commentLists, setCommentLists] = useState([])

const [likes, setLikes] = useState(0)

  useEffect(() => {
    axios
      .get(`https://projectb1.com:4000/products/detailProduct?id=${productId}`)
        .then(response => {
          if(response.data.success){
            console.log('res.data', response.data.data)
            setProduct(response.data.data)
            setCommentLists(response.data.data[0].comment)
          } else {
            alert('상세 정보 가져오기를 실패했습니다')
          }
        })
  }, [])

  const [index, setIndex] = useState(0)

  const myRef = useRef(null)


  const updateLikes = (newLike) => {
    setLikes(newLike)
  }

  const updateComment = (newComment) => {
    setCommentLists(newComment)
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
              </div>
              <div className="row">
                <span>브랜드 사이트</span> 
              <a href={item.brand}><i class="fas fa-external-link-alt"></i></a>
              </div>              
              <div className="row">
                <span>발매일</span> 
                <span style={{fontWeight:"500"}}>{item.releaseString}</span> 
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
      {console.log("상세페이지",product)}
    </div> 

    <Comments 
      commentLists={commentLists} 
      productId={productId} 
      accessToken={props.accessToken}
      updateComment={updateComment} 
      updateLikes={updateLikes}
    />
  </>   
  )
}



