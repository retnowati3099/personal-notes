import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteAppBody({ notes }) {
  return (
    <div className="note-app__body ">
      <h2>Buat catatan</h2>
      <NoteInput />
      <h2>Catatan Aktif</h2>
      <NotesList notes={notes} />
      <h2>Arsip</h2>
    </div>
  );
}

export default NoteAppBody;
