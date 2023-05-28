import React from 'react';
import { useLocalStorage } from 'app/hooks';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const [inputValue, setInputValue] = React.useState("")
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorage('TODOS_V1', [])
    const searchSuggestions = [
        "Know some girls",
        "Destroy some todos",
        "Untie your stepsis",
        "Blow some minds",
    ]
    const random = Math.floor(Math.random() * searchSuggestions.length)
    const newTodoPlaceholder = searchSuggestions[random]
    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            if (typeof todo === "number") {
                return todo
            }
            else {
                const todoText = todo.text.toLowerCase()
                const todoSearch = inputValue.toLowerCase()
                return todoText.includes(todoSearch)
            }
        }
    )

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false
        })
        saveTodos(newTodos)
    }

    const completeTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.text === text)
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const unCompleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.text === text)
        newTodos[todoIndex].completed = false
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.text === text)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const createButtonText = '+'

    return (
        <TodoContext.Provider value={{
            inputValue,
            setInputValue,
            todos,
            searchedTodos,
            completeTodo,
            addTodo,
            unCompleteTodo,
            deleteTodo,
            random,
            completedTodos,
            newTodoPlaceholder,
            totalTodos,
            error,
            loading,
            createButtonText,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };