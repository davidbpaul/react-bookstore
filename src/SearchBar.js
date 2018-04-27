import React from 'react'
// navigation
import { Link } from 'react-router-dom'
// checks data type returned
import PropTypes from 'prop-types'
// book data
import * as BooksAPI from './BooksAPI'
//app style
import './App.css'
//components
import Book from './Book'


class Search extends React.Component {
  static propTypes = {
    addBooks: PropTypes.func.isRequired
  }
  state = {
    query: '',
    newBooks: [],
    searchErr: false
  }
  getSearch = (event) => {
    this.setState({ query: event.target.value})
    if (!event.target.value) {
      this.setState({newBooks: [], searchErr: false })
    } else{
      BooksAPI.search(event.target.value, 20).then((books) => {
        books.length > 0 ?  this.setState({newBooks: books, searchErr: false }) : this.setState({ newBooks: [], searchErr: true })
      })
    }
  }
  render() {
    const { query, newBooks, searchErr } = this.state
    const { addBooks } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"  to="/"></Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              onInput={ this.getSearch }
              value={ query }
            />
          </div>
        </div>
        <div className="search-books-results">
          { newBooks.length >= 1 && (
            <div>
              <h3>Search returned { newBooks.length } books </h3>
              <ol className="books-grid">
                {newBooks.map((book) => (
                  <Book
                    book={ book }
                      key={ book.id }
                      addBooks={ addBooks }
                  />
                ))}
              </ol>
            </div>
          )}
          { searchErr  && (
            <div>
              <h4>No Books Found. Please try again!</h4>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Search
