import React from "react";

function NoteAppHeader({ onSearchHandler }) {
  return (
    <div className="note-app__header ">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          onChange={onSearchHandler}
        />
      </div>
    </div>
  );
}

export default NoteAppHeader;
