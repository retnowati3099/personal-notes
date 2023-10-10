import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, format, onDelete}) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          {...note}
          format={format}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NotesList;
