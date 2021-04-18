import React, { useState } from "react";
import "../../SearchBox.css"

export default function SearchBox({ updateSearchTerm }){

  const [searchTerm, setSearchTerm] = useState("")
  const [click, setClick] = useState(false);

  const searchHandler = (event) => {
    // console.log("이벤트", event.target.value)
    setSearchTerm(event.target.value)
    // updateSearchTerm(event.target.value)
   // console.log("타겟", event.currentTarget)
  }
  
  const handleClick = () => setClick(!click);

  return(
    <div>
        {/* <form> */}
          <input 
            type="text" 
            className="search-box" 
            placeholder="Search"
            onChange={searchHandler}
            value={searchTerm}
            required
            />
          <input 
            type="button" 
            className="fas fa-search"
            onClick={() => updateSearchTerm(searchTerm)}
          />
        {/* </form> */}
        <div className="search-icon" onClick={handleClick}>
          <i className="fas fa-search" style={{ fontSize:"1.3rem"}}></i>
        </div>
    </div>
  )
}
// 온클릭되면 토글나오게 코드작성해야함



// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import TextField from "@material-ui/core/TextField";
// import { Input, Button } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import "../../SearchBox.css"

// export default function SearchBox () {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);


  // const ProductDetail = props => {
  //   const { releaseString, productName } = props;
  //   return (
  //     <>
        {/* <p>
          <img src={img} alt={name} style={{ width: "20px", height: "20px" }} />
        </p> */}
        {/* <p>{productName}</p>
        <p>{releaseString}</p>
      </>
    );
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://localhost:4000/products/searchProduct")
      .then(res => {
        console.log("필터가 된 제품", res.data)
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

    useEffect(() => {
      setFilteredProducts(
        products.filter(product =>
          product.brand.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, [search, products]);

    if (loading) {
      return <p>제품을 검색 중입니다...</p>;
    } */}

  //   return (
  //     <div className="SearchBox">
  //       <Input
  //         onChange={e => setSearch(e.target.value)}
  //         placeholder="ex) 나이키"
  //       />
  //       {filteredProducts.map((product, idx) => (
  //         <ProductDetail key={idx} {...product} />
  //       ))}
  //       <Button 
  //         type="primary" 
  //         shape="circle" 
  //         icon={<SearchOutlined />} />
  //     </div>
  //   );
  // }

//   export default SearchBox;
//   const searchHandler = (event) => {
//     console.log("이벤트", event.target.value)
//     setSearchTerm(event.target.value)
//     updateSearchTerm(event.target.value)
//   }
  
//   const handleClick = () => setClick(!click);

//   return(
//     <div>
//         <form>
//           <input 
//             type="text" 
//             className="search-box" 
//             placeholder="Search"
//             onChange={searchHandler}
//             value={searchTerm}
//             required
//             />
//             <button 
//               type="submit" 
//               className="fas fa-search"
//               onClick={searchHandler}
//               ></button>
//           </form>
//           <div className="search-icon" onClick={handleClick}>
//             <i className="fas fa-search" style={{ fontSize:"1.6rem"}}></i>
//           </div>
//     </div>
//   )
// }



