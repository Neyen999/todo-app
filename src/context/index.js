import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

const Context = React.createContext();


const TodoProvider = ({children}) => {
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length; // !! Quiere decir doble falso, osea true
  const totalTodos = todos.length;


  const filterTodos = todos.filter((todo) => (
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ))


  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
      
    const newTodos = [...todos]

    newTodos[todoIndex].completed = true

    saveTodos(newTodos)
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <Context.Provider value={{
      error,
      loading,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      filterTodos,
      completeTodos,
      deleteTodos
    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, TodoProvider }