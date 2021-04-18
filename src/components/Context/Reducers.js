export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ALARM_SETTING = "ALARM_SETTING";
export const FETCH_PRODUCTS = "FATCH_PRODUCTS";

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
  console.log("알람 세팅 with id: " + productId);
}
const fetchProducts = (products, state) => {
  console.log("상품 불러오기");
  return { ...state, products }
}
export const shopReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case ALARM_SETTING:
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
      return Object.assign({}, state, {
        cartItems: [...state.cartItems.slice(0, idx), action.payload, 
        ...state.cartItems.slice(idx + 1)]
      });
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case FETCH_PRODUCTS:
      return fetchProducts(action.products, state);
    default:
      return state;
  }
};