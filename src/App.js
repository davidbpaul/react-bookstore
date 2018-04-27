import React from 'react'
// navigation
import { Link, Route } from 'react-router-dom'

// book data
import * as BooksAPI from './BooksAPI'
//app style
import './App.css'

//components
import BookList from './BookList'
import Search from './SearchBar'

class BooksApp extends React.Component {
  // state
  state = { books: [] };

// events
  //load all books
  componentDidMount(){
    BooksAPI.getAll().then(books =>{
      this.setState({books})
    })
  }



  addBooks = (book, shelf) =>{
    BooksAPI.update(book, shelf).then(response =>{
      // remove book from old shelf if exist
      const updated = this.state.books.filter( filteredBook => book.id !== filteredBook.id)

      // set shelf for book in param
      book.shelf = shelf;
      //filtered array gets new book
      updated.push(book);
      //set state
      this.setState({books:updated});

    })
  }


// jsx being returned
  render() {
    //dont need to use (this) keyword now
    const { books } = this.state;
    return (
      <div className="app">
        {/* search bar */}
        {/* render on /search */}
        <Route exact path="/search" render={() => (
           <Search
             books={ books }
             addBooks={ this.addBooks }
           />
        )} />
        {/* bookshelf */}
        <Route exact  path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList
              books={ books }
              addBooks={ this.addBooks }
            />
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
