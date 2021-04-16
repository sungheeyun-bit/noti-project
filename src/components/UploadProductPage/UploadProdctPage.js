import React, {useState} from 'react';
import { Button, Form, Input } from 'antd';
import './UploadProductPage.css';
import FileUpload from '../utils/FileUpload';
import axios from 'axios';

axios.defaults.withCredentials = true;


export default function UploadProdctPage() {

  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [releaseDate, setReleaseDate] = useState(null);
  const [images, setImages] = useState([]);
  
  
  const productNameChangeHandler = (e) => {
    setProductName(e.target.value)
  }

  const brandChangeHandler = (e) => {
    setBrand(e.target.value)
  }

  const priceChangeHandler = (e) => {
    setPrice(e.target.value)
  }

  const releaseDateChangeHandler = (e) => {
    setReleaseDate(e.target.value)
  }


  const updateImages = (newImages) => {
    setImages(newImages)
  }



  const submitHandler = (e) => {
    e.preventDefault();
    if(!productName || !brand || !price || !releaseDate || !images){
      return alert("모든 값을 넣어주셔야 합니다")
    }

    // 서버에 채운 값 보내기

    const body = {
      productName: productName,
      brand: brand,
      price: price,
      releaseDate: releaseDate,
      images:images
    }

    axios.post("https://localhost:4000/products/testadd", body)
      .then(response =>{
        console.log("add", response)
        if(response.data.success){
        
          alert('상품 업로드에 성공 했습니다')
        } else {
          alert('상품 업로드에 실패 했습니다')
        }
      })
  }

  // 2020-04-18T15:00:00.000Z


  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
      <div style={{ textAlign: 'center', marginBottom:'2rem' }}>
        <h2>상품 업로드</h2>
    </div>

    <Form onSubmit={submitHandler}>
      {/* DropZone */}
      <FileUpload updateImages={updateImages} />
       
      <br />
      <br />
      <label>제품명</label>
      <Input onChange={productNameChangeHandler} value={productName}/>
      <br />
      <br />
      <label>브랜드</label>
      <Input onChange={brandChangeHandler} value={brand}/>      
      <br />
      <br />
      <label>발매일자</label>
      <Input onChange={releaseDateChangeHandler} value={releaseDate}/>
      <br />
      <br />
      <label>가격</label>
      <Input onChange={priceChangeHandler} value={price}/>
      <br /> 
      <br />
      <Button type="submit" onClick={submitHandler}>확인</Button>
    </Form>

    </div>

  )
}


