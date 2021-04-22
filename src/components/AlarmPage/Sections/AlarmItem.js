import React, { useState } from 'react'
import axios from "axios";
 import { Switch, Button } from "@chakra-ui/react" 
 


export default function AlarmItem({ item, handleDelete}) {


  const accessToken = window.localStorage.getItem('userToken')

      const alarmSetting = (productId) => {
        
        console.log("알람설정")
        let body = {
          productId: productId,
        }
        axios.post(`https://projectb1.com:4000/products/changeAlarm`, body, 
        {
        headers: {"okCome": accessToken}
      })
      .then(response => {
            console.log(response);
      });
    }
  

  return (
    <div>
      <div>
        {<img src ={`https://projectb1.com:4000/${item.images}`}/>}
        <h2>{item.releaseString}</h2>
        <h2>{item.productName}</h2>
          <Switch defaultChecked="true" 
        onChange={alarmSetting}></Switch> 
        <Button onClick={() => {handleDelete(item.productId)}}> 삭제 </Button>
      </div>    
    </div>
  )
}

 
