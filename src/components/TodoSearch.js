import React, { useContext } from 'react'
import { Context } from '../context'
import '../styles/TodoSearch.css'

export const TodoSearch = () => {
  
  const { searchValue, setSearchValue } = useContext(Context)

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
