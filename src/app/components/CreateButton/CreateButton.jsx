// Import react
import React from 'react';
import './CreateButton.scss';
import { ModalContext, TodoContext } from 'app/context';

function CreateButton(){
    const {
        createButtonText,
    } = React.useContext(TodoContext);

    const {
        setOpenModal,
        openModal
    } = React.useContext(ModalContext);

    return(
        <footer>
            <button className="addTask" onClick={() => setOpenModal(state => !state)}><div className={openModal ? 'addText' : 'removeText'}>{createButtonText}</div></button>
        </footer>
    );
}

export { CreateButton };

