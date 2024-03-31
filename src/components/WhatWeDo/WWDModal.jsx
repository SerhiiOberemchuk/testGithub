import styles from '../WhatWeDo/WWDModal.module.scss'
import closeIcon from "../../assets/icons/closeIcon.svg"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className={styles.modalCloseBtn}>
          <img
            className={styles.closeIcon}
            width={15}
            height={15}
            src={closeIcon}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Modal