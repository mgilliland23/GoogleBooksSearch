import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";
import Saved from "./Components/Saved";
import Banner from "./Components/Banner";

class App extends Component {
  render() {
    return (
      <Navbar>
        <Wrapper>
          <Banner />
          <Saved />
        </Wrapper>
      </Navbar>
    );
  }
}

export default App;
