import React from 'react'
import '../styles/TodoItem.css'
import { TodoIcon } from './TodoIcon'

export const TodoItem = ({ text, completed, onComplete, deleteTodos }) => {


  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active' }`}
        onClick={onComplete}
      ><TodoIcon type="completed"/></span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <span 
        className="Icon Icon-delete"
        onClick={deleteTodos}  
      ><TodoIcon type="delete"/></span>
    </li>
  )
}
