import React from 'react'
import '../styles/TodoLoading.css'

const TodosError = ({ error}) => {
  return <p>Desesperate, hubo un error...</p>
}

const TodosLoading = () => {
  return (
  <>
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando TODOs...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando TODOs...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando TODOs...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  </>
  )
}

const TodosEmpty = () => {
  return <p>Crea tu primer TODO</p>
}



export { TodosError, TodosLoading, TodosEmpty }