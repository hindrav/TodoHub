import React from 'react';

const ModalContext = React.createContext();

function ModalProvider({children}){
    const [openModal, setOpenModal] = React.useState(false)
    return(
        <ModalContext.Provider value={{
            openModal,
            setOpenModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalProvider }