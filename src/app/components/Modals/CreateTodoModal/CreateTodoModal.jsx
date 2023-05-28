import React from 'react';
import { createPortal } from 'react-dom';
import './CreateTodoModal.scss';

function Modal({children}) {
    return createPortal(
        <div className="modal-backdrop">
            <div className="modal">
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal };

