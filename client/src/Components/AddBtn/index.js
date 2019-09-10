import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddBtn(props) {
  return (
    <button
      className="add-btn btn btn-primary"
      {...props}
      onClick={() =>
        props.saveBook(
          props.title,
          props.authors,
          props.description,
          props.image,
          props.link
        )
      }
      tabIndex="0"
    >
      Save
    </button>
  );
}

export default AddBtn;
