import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteAppBody({ notes, format, onDelete }) {
  const activeNote = notes.filter((note) => note.archived == false);
  const archiveNote = notes.filter((note) => note.archived == true);
  return (
    <div className="note-app__body ">
      <h2>Buat catatan</h2>
      <NoteInput />
      <h2>Catatan Aktif</h2>
      {activeNote.length > 0 ? (
        <NotesList notes={activeNote} format={format} onDelete={onDelete} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}

      <h2>Arsip</h2>
      {archiveNote.length > 0 ? (
        <NotesList notes={archiveNote} format={format} onDelete={onDelete} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteAppBody;
