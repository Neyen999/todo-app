import React from 'react'
import '../TodoList.css'

export const TodoList = ({children}) => {
  return (
    <ul>
      {children}
    </ul>
  )
}
