import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
const modalRoot = document.querySelector('#modal');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
  handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };
  render() {
    return createPortal(
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <img src={this.props.url} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  toggleModal: PropTypes.func,
  url: PropTypes.string,
};