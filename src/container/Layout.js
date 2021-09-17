import React from 'react'
import { Context } from '../context';
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

export const Layout = () => {
  return (
    <>
      <Context.Consumer >
        {({filterTodos, completedTodos}) => (
          
          <TodoCounter total={filterTodos} completed={completedTodos} />
        
        )}
      </Context.Consumer>

      <Context.Consumer>
        {({searchValue, setSearchValue}) => (

          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

        )}
      </Context.Consumer>   
      <Context.Consumer>
        {({error, 
           loading, 
           filterTodos, 
           completeTodos, 
           deleteTodos
          }) => (
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
        )}
      </Context.Consumer>
      <CreateTodoButton />
    </>
  )
}
