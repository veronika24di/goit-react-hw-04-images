import PropTypes from 'prop-types';
import styles from './Button.module.css';

const ButtonLoadMore = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Load more
  </button>
);
ButtonLoadMore.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonLoadMore;