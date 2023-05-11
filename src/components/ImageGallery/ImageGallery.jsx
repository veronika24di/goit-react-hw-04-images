import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.webformatURL}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape),
  onClick: PropTypes.func,
};