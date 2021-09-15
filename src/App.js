import React, { useState } from 'react'
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

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

  return (
    <>
    <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
    />

    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    
    />
    <TodoList>
        {filterTodos.map((item, i) => (
          <TodoItem key={i} {...item} />
        ))}
    </TodoList>
    <CreateTodoButton />
    </>
  );
}

export default App;
