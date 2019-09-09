import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";
import Saved from "./Components/Saved";
import Banner from "./Components/Banner";
import Search from "./Components/Search";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Banner />
          <Search />
        </Wrapper>
      </div>
    );
  }
}

export default App;
