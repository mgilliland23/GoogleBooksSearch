import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">Google Books Search</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarLinks"
        aria-controls="navbarLinks"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarLinks">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            Search <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="#">
            Saved
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
