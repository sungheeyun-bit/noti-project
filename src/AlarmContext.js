// const product = {
//       id:'productObjectId',
//       productName:'nike 조던',
//       brand:'nike',
//       price:'300000',
//       tag:["nike",'조던','신발'],
//       releaseDate:2021/04/07,
//       comment:[
//           {id:'commentObjectId',
//           nickName:'jemins',
//           goodUsers:['mins','parks'],
//           goodCount:5,
//           content:"이거 진짜 사고싶어요"}
//       ]
  
//   }


import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialList = [
  {
    id: 1,
    img: "../../IMG/조던1.jpeg",
    date: '04월 30일 발매',
    productname: "조던1",
    done: false
  },
  {
    id: 2,
    img: "../../IMG/조던1.jpeg",
    date: '05월 30일 발매',
    productname: "조던1",
    done: false
  },
  {
    id: 3,
    img: "../../IMG/조던1.jpeg",
    date: '06월 30일 발매',
    productname: "조던1",
    done: false
  },
  {
    id: 4,
    img: "../../IMG/조던1.jpeg",
    date: '07월 28일 발매',
    productname: "조던1",
    done: false
  }
];

function alarmReducer(state, action) {
  switch (action.type) {
    // case 'CREATE':
    //   return state.concat(action.alarm);
    case 'CHANGE':
      return state.map(alarm =>
        alarm.id === action.id ? { ...alarm, done: !alarm.done } : alarm
      );
    case 'REMOVE':
      return state.filter(alarm => alarm.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const AlarmStateContext = createContext();
const AlarmDispatchContext = createContext();
const AlarmNextIdContext = createContext();

export function AlarmProvider({ children }) {
  const [state, dispatch] = useReducer(alarmReducer, initialList);
  const nextId = useRef(5);

  return (
    <AlarmStateContext.Provider value={state}>
      <AlarmDispatchContext.Provider value={dispatch}>
        <AlarmNextIdContext.Provider value={nextId}>
          {children}
        </AlarmNextIdContext.Provider>
      </AlarmDispatchContext.Provider>
    </AlarmStateContext.Provider>
  );
}

export function useAlarmState() {
  const context = useContext(AlarmStateContext);
  if (!context) {
    throw new Error('Cannot find AlarmProvider');
  }
  return context;
}

export function useAlarmDispatch() {
  const context = useContext(AlarmDispatchContext);
  if (!context) {
    throw new Error('Cannot find AlarmProvider');
  }
  return context;
}

export function useAlarmNextId() {
  const context = useContext(AlarmNextIdContext);
  if (!context) {
    throw new Error('Cannot find AlarmProvider');
  }
  return context;
}





// import React, { createContext, useReducer, useContext } from 'react';
// import axios from 'axios';

// export async function getProducts(dispatch) {
//   dispatch({ type: 'GET_PRODUCTS' });
//   try {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//     dispatch({ type: 'GET_PRODUCTS_SUCCESS', data: response.data });
//   } catch (e) {
//     dispatch({ type: 'GET_PRODUCTS_ERROR', error: e });
//   }
// }

// export async function getProducts(dispatch, id) {
//   dispatch({ type: 'GET_PRODUCTS' });
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     dispatch({ type: 'GET_PRODUCTS_SUCCESS', data: response.data });
//   } catch (e) {
//     dispatch({ type: 'GET_PRODUCTS_ERROR', error: e });
//   }
// }

// const initialState = {
//   products: {
//     loading: false,
//     data: null,
//     error: null
//   },
//   product: {
//     loading: false,
//     data: null,
//     error: null
//   }
// };

// // 로딩중일 때 바뀔 상태 객체
// const loadingState = {
//   loading: true,
//   data: null,
//   error: null
// };

// // 성공했을 때의 상태 만들어주는 함수
// const success = data => ({
//   loading: false,
//   data,
//   error: null
// });

// // 실패했을 때의 상태 만들어주는 함수
// const error = error => ({
//   loading: false,
//   data: null,
//   error: error
// });

// // 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
// function productsReducer(state, action) {
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

// // State 용 Context 와 Dispatch 용 Context 따로 만들어주기
// const ProductsStateContext = createContext(null);
// const ProductsDispatchContext = createContext(null);

// // 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
// export function ProductsProvider({ children }) {
//   const [state, dispatch] = useReducer(productsReducer, initialState);
//   return (
//     <ProductsStateContext.Provider value={state}>
//       <ProductsDispatchContext.Provider value={dispatch}>
//         {children}
//       </ProductsDispatchContext.Provider>
//     </ProductsStateContext.Provider>
//   );
// }

// // State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
// export function useProductsState() {
//   const state = useContext(ProductsStateContext);
//   if (!state) {
//     throw new Error('Cannot find UsersProvider');
//   }
//   return state;
// }

// // Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
// export function useProductsDispatch() {
//   const dispatch = useContext(ProductsDispatchContext);
//   if (!dispatch) {
//     throw new Error('Cannot find UsersProvider');
//   }
//   return dispatch;
// }