import React, { useContext } from 'react'
import { Context } from '../context';
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

export const Layout = () => {

  const {
    error, 
    loading, 
    filterTodos, 
    completeTodos, 
    deleteTodos,
   } = useContext(Context)

  return (
    <>    
      <TodoCounter />

      <TodoSearch />
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !filterTodos.length) && <p>¡Crea tu primer TODO!</p>}
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