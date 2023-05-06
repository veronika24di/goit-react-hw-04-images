import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  const handleSetUrl = () => {
    onClick(largeImageURL);
  };

  return (
    <li className={styles.imageGalleryItem}>
      <img
        src={webformatURL}
        alt=""
        onClick={handleSetUrl}
        className={styles.imageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;