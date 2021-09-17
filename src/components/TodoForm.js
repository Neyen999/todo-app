import React, { useState, useContext } from 'react'
import { Context } from '../context'
import '../styles/TodoForm.css'

export const TodoForm = () => {

  const [newTodoValue, setNewTodoValue] = useState("")

  const {
    addTodo,
    setOpenModal
  } = useContext(Context)
  
  const onChange = (e) => {
    // TODO
    setNewTodoValue(e.target.value)
  }

  const onCancel = () => {
    // TODO
    setOpenModal(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  
  return (
    <form onSubmit={onSubmit}>
      <label>Añada algún TODO</label>
      <textarea 
        value={newTodoValue} 
        onChange={onChange} 
        placeholder="Cortar la cebolla para el almuerzo"
      >

      </textarea>
      <div className="TodoForm-buttonContainer">
        <button 
          type="button" 
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button 
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}
