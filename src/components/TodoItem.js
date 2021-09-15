import React from 'react'
import '../styles/TodoItem.css'

export const TodoItem = ({ text, completed, onComplete, deleteTodos }) => {


  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active' }`}
        onClick={onComplete}
      >V</span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <span 
        className="Icon Icon-delete"
        onClick={deleteTodos}  
      >X</span>
    </li>
  )
}
