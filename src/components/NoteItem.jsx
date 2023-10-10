import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ id, title, body, createdAt, archived, format, onDelete}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <p className="note-item__title">{title}</p>
        <p className="note-item__date ">{format(createdAt)}</p>
        <p className="note-item__body ">{body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id}/>
      </div>
    </div>
  );
}

export default NoteItem;
