import React, { useState } from "react";
import "../../SearchBox.css"

export default function SearchBox({ updateSearchTerm }){

  const [searchTerm, setSearchTerm] = useState("")
  const [click, setClick] = useState(false);

  const searchHandler = (event) => {
    setSearchTerm(event.currentTarget.value)
    updateSearchTerm(event.currentTarget.value)
  }
  
  const handleClick = () => setClick(!click);

  return(
    <div>
        <form>
            <input 
            type="search" 
            className="search-box" 
            placeholder="Search"
            onChange={searchHandler}
            value={searchTerm}
            required
            />
            <button type="submit" className="fas fa-search"></button>
          </form>
          <div className="search-icon" onClick={handleClick}>
            <i className="fas fa-search" style={{ fontSize:"1.6rem"}}></i>
          </div>
    </div>
  )
}
// 온클릭되면 토글나오게 코드작성해야함
