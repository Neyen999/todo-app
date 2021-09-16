import React, { useState } from 'react'
import { Layout } from './container/Layout';
import { useLocalStorage } from './hooks/useLocalStorage';

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de intro a react", completed: false},
  { text: "Llorar con la llorona", completed: false}
]


function App() {

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
    <Layout
      error={error}
      loading={loading} 
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
