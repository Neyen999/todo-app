import React from 'react'
import '../styles/CreateTodoButton.css'

export const CreateTodoButton = ({ setOpenModal, openModal }) => {

  const onClickButton = () => {
    setOpenModal(!openModal)
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => onClickButton()}
    >
      +
    </button>
  )
}
