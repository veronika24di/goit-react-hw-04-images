import { Component } from 'react';
import SearchBar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ButtonLoadMore from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import styles from './App.module.css';
import imagesFetch from 'Api/FetchImages';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    modalUrl: '',
  };

  componentDidUpdate(_, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeSerchQuery = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };

  fetchImages = async () => {
    this.setState({ isLoading: true });
    try {
      const { currentPage, searchQuery } = this.state;
      const response = await imagesFetch({
        page: currentPage,
        searchQuery: searchQuery,
      });

      this.setState(prevState => ({
        images: [...prevState.images, ...response],
        currentPage: prevState.currentPage + 1,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  toggleModal = largeUrl => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalUrl: largeUrl,
    }));
  };
  render() {
    const { images, isLoading, showModal, modalUrl } = this.state;
    return (
      <div className={styles.app}>
        <SearchBar onSubmit={this.onChangeSerchQuery} />
        <ImageGallery images={images} onClick={this.toggleModal} />
        {images.length % 12 < 1 && images.length > 0 && (
          <ButtonLoadMore onClick={this.fetchImages} />
        )}
        <Loader loading={isLoading} />
        {showModal && <Modal url={modalUrl} toggleModal={this.toggleModal} />}
      </div>
    );
  }
}