// import React, { useEffect, useState } from 'react'
// import { Link, useHistory, withRouter } from "react-router-dom";
// import Interaction from "./Sections/Interaction";
// import Button from "./Sections/Button"
// import { useDispatch } from 'react-redux'
// import { FaCode } from "react-icons/fa";
// import axios from "axios";
// import { Icon, Col, Card, Row, Carousel } from 'antd';
// import Meta from 'antd/lib/card/Meta';
// import { addToCart } from "../../_Actions/UserActions";
// import SearchBox from "./Sections/SearchBox";


// // import ImageSlider from '../../utils/ImageSlider';
// // import Checkbox from './Sections/CheckBox';
// // import Radiobox from './Sections/RadioBox';
// import { continents, price } from './Sections/Datas';

// export default function LandingPage(props) {
//     console.log("랜딩 프롭스", props)
//     const dispatch = useDispatch()
//     const clickHandler = () => {
//         dispatch(addToCart(props))
//     }


//     const [ProductList, setProductList] = useState([])
//     const history = useHistory();
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);
    
//      const [searchTerm, setSearchTerm] = useState("")


//     useEffect(() => {
//         axios.get("https://localhost:4000/products/filterProductList")
//         // axios.get("https://projectb1.com:4000/products/filterProductList")
//             .then(response => {
//                 console.log("제품 정보", response.data)
//                 if (response.data.data) {
//                     setProductList(response.data.data)
//                 } else {
//                     alert(" 상품들을 가져오는데 실패 했습니다.")
//                 }
//             })

//     },[])

//     const updateSearchTerm = (newSearchTerm) => {
    
//       axios.get(`https://localhost:4000/products/searchProduct?searchTerm=${newSearchTerm}`,
//         {headers: {
//           "Content-Type": "application/json"
//         }})
//         .then(response => {
//           console.log("검색결과", response.data.data)
//           setProductList(response.data.data)
//       })  
//   }


    
//     const renderCards = ProductList.map((data, index) => {    

//         console.log("저장된 각 제품 불러오는지", data.releaseString)
//         return <Col lg={6} md={8} xs={24} key={index}>
            
//             <Card
//             // cover={<img src ={`https://localhost:4000/products/filterProductList${data.images}`}/>}
//             // cover={<img src ={`https://projectb1.com:4000/products/filterProductList/${data.images[0]}`}/>}
//             cover={<img src ={`https://projectb1.com:4000/${data.images[0]}`}/>}
//             // cover={<a href={`https://projectb1.com:4000/products/filterProductList${data.images}`}/>}
//         >

//             {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
//                 <Button size="large" shape="round" type="danger" onClick={clickHandler}>
//                     Add to Cart
//                 </Button>
//             </div> */}
//                 <h2>{data.releaseString}</h2>
//                 <h2>{data.productName}</h2>
//                 <Link
//                 exact
//                 to={`/product/${data._id}`}
//                 onClick={handleClick}>
//                  상세정보 확인하기
//             </Link>
//             <Button onClick={clickHandler}>
//                 저장
//             </Button>

//             </Card>
//         </Col>
//     })

//     return (
//         <div style={{ width: '75%', margin: '3rem auto' }}>

//              <div style={{ textAlign: 'center' }}>
//                 <h1>서비스 소개 콘텐츠</h1>
//                 <img></img>
//             </div>
//             <Interaction>
//             </Interaction>

//             <h1>최신발매정보</h1>
//             <SearchBox updateSearchTerm={updateSearchTerm} />
//             <br />
//             <Card
//             > 
//             </Card>

//             <Row gutter={[16, 16]} >
//                 {renderCards}
//             </Row>

//         </div>
//     )
// }



import React, { useEffect, useState } from 'react'
import { Link, useHistory, withRouter } from "react-router-dom";
import Interaction from "./Sections/Interaction";
// import Button from "./Sections/Button"
import { useDispatch } from 'react-redux'
import { FaCode } from "react-icons/fa";
import axios from "axios";
import { Icon, Col, Card, Row, Carousel } from 'antd';
import Meta from 'antd/lib/card/Meta';
// import { addToCart } from "../../_Actions/UserActions";
import SearchBox from "./Sections/SearchBox";


// import ImageSlider from '../../utils/ImageSlider';
// import Checkbox from './Sections/CheckBox';
// import Radiobox from './Sections/RadioBox';
import { continents, price } from './Sections/Datas';

export default function LandingPage(props) {
    console.log("랜딩 프롭스", props)

    const [ProductList, setProductList] = useState([])
    const history = useHistory();
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
     const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {
        axios.get("https://localhost:4000/products/filterProductList")
        // axios.get("https://projectb1.com:4000/products/filterProductList")
            .then(response => {
                console.log("제품 정보", response.data)
                if (response.data.data) {
                    setProductList(response.data.data)
                } else {
                    alert(" 상품들을 가져오는데 실패 했습니다.")
                }
            })

    },[])

    const updateSearchTerm = (newSearchTerm) => {
    
      axios.get(`https://localhost:4000/products/searchProduct?searchTerm=${newSearchTerm}`,
        {headers: {
          "Content-Type": "application/json"
        }})
        .then(response => {
          console.log("검색결과", response.data.data)
          setProductList(response.data.data)
      })  
  }

    // const dispatch = useDispatch()

    const addCart = (id) => {
      const goToList = ProductList.filter(product => {
          return product._id === id
      })
      console.log("클릭된제품", goToList)
      
     const body = goToList[0]
      
      axios.post(`https://localhost:4000/products/addMyLIst`, body, 
      {
        headers: { "Content-Type": "application/json" , "okCome": props.accessToken}
      })
        .then(response => 
            console.log("장바구니",response.data))

      
  }



    
    const renderCards = ProductList.map((data, index) => {    

        console.log("저장된 각 제품 불러오는지", data.releaseString)
        return <Col lg={6} md={8} xs={24} key={index}>
            
            <Card
            // cover={<img src ={`https://localhost:4000/products/filterProductList${data.images}`}/>}
            // cover={<img src ={`https://projectb1.com:4000/products/filterProductList/${data.images[0]}`}/>}
            cover={<img src ={`https://projectb1.com:4000/${data.images[0]}`}/>}
            // cover={<a href={`https://projectb1.com:4000/products/filterProductList${data.images}`}/>}
        >

            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    Add to Cart
                </Button>
            </div> */}
                <h2>{data.releaseString}</h2>
                <h2>{data.productName}</h2>
                <Link
                exact
                to={`/product/${data._id}`}
                onClick={handleClick}>
                 상세정보 확인하기
            </Link>
            <button onClick={addCart(data._id)}>
                저장
            </button>

            </Card>
        </Col>
    })

    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>

             <div style={{ textAlign: 'center' }}>
                <h1>서비스 소개 콘텐츠 {addCart}</h1>
                <img></img>
            </div>
            <Interaction>
            </Interaction>

            <h1>최신발매정보</h1>
            <SearchBox updateSearchTerm={updateSearchTerm} />
            <br />
            <Card
            > 
            </Card>

            <Row gutter={[16, 16]} >
                {renderCards}
            </Row>

        </div>
    )
}








