import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button
      id={id}
      onClick={() => onDelete(id)}
      className="note-item__delete-button"
    >
      Delete
    </button>
  );
}

export default DeleteButton;
