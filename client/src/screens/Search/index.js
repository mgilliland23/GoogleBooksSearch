import React, { Component } from "react";
//import Jumbotron from "./Jumbotron";
//import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../../components/List";
import SearchForm from "../../components/SearchForm";
import AddBtn from "../../components/AddBtn";
import ViewBtn from "../../components/ViewBtn";
import Banner from "../../components/Banner";

import API from "../../utils/API";

class Search extends Component {
  state = {
    result: {},
    books: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    //this.searchMovies("The Matrix");
  }

  searchBooks = query => {
    API.searchBooks(query)
      .then(res => this.displayBooks(res.data.items))
      .catch(err => console.log(err));
  };

  displayBooks = books => {
    console.log(books);
    this.setState({
      books: books
    });
  };

  saveBook = (title, authors, description, img, link) => {
    //event.preventDefault();
    API.saveBook({
      title: title,
      authors: authors,
      description: description,
      image: img,
      link: link
    })
      .then(res => console.log("book saved to database"))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Google Books API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <div>
        <Banner page="Search" />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <ListItem key={book.id}>
                  <div className="book-container">
                    <img
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt="book_img"
                    />
                    <h5>
                      {book.volumeInfo.title}{" "}
                      <span id="author">by {book.volumeInfo.authors}</span>
                    </h5>
                    <p id="description">{book.volumeInfo.description}</p>
                    <AddBtn
                      saveBook={this.saveBook}
                      image={book.volumeInfo.imageLinks.smallThumbnail}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      link={book.volumeInfo.infoLink}
                    />
                    <ViewBtn />
                  </div>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
