import React from 'react';
import { AppUI } from './AppUI';
import { ModalProvider, TodoProvider } from './context';


function App() {
  return(
    <TodoProvider>
      <ModalProvider>
        <AppUI />
      </ModalProvider>
    </TodoProvider>
  )
}

export { App };