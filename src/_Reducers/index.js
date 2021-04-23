import { combineReducers } from 'redux';
import user from './UserReducer';
// import { cart } from './UserReducer';
const rootReducer = combineReducers({
    user,
});
// const rootReducer = combineReducers({
//     cart,
// });
export default rootReducer;