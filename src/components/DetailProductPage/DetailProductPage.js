import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Comments from './Setions/Comments';
import '../../DetailProductPage.css';

export default function DetailProductPage(props) {
  
console.log('props가 뭐니', props)
const productId = props.match.params.productId
  
const [product, setProduct] = useState([])
const [commentLists, setCommentLists] = useState([])


  useEffect(() => {
    
    axios
      .get(`https://localhost:4000/products/detailProduct?id=${productId}`)
        .then(response => {
          console.log("상세페이지", response.data)
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
  {console.log("상세제품",product)}
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
                <span style={{fontWeight:"500"}}>{item.releaseString}</span> 
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
      productId={productId} 
      accessToken={props.accessToken}
      updateComment={updateComment} />
  </>   
  )
}



