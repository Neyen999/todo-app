import React from 'react'
import { TodoProvider } from './context';
import { Layout } from './container/Layout';


function App() {

  

  return (
    <TodoProvider>
      <Layout />
    </TodoProvider>
  );
}

export default App;
