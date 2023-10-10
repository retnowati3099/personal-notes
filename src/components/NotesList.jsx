import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, format, keyword, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.title.toLowerCase().includes(keyword))
        .map((note) => (
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
