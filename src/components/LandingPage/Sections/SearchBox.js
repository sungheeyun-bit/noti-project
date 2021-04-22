import React, { useState } from "react";
import { Input } from 'antd';

const { Search } = Input;

export default function SearchBox({ updateSearchTerm }){

  const [searchTerm, setSearchTerm] = useState("")

  const searchHandler = (event) => {
    setSearchTerm(event.target.value)
    updateSearchTerm(event.target.value)
  
  }  

  return(
    <div>
      <Search 
        placeholder="Search"
        onChange={searchHandler}
        style={{ width: 200}}
        value={searchTerm}
      />
    </div>
  )
}