import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import useOutsideClick from '../../hooks/useOutsideClick';
import { HiXMark } from 'react-icons/hi2';
import { StyledModal, Overlay, Button } from './Modal.styles';

const ModalContext = createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }) {
  const { openModal } = useContext(ModalContext);
  return cloneElement(children, { onClick: openModal });
}

function Window({ children }) {
  const { isOpen, closeModal } = useContext(ModalContext);
  const ref = useOutsideClick(closeModal);

  if (!isOpen) return;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={closeModal}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: closeModal })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
