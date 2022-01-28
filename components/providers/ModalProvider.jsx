import {createContext, useContext, useState} from 'react'

const ModalContext = createContext({isModalOpen: false})

export const ModalProvider = ({children}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModalState = (e) => {
    e.preventDefault();
    setModalOpen(prev => !prev);
  }
  return (
      <ModalContext.Provider value={{isModalOpen, toggleModalState}}>
        {children}
      </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}
