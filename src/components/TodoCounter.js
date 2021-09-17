import React, { useContext } from 'react'
import { Context } from '../context'
import '../styles/TodoCounter.css'

export const TodoCounter = () => {

  const { totalTodos, completedTodos } = useContext(Context)

  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos > 0 ? totalTodos : "0"} TODOs</h2>
  )
}
