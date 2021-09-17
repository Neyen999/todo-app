import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
console.log(TiDelete)

export const TodoIcon = ({ type, onClick }) => {
  return (
    <span 
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
    {type === "completed" && <FaCheck />}
    {type === "delete" && <TiDelete />}
    </span>
  )
}
