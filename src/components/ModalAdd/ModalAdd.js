import { createPortal } from 'react-dom';
import s from './ModalAdd.module.css';
import { Modal } from '@material-ui/core';

const rootModal = document.getElementById('root');

const ModalAdd = ({ modalValue, modalAction, children }) => {
  return createPortal(
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={s.modal}
        open={modalValue}
        onClose={modalAction}
        closeAfterTransition
      >
        <div className={s.paper}>{children}</div>
      </Modal>
    </div>,
    rootModal,
  );
};

export default ModalAdd;
