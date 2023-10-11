import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteAppBody({ notes, format, keyword, onDelete, onArchive, addNote }) {
  const noteFiltered = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword)
  );
  const activeNote = noteFiltered.filter((note) => note.archived == false);
  const archiveNote = noteFiltered.filter((note) => note.archived == true);

  return (
    <div className="note-app__body ">
      <h2>Buat catatan</h2>
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      {activeNote.length > 0 ? (
        <NotesList
          notes={activeNote}
          format={format}
          keyword={keyword}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}

      <h2>Arsip</h2>
      {archiveNote.length > 0 ? (
        <NotesList
          notes={archiveNote}
          format={format}
          keyword={keyword}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteAppBody;
