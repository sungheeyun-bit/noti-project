import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';  

axios.defaults.withCredentials = true;

export default function FileUpload({ updateImages }) {

  const [images, setImages] = useState([])
 
  const dropHandler = (files) => {
     
    let formData = new FormData();
    const config = {
      header: {'Content-Type': 'multipart/form-data'}
    }
    formData.append("file", files[0])
 
    axios.post('https://localhost:4000/products/image', formData, config)
      .then(response => {
        if(response.data.success){
           console.log("사진업로드", response.data)
           setImages([...images, response.data.filePath])
           updateImages([...images, response.data.filePath])
          }else {
          alert('파일을 저장하는데 실패했습니다')
        }
      })
  }



  const deleteHandler = (image) => {
    const currentIndex = images.indexOf(image)
    let newImages = [...images]
    newImages.splice(currentIndex, 1) 
    setImages(newImages)
    updateImages(newImages)
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <Dropzone onDrop={dropHandler}>
        {({getRootProps, getInputProps}) => (        
            <div 
              style={{
                width: 300, height: 240, border: '1px solid lightgray',
                display: 'flex', alignItems:'center', justifyContent: 'center'
              }}            
              {...getRootProps()}>
              <input {...getInputProps()} />
              <i class="fas fa-plus" style={{ fontSize: '3rem'}}></i>
            </div>         
        )}
      </Dropzone>
      
      <div style={{display: 'flex', width: '350px', height:'240px', overflowX: 'scroll'}}>

        {images.map((image, index) => (
          <div onClick={()=> deleteHandler(image)} key={index}>
            <img style={{ minWidth: '300px', width:'300px', height: '240px' }}
                 src={`https://localhost:4000/${image}`} />
          </div>
        ))}

      </div>
    </div>
  )
}
