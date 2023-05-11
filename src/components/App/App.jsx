import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import ButtonLoadMore from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import styles from './App.module.css';
import imagesFetch from 'Api/FetchImages';

export const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const onChangeSerchQuery = query => {
    setImages([]);
    setCurrentPage(1);
    setSearchQuery(query);
    setError(null);
  };

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await imagesFetch({
        page: currentPage,
        searchQuery,
      });
      setImages(prev => [...prev, ...response]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, searchQuery]);

  const toggleModal = largeUrl => {
    setShowModal(!showModal);
    setModalUrl(largeUrl);
  };
  const handleClickLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  useEffect(() => {
    if (searchQuery) {
      fetchImages();
    }
  }, [searchQuery, currentPage, fetchImages]);

  useEffect(() => {
    if (error) {
      console.log('Warning');
    }
  }, [error]);

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={onChangeSerchQuery} />
      <ImageGallery images={images} onClick={toggleModal} />
      {images.length % 12 < 1 && images.length > 0 && (
        <ButtonLoadMore onClick={handleClickLoadMore} />
      )}
      <Loader loading={isLoading} />
      {showModal && <Modal url={modalUrl} toggleModal={toggleModal} />}
    </div>
  );
};