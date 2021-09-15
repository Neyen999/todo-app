import React from 'react'
import '../CreateTodoButton.css'

export const CreateTodoButton = () => {

  const onClickButton = (msg) => {
    alert(msg)
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => onClickButton("Aqui se deberia abrir el modal")}
    >
      +
    </button>
  )
}
