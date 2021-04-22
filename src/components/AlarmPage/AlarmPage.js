import React, { useEffect, useState } from 'react'
import axios from "axios";
import Toast from '../LandingPage/Sections/Toast'
import AlarmItem from './Sections/AlarmItem';

function AlarmPage({ accessToken }) {
 
  const [alarmList, setAlarmList] = useState([])
  const [leftDay, setLeftDay] = useState("")
  const [productName, setProductName] = useState("")

  useEffect(() => {
    axios
      .get("https://projectb1.com:4000/products/myList",{
        headers: { "Content-Type": "application/json" , "okCome": accessToken}
      })
      .then(response => {
        if(response.status === 200){
          setAlarmList(response.data.data)
          setLeftDay(response.data.data[0].leftDay)
          setProductName(response.data.data[0].productName)
        }
      })
  },[])

  const handleDelete = (productId) => {
        
  axios.delete(`https://projectb1.com:4000/products/removeAlarm?productId=${productId}`, {
    headers: { "Content-Type": "application/json" , "okCome": accessToken}
  })
  .then(response => {
    console.log("삭제버튼누른뒤", response.data.data.myList);
    setAlarmList(response.data.data.myList)
  });
}

return (
  <div style={{ width: '85%', margin: '3rem auto' }}>
    <h1>알림 리스트 페이지</h1>
        <h2>{leftDay}일 뒤,</h2>
        <h2>{productName}가 발매됩니다.</h2>
          <div className="alarmList-container">
             {!alarmList.length ? (
                <div className="alarmList-text">
                  알림리스트에 아이템이 없습니다.
                </div>
                ) : (
                  <div className="alarmList">
                    {alarmList.map((data, idx) => {
                      return <AlarmItem 
                               key={idx}
                               item={data}
                               handleDelete={handleDelete}
                               accessToken={accessToken}
                           />
                        })}
                      </div>
                    )}
                </div>
            </div>
        )
    }

export default AlarmPage    
