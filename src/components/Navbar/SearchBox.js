import React, { useState } from "react";
import "../../SearchBox.css"

export default function SearchBox({ updateSearchTerm }){

  const [searchTerm, setSearchTerm] = useState("")
  const [click, setClick] = useState(false);

  const searchHandler = (event) => {
    console.log("이벤트", event.target.value)
    setSearchTerm(event.target.value)
    updateSearchTerm(event.target.value)
  }
  
  const handleClick = () => setClick(!click);

  return(
    <div>
        <form>
          <input 
            type="text" 
            className="search-box" 
            placeholder="Search"
            onChange={searchHandler}
            value={searchTerm}
            required
            />
            <button 
              type="submit" 
              className="fas fa-search"
              ></button>
          </form>
          <div className="search-icon" onClick={handleClick}>
            <i className="fas fa-search" style={{ fontSize:"1.6rem"}}></i>
          </div>
    </div>
  )
}
// 온클릭되면 토글나오게 코드작성해야함
