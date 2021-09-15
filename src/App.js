import React, { useState } from 'react'
import { Layout } from './container/Layout';

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de intro a react", completed: false},
  { text: "Llorar con la llorona", completed: false}
]

function App() {

  const [todos, setTodos] = useState(defaultTodos)

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

    setTodos(newTodos)
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]

    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <Layout 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filterTodos={filterTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}  
    />
  );
}

export default App;
