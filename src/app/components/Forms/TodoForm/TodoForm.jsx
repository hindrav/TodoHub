import { ModalContext, TodoContext } from 'app/context';
import React from 'react';
import './TodoForm.scss';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        addTodo,
        newTodoPlaceholder
    } = React.useContext(TodoContext);

    const {
        setOpenModal
    } = React.useContext(ModalContext)

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue.trim())
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-container">
                <div className="form-header">
                    <label>Write a new todo</label>
                    <textarea 
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder={newTodoPlaceholder} 
                    cols="32"
                    rows="8"
                    required></textarea>
                </div>
                <div className="form-footer">
                    <button type="button" className="form-cancelTodo" onClick={onCancel}>Cancel</button>
                    <button type="submit" className="form-addTodo">Add</button>
                </div>
            </div>
        </form>
    )
}

export { TodoForm };