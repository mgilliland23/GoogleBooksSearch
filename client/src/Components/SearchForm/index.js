import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="form-inline mb-3">
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search For a Book"
        id="search"
      />
      <input
        type="submit"
        value="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-primary"
      />
    </form>
  );
}

export default SearchForm;
