import React, { useContext } from 'react'
import { Context } from '../context';
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoForm } from '../components/TodoForm';
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from '../modal';

import { TodosError, TodosLoading, TodosEmpty } from '../components/TodosStates';

export const Layout = () => {

  const {
    error, 
    loading, 
    filterTodos, 
    completeTodos, 
    deleteTodos,
    openModal,
    setOpenModal
   } = useContext(Context)

  return (
    <>    
      <TodoCounter />

      <TodoSearch />
      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !filterTodos.length) && <TodosEmpty />}
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

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}


      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </>
  )
} 