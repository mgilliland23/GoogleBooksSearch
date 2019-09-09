import React, { Component } from "react";
import "./style.css";

function Banner() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-6">Google Books - Search</h1>
        <p className="lead">Search for and save books of interest</p>
      </div>
    </div>
  );
}

export default Banner;
