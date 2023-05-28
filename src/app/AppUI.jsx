import React from 'react';
import { Modal } from 'app/components/Modals';
import { TodoForm } from 'app/components/Forms'
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateButton, LoadingTodos, Navbar } from 'app/components';
import { ModalContext, TodoContext } from 'app/context';
import './App.scss';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        unCompleteTodo,
        deleteTodo,
        todos
    } = React.useContext(TodoContext);
    const {
        openModal,
        setOpenModal
    } = React.useContext(ModalContext)
    return (
        <>
            <Navbar />
            <TodoCounter />

            <div className="container">
                <TodoSearch />
                <TodoList>
                    {error ? (
                        <p className="advice">Something went wrong, please try again later...</p>
                    ) : (
                        searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                unComplete={() => unCompleteTodo(todo.text)}
                                deleteTodo={() => deleteTodo(todo.text)}
                            />
                        ))
                    )}

                    {loading ? [
                        <LoadingTodos key="1" />,
                        <LoadingTodos key="2" />,
                        <LoadingTodos key="3" />,
                    ]
                        : todos.length === 0 ? (
                            <p className="advice">Come on, ejaculate your mind, create some todos.</p>
                        ) : (
                            ''
                        )}
                </TodoList>
            </div>
            <CreateButton />

            {openModal ?
                <Modal>
                    <TodoForm />
                </Modal>
                :
                ''
            }
        </>
    );
}

export { AppUI };