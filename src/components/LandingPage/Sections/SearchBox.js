import React, { useState } from "react";
// import "../../SearchBox.css"
import { Input, Flex, Badge, Box, Tooltip  } from "@chakra-ui/react"
// import { Input } from "antd"

// const { Search } = Input;

export default function SearchBox({ updateSearchTerm }){

  const [searchTerm, setSearchTerm] = useState("")
  // const [click, setClick] = useState(false);

  const searchHandler = (event) => {
    setSearchTerm(event.target.value)
    updateSearchTerm(event.target.value)
  
  }
  
  // const handleClick = () => setClick(!click);

  return(
    <div style={{ width: '100%', margin: '1rem auto' }}>
      {/* <Badge
          borderRadius="full" 
          px="2"
          mt="4"
          fontSize="lg"
          colorScheme="yellow">
            핫 아이템을 검색해 보세요!
      </Badge> */}
      <Box>
      <Tooltip label="원하는 제품을 검색해 보세요!" aria-label="A tooltip">
      <Input
        mt="4"
        placeholder="예) nike"
        // size="lg"
        variant="filled"
        onChange={searchHandler}
        style={{ width: 288}}
        value={searchTerm}
      />
      </Tooltip>
      </Box>
    </div>
  )
}