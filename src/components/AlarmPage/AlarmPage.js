import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
// import { getCartItems, removeCartItem } from '../../_Actions/UserActions';
import UserCardBlock from './Sections/UserCardBlock';
import { Result } from 'antd';
import axios from "axios";
import Interaction from "../LandingPage/Sections/Interaction";


// 프롭스로 받을게 없음
function AlarmPage(props) {
    console.log("상품 잘 겟하는지", props)
    // const dispatch = useDispatch(getCartItems);
    

    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)

    // useEffect(() => {

    // useEffect(() => {
    //     let myList = []
    //     //리덕스 User state안에 cart 안에 상품이 들어있는지 확인 
    //     if (userData && user.userData.myList) {
    //         if (userData.cart.length > 0) {
    //             user.userData.cart.forEach(item => {
    //                 cartItems.push(item.id)
    //             })
    //             dispatch(getCartItems(cartItems, user.userData.cart))
    //                 .then(response => { calculateTotal(response.payload) })
    //         }
    //     }
    // }, [user.userData])


    useEffect(() => {
        axios.get("https://localhost:4000/products/myList",{
        headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
      })
        .then(response => console.log("알림리스트",response.data))
    })

    let calculateTotal = (cartDetail) => {
        let total = 0;

        cartDetail.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        })

        setTotal(total)
        setShowTotal(true)

    }


    // let removeFromCart = (productId) => {

    //     dispatch(removeCartItem(productId))
    //         .then(response => {

    //             if (response.payload.productInfo.length <= 0) {
    //                 setShowTotal(false)
    //             }

    //         })

    // }

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h1>알림 리스트 페이지</h1>

            <div>
                {/* <UserCardBlock products={props.user.cartDetail} removeItem={removeFromCart} /> */}
            </div>

            {ShowTotal ?
                <div style={{ marginTop: '3rem' }}>
                    <h2>Total Amount: ${Total}</h2>
                </div>
                : ShowSuccess ?
                    <Result
                        status="success"
                        title="Successfully Purchased Items"
                    />
                    :
                    <>
                        <br />
                        <Interaction description={false} />
                    </>
            }

        </div>
    )
}

export default AlarmPage
