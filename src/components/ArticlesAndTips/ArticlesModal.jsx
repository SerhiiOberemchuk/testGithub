import React from 'react';

import styles from '../ArticlesAndTips/ArticleModel.module.scss';

import closeIcon from '../../assets/icons/closeIcon.svg';



const Modal = ({ isOpen, onClose, img, title, content, date }) => {

    

  return (
    <>
      {isOpen && (
        <div
          className={styles.modalOverlay}
          onClick={e => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <div className={styles.modal}>
            <button className={styles.modalCloseBtn} onClick={onClose}>
              <img
                className={styles.closeIcon}
                width={15}
                height={15}
                src={closeIcon}
                alt=""
              />
            </button>
            <div className={styles.articleContent}>
              <img className={styles.modalImg} src={img} alt="" />
              <div className={styles.articleText}>
                <h2 className={styles.modalTitle}>{title}</h2>
                <p className={styles.modalContent}>{content}</p>
                <p className={styles.modalDate}>{date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
