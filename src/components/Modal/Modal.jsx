import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
const modalRoot = document.querySelector('#modal');

export const Modal = ({ toggleModal, url }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [toggleModal]);

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={url} alt="" />
      </div>
    </div>,
    modalRoot
  );
};
Modal.propTypes = {
  toggleModal: PropTypes.func,
  url: PropTypes.string,
};