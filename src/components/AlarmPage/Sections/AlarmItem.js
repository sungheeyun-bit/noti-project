import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Button } from "@chakra-ui/react"
export default function AlarmItem({ item, handleDelete, accessToken }) {
  const [alarmList, setAlarmList] = useState([false])    
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
          if(response.data === true) {
            setAlarmList()
          } else {
              alert("알림 설정 완료")
            }
      });
    }
  return (
    <div>
      <div>
        {<img src ={`https://projectb1.com:4000/${item.images}`}/>}
        <h2>{item.releaseString}</h2>
        <Switch defaultChecked="true"
                onChange={alarmSetting}></Switch>
        <Button onClick={() => {handleDelete(item.productId)}}> 삭제 </Button>
      </div>    
    </div>
  )
}
 