import React, { useEffect, useState } from 'react'
import { Switch, Button } from "antd"
import axios from "axios";
import Toast from '../LandingPage/Sections/Toast'

function AlarmPage(props) {
    console.log("상품 잘 겟하는지", props)
    
    const [AlarmList, setAlarmList] = useState([])
    const [LeftDay, setLeftDay] = useState("")

    useEffect(() => {
        axios.get("https://localhost:4000/products/myList",{
        headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
      })
        .then(response => {
            console.log("알림리스트",response.status)
            if (response.status === 200) {
                setAlarmList(response.data.data)
                setLeftDay(response.data.leftDay)
            }
        })
    },[])

    const alarmSetting = (productId) => {
        console.log("알람설정")
        let body = {
        productId: productId
        }
        axios.patch(`https://localhost:4000/products/changeAlarm`, body, {
        headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
      })
          .then(response => {
            console.log(response.data);
          });
    }


    const handleDelete = (productId) => {
        console.log("삭제버튼")
        axios.delete(`https://localhost:4000/products/removeAlarm?productId=${productId}`, {
        headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
      })
          .then(response => {
            console.log(response.data);
          });
    }

    const renderCards = AlarmList.map((data, index) => {
        console.log("저장된 각 제품 불러오는지", data)
        const key={index}
        return <div>
            <div>
                {<img src ={`https://projectb1.com:4000/${data.images}`}/>}

                <h2>{data.releaseString}</h2>
                <h2>{data.productName}</h2>
                <Switch onChange={alarmSetting}></Switch>
                <Button onClick={handleDelete}> 삭제 </Button>
             </div>
            </div>
    })
    
        return (
            <div style={{ width: '85%', margin: '3rem auto' }}>
                <h1>알림 리스트 페이지</h1>
                <h2>{LeftDay}일 뒤,</h2>
                <div>
                    {renderCards}
                </div>

            </div>
        )
    }

export default AlarmPage
