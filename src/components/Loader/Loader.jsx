import PropTypes from 'prop-types';
import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = ({ loading }) => {
  return (
    <div className={styles.loader}>
      {loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
    </div>
  );
};
Loader.propTypes = {
  loading: PropTypes.bool,
};
export default Loader;