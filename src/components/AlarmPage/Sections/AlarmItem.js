import React, { useState } from 'react'
import axios from "axios";
import { Switch, Button } from "@chakra-ui/react" 
import swal from "sweetalert"; 


export default function AlarmItem({ item, handleDelete, accessToken}) {


  // const accessToken = window.localStorage.getItem('userToken')

      const alarmSetting = (productId) => {
        
        console.log("알람설정")
        let body = {
          productId: item.productId,
        }
        console.log("바디가뭐야", body)
        axios.post(`https://projectb1.com:4000/products/changeAlarm`, body, 
        {
        headers: {"okCome": accessToken}
      })
      .then(response => {
            console.log(response.data.data.myList);
        const myList = response.data.data.myList;
        const alarmProduct = myList.filter((el) => el.productId === item.productId)
        console.log("알람프로덕트", alarmProduct)
          if(alarmProduct[0].alarm === true){
            swal({
              title: "Good job!",
              text: "발매 하루 전에 메일로 발송됩니다.",
              icon: "success",
            });     
          }else{
             swal("Oops", "알람 설정이 취소되었습니다.", "error")
          }        
       });
    }

    // response.data.data.myList
  
  return (
    <div>
      <div>
        {<img src ={`https://projectb1.com:4000/${item.images[0]}`}/>}
        <h2>{item.releaseString}</h2>
        <h2>{item.productName}</h2>
        <Switch defaultChecked="true" 
        onChange={alarmSetting}></Switch> 
        <Button onClick={() => {handleDelete(item.productId)}}> 삭제 </Button>
      </div>    
    </div>
  )
}

 
