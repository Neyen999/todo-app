import React from 'react'
import '../styles/TodoList.css'

export const TodoList = ({children}) => {
  return (
    <ul>
      {children}
    </ul>
  )
}
