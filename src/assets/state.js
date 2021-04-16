export const initialState = {
  "product" : [
    {
    'id':'abcd',
    'productName':'nike 덩크',
    'brand':'nike',
    'price':'300000',
    'tag':['nike','조던','신발'],
    'releaseDate': '2021/04/07',
    'comment':[
        {'id':'commentObjectId',
        'nickName':'jemins',
        'goodUsers':['mins','parks'],
        'goodCount':5,
        'content':'이거 진짜 사고싶어요'}
    ],
    'images':[
      "../images/nike1.jpg",
      "../images/nike2.jpg",
      "../images/nike3.jpg"
     ]
    }   
  ],
   "user" : {
    "id": "ObjectId",
    "email": "parkjm51495@gmail.com",
    "password": "abcd1234",
    "nickName":"jemins",
    "token":"token",
    "tokenexp":400,
    "mylist":[{
        "id":"mylistObjectId",
        "productName":'nike 조던',
        "tag":["nike",'조던','신발'],        
        "releaseDate":"2021/04/07",
        "alarm":true,
        "alarmDate":"2021/04/06"
    }]
  }   
};