import React from 'react'
import '../TodoSearch.css'

export const TodoSearch = () => {
  
  const onSearchValueChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <input 
      className="TodoSearch" 
      placeholder="Cebolla"
      onChange={onSearchValueChange}
    />
  )
}
