export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ALARM_SETTING = "ALARM_SETTING";

// 유저 액션
const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};


const removeProductFromCart = (productId, state) => {
  console.log("Removing product with id: " + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const alarmSetting = (productId, state) => {
  console.log("알람 세팅 with done: " + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

// 유저 리듀서
export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);

    case ALARM_SETTING:
      return alarmSetting(action.productId, state);

    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
};


// export const shopReducer = (state, action) => {
//   switch (action.type) {
//     case 'GET_PRODUCTS':
//       return {
//         ...state,
//         products: loadingState
//       };
//     case 'GET_PRODUCTS_SUCCESS':
//       return {
//         ...state,
//         products: success(action.data)
//       };
//     case 'GET_PRODUCTS_ERROR':
//       return {
//         ...state,
//         products: error(action.error)
//       };
//     case 'GET_PRODUCT':
//       return {
//         ...state,
//         product: loadingState
//       };
//     case 'GET_PRODUCT_SUCCESS':
//       return {
//         ...state,
//         product: success(action.data)
//       };
//     case 'GET_PRODUCT_ERROR':
//       return {
//         ...state,
//         product: error(action.error)
//       };
//     default:
//       throw new Error(`Unhanded action type: ${action.type}`); 
//   }
// }