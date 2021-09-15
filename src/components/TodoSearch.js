import React, { useState } from 'react'
import '../TodoSearch.css'

export const TodoSearch = () => {

  const [searchValue, setSearchValue] = useState("")
  
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  return [
    <input 
      className="TodoSearch" 
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>
  ]
}
