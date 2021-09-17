import React, { useContext } from 'react'
import { Context } from '../context';
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoForm } from '../components/TodoForm';
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from '../modal';

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

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}


      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </>
  )
} 