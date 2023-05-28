import React from 'react';
import './TodoCounter.scss';
import { TodoContext } from 'app/context';

function TodoCounter(){
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);
    return(
        <h1>You've <span className="secondary-element">f!#ked</span> {completedTodos} of {totalTodos} todos</h1>
    );
}

export { TodoCounter };