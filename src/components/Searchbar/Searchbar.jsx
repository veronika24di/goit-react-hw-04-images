import PropTypes from 'prop-types';
import { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import styles from './Searchbar.module.css';

export default class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <BiSearch width="40" height="40" aria-label="search" />
          </button>

          <input
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            name="search"
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};