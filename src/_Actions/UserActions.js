import axios from 'axios';
import {
    ADD_TO_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
    ALARM_SETTING
} from './Types';

const USER_SERVER = 'https://projectb1.com:4000';


// 토큰 설정하여 포스팅 하기
// 프롭스는 어디에?

// {
//     headers: { "Content-Type": "application/json" , "okCome": props.accessToken}, 
//   })

// export function addToCart(id, token) {
//     console.log("카트 받은값", id)
//     let body = {
//         productId: id
//     }

//     console.log(body)
//     const request = axios.post(`https://localhost:4000/products/addMyLIst`, body, 
//       {
//         headers: { "Content-Type": "application/json" , "okCome": token}
//       })
//         .then(response => 
//             console.log("장바구니",response.data))

//     return {
//         type: ADD_TO_CART,
//         payload: request
//     }
// }

// export function getCartItems(cartItems, userCart) {

//     const request = axios.get(`${USER_SERVER}/users/myList`)
//         .then(response => {
//             console.log("test", userCart)
            // CartItem들에 해당하는 정보들을  
            // Product Collection에서 가져온후에 
            // Quantity 정보를 넣어 준다.
//             userCart.forEach(cartItem => {
//                 response.data.forEach((productDetail, index) => {
//                     if (cartItem.id === productDetail._id) {
//                         response.data[index].quantity = cartItem.quantity
//                     }
//                 })
//             })
//             return response.data;
//         });

//     return {
//         type: GET_CART_ITEMS,
//         payload: request
//     }
// }


export function removeCartItem(productId) {

    const request = axios.get(`/api/users/removeFromCart?id=${productId}`)
        .then(response => {
            //productInfo ,  cart 정보를 조합해서   CartDetail을 만든다. 
            response.data.cart.forEach(item => {
                response.data.productInfo.forEach((product, index) => {
                    if (item.id === product._id) {
                        response.data.productInfo[index].quantity = item.quantity
                    }

                })
            })
            return response.data;
        });

    return {
        type: REMOVE_CART_ITEM,
        payload: request
    }
}

export function alarmSetting(productId) {

    const request = axios.get(`/api/users/removeFromCart?id=${productId}`)
        .then(response => {
            response.data.cart.forEach(item => {
                response.data.productInfo.forEach((product, index) => {
                    if (item.id === product._id) {
                        response.data.productInfo[index].quantity = item.quantity
                    }

                })
            })
            return response.data;
        });

    return {
        type: REMOVE_CART_ITEM,
        payload: request
    }
}