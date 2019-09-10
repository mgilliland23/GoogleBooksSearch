import React, { Component } from "react";
//import Jumbotron from "./Jumbotron";
import API from "../../utils/API";
//import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../../components/List";
import ViewBtn from "../../components/ViewBtn";
import DeleteBtn from "../../components/DeleteBtn";
import Banner from "../../components/Banner";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    // Filter this.state.books for books with an id not equal to the id being removed
    const books = this.state.books.filter(book => book._id !== id);
    // Set this.state.books equal to the new books array
    this.setState({ books });

    API.deleteBook(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Banner page="Saved" />
        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <div className="book-container">
                  <img src={book.image} alt="book_img" />
                  <h5>
                    {book.title} <span id="author">by {book.authors}</span>
                  </h5>
                  <p id="description">{book.description}</p>
                  <DeleteBtn deleteBook={this.deleteBook} id={book._id} />
                  <ViewBtn link={book.link} />
                </div>
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Saved;
