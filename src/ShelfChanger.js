import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    addBooks: PropTypes.func.isRequired,
  }


  render() {
    const { book, addBooks } = this.props

    return (
      <div className="book-shelf-changer">
        <select  onChange={(event) => addBooks(book, event.target.value)}
          defaultValue={ book.shelf? book.shelf : "none" }>
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want To Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

export default ShelfChanger
