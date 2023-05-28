import React from 'react';
import './TodoSearch.scss';
import { TodoContext } from 'app/context';

function TodoSearch(){

    const {
        inputValue,
        setInputValue
    } = React.useContext(TodoContext);

    return(
        <div className="search">
            <input placeholder="Search todo..." value={inputValue} onChange={(event) => {
                setInputValue(event.target.value)
            }} />
        </div>
    );
}

export { TodoSearch };