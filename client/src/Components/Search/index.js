import React, { Component } from "react";
//import Jumbotron from "./Jumbotron";
import API from "../../utils/API";
//import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";

class Search extends Component {
  state = {
    books: [],
    search: ""
  };

  componentDidMount() {
    //this.loadBooks();
  }

  searchBooks = title => {
    API.searchBooks(title)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <form>
            <Input
              name="title"
              placeholder="Title (required)"
              value={this.state.search}
              handleInputChange={this.handleInputChange}
            />
            <FormBtn handleFormSubmit={this.handleFormSubmit}>Search</FormBtn>
          </form>
        </div>
        <div className="col-md-6">
          <div>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    {/* <DeleteBtn /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
