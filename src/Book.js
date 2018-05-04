import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    addBooks: PropTypes.func.isRequired
  }

  render() {
    const { book, addBooks} = this.props

    let img = book.hasOwnProperty("imageLinks")? book.imageLinks.thumbnail : "";
    return (
          <li>
            <div aria-label="book" className="book">
              <div className="book-top">
                <div className="book-cover"
                  style={{ width: 128, height: 190, backgroundImage: `url(${img})` }}>

                  </div>
                <ShelfChanger
                  book={ book }
                  addBooks={addBooks}
                />
              </div>
              <div className="book-title">{ book.title ? book.title : "No title available" }</div>
              {
                book.authors && book.authors.map((author, index) => (
                  <div className="book-authors" key={index}>{author}</div>
              ))}
            </div>
          </li>
    )
  }

}

export default Book
