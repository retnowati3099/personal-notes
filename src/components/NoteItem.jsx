import React from "react";

function NoteItem({ id, title, body, createdAt, archived }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <p className="note-item__title">{title}</p>
        <p className="note-item__date ">{createdAt}</p>
        <p className="note-item__body ">{body}</p>
      </div>
      <div className="note-item__action">
        <button id={id} className="note-item__delete-button">
          Delete
        </button>
        <button className="note-item__archive-button">Arsipkan</button>
      </div>
    </div>
  );
}

export default NoteItem;
