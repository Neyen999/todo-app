import React from 'react'
import '../TodoItem.css'

export const TodoItem = ({ text, completed }) => {

  const onComplete = () => {
    alert('Ya completaste el TODO ' + text)
  }

  const onDelete = () => {
    alert('Borraste el TODO ' + text)
  }

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active' }`}
        onClick={onComplete}
      >V</span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <span 
        className="Icon Icon-delete"
        onClick={onDelete}  
      >X</span>
    </li>
  )
}
