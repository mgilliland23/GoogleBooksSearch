import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddBtn(props) {
  return (
    <form action="api/books">
      <button
        className="add-btn btn btn-primary"
        {...props}
        role="button"
        tabIndex="0"
      >
        Save
      </button>
    </form>
  );
}

export default AddBtn;
