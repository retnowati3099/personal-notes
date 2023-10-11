import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, format, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          {...note}
          format={format}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
}

export default NotesList;
