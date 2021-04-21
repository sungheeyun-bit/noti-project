import React from 'react'
import axios from "axios";
import { Switch, Button } from "antd"
 


export default function AlarmItem({ item, handleDelete, accessToken }) {

      const alarmSetting = (productId) => {
        console.log("알람설정")
        let body = {
          productId: productId
        }
        axios.patch(`https://projectb1.com:4000/products/changeAlarm`, body, 
        {
        headers: { "Content-Type": "application/json" , "okCome": accessToken}
      })
      .then(response => {
            console.log(response.data);
      });
    }
  

  return (
    <div>
      <div>
        {<img src ={`https://projectb1.com:4000/${item.images}`}/>}
        <h2>{item.releaseString}</h2>
        <h2>{item.productName}</h2>
        <Switch onChange={alarmSetting}></Switch>
        <Button onClick={() => {handleDelete(item.productId)}}> 삭제 </Button>
      </div>    
    </div>
  )
}

 
