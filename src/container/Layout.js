import React from 'react'
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

export const Layout = ({ 
    totalTodos, 
    completedTodos, 
    searchValue, 
    setSearchValue, 
    filterTodos,
    completeTodos,
    deleteTodos
  }) => {
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
          <TodoItem 
            key={i} 
            text={item.text} 
            completed={item.completed} 
            onComplete={() => completeTodos(item.text)}
            deleteTodos={() => deleteTodos(item.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}
