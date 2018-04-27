import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    addBooks: PropTypes.func.isRequired
  }

  render() {
    const { books, addBooks } = this.props

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            book={ book }
            key={ book.id }
            addBooks={ addBooks}
          />
        ))}
      </ol>
    )
  }

}

export default BookShelf
