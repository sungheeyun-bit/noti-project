import React, { useState } from "react";
// import { Input } from "@chakra-ui/react"
// import "../../SearchBox.css"
import { Input } from 'antd';

const { Search } = Input;

export default function SearchBox({ updateSearchTerm }){

  const [searchTerm, setSearchTerm] = useState("")
  // const [click, setClick] = useState(false);

  const searchHandler = (event) => {
    setSearchTerm(event.target.value)
    updateSearchTerm(event.target.value)
  
  }
  
  // const handleClick = () => setClick(!click);

  return(
    <div>
      <Search 
        placeholder="Search"
        onChange={searchHandler}
        style={{ width: 200}}
        value={searchTerm}
      />
        {/* <form>
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
        </form> */}
        {/* <div className="search-icon" onClick={handleClick}>
          <i className="fas fa-search" style={{ fontSize:"1.3rem"}}></i>
        </div> */}
    </div>
  )
}