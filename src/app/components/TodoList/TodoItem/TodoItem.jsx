import React from 'react';
import './TodoItem.scss';
import { HiCheck, HiOutlineTrash } from 'react-icons/hi';

function TodoItem({
    completed,
    text,
    onComplete,
    unComplete,
    deleteTodo
}) {

    const ToggleTodo = () => {
        if (!completed) {
            onComplete()
        } else {
            unComplete()
        }
    }

    return (
        <div className="todo-item-container">
            <li>
                <div className={completed ? 'square' : 'square'} onClick={ToggleTodo}>{!completed ? '' : <HiCheck/>}</div>
                <p className={completed ? 'todoText completed' : 'todoText'}>{text}</p>
                <p className="trashIcon" onClick={deleteTodo}><HiOutlineTrash/></p>
            </li>
        </div>
    );
}

export { TodoItem };