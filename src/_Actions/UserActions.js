import axios from 'axios';
import {
    ADD_TO_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
    ALARM_SETTING
} from './Types';
const USER_SERVER = 'https://projectb1.com:4000';
// 토큰 필요, productId
export function removeCartItem(productId) {
    const request = axios.get("https://localhost:4000/products/myList")
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
            response.data.forEach(item => {
                response.data.productId.forEach((product, index) => {
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