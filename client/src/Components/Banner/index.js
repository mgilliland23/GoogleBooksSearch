import React from "react";
import "./style.css";

function Banner(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-6">Google Books - {props.page}</h1>
        <p className="lead">Search for and save books of interest</p>
      </div>
    </div>
  );
}

export default Banner;
