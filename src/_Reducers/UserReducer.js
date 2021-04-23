import {
    ADD_TO_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
} from '../_Actions/Types';
export default function (state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    cart: action.payload
                }
            }
        case GET_CART_ITEMS:
            return { ...state, cartDetail: action.payload }
        case REMOVE_CART_ITEM:
            return {
                ...state, cartDetail: action.payload.productInfo,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                }
            }
        default:
            return state;
    }
}