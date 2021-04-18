// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useHistory, withRouter } from "react-router-dom";
// import { Button } from 'antd';
// import axios from "axios"
// // import { connect } from 'react-redux';
// import ProductContext from "../Context/ProductContext";
// import MainNavigation from "../MainNavigation";
// // import { addProductToCart } from '../store/actions';
// import "./Products.css";


// const ProductsPage = props => {

//   useEffect(() => {
//     axios.get("https://localhost:4000/products/filterProductList", {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     .then((res) => {
//       console.log("제품들", res.data)
//       setProducts(res.data)
//     })
//   }, [])
//    const [products, setProducts] = useState([]);
//     const context = useContext(ProductContext);
//     useEffect(() => {
//     console.log(context);
//     }, []);
//    const [click, setClick] = useState(false);
//    const history = useHistory();
//    const handleClick = () => setClick(!click);
//   return (
//     <ProductContext.Consumer>
//       {context => (
//         <React.Fragment>
//           <MainNavigation
//             cartItemNumber={context.cart.reduce((count, curItem) => {
//               return count + curItem.quantity;
//             }, 0)}
//           />
//           <main className="products">
//             <ul>
//               {context.products.map(product => (
//                 <li key={product.id}>
//                   <div>
//                     <strong>{product.date}</strong> - {product.productname}
//                   </div>
//                   <div>
//                     <Button
//                       onClick={context.addProductToCart.bind(this, product)}
//                     >
//                       발매 상품 저장
//                     </Button>
//                     <Link
//                     exact
//                     to={`/product/${product.id}`}
//                     onClick={handleClick}>
//                         상세정보 확인하기
//                     </Link>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </main>
//         </React.Fragment>
//       )}
//     </ProductContext.Consumer>
//   );
// };
// // const mapStateToProps = state => {
// //   return {
// //     products: state.products,
// //     cartItemCount: state.cart.reduce((count, curItem) => {
// //       return count + curItem.quantity;
// //     }, 0)
// //   };
// // };
// // const mapDispatchToProps = dispatch => {
// //   return {
// //     addProductToCart: product => dispatch(addProductToCart(product))
// //   };
// // };
// export default withRouter(ProductsPage);


// import React, { useState, useEffect, useContext, useReducer } from 'react';
// import { Link, useHistory, withRouter } from "react-router-dom";
// import { Button } from 'antd';
// import axios from "axios"
// import { connect } from 'react-redux';
// import ProductContext from "../Context/ProductContext";
// import MainNavigation from "../MainNavigation";

// import {ProductsDispatch, productsReducer} from '../../contexts/ProductsContext';

// import { addProductToCart } from '../store/actions';
// import "./Products.css";


// const ProductsPage = props => {


//   const [products, setProducts] = useState([]);
//   const [click, setClick] = useState(false);
//   const history = useHistory();
//   const handleClick = () => setClick(!click);

  // const [ productsState, dispatch ] = useReducer(productsReducer, {products: []});


 
  
  

  // useEffect(() => {
  //   axios.get("https://localhost:4000/products/filterProductList", {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then((res) => {
  //     console.log("제품들", res.data)
  //    setProducts(res.data.data)

  // }, [])
  
  // const test = useContext(ProductContext);
  // console.log(test)
   
 //  const [click, setClick] = useState(false);
  // const history = useHistory();
  // const handleClick = () => setClick(!click);
 
  // return (
    // <ProductContext.Consumer>
    //   {context => (
    //     <React.Fragment>
    //       <MainNavigation
    //         cartItemNumber={context.cart.reduce((count, curItem) => {
    //           return count + curItem.quantity;
    //         }, 0)}
    //       />

          // <main className="products">
          //   <ul>
             
          //     {props.products.map(product => (
          //       <li key={product.id}>
          //         <div>
          //           <strong>{product.releaseString}</strong> - {product.productName}
          //         </div>
          //         <div>
          //           <Button
          //             onClick={context.addProductToCart.bind(this, product)}
          //           >
          //             발매 상품 저장
          //           </Button>
                    /* <Link
                    exact
                    to={`/product/${product._id}`}
                    onClick={handleClick}>
                        상세정보 확인하
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </main> */
         /* </React.Fragment>
    )}
    </ProductContext.Consumer>
  );
}; */
// const mapStateToProps = state => {
//   return {
//     products: state.products,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     addProductToCart: product => dispatch(addProductToCart(product))
//   };
// };
// export default withRouter(ProductsPage);