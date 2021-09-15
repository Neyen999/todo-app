import React from 'react'
import '../TodoSearch.css'

export const TodoSearch = ({ searchValue, setSearchValue }) => {
  
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <input 
      className="TodoSearch" 
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  )
}
