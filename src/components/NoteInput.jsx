import React from "react";

function NoteInput() {
  return (
    <div className="note-input">
      <form className="note-input">
        <p className="note-input__title__char-limit">Sisa karakter: 50</p>
        <input
          type="text"
          placeholder="Ini adalah judul ..."
          className="note-input__title "
        />
        <textarea
          placeholder="Tuliskan catatanmu di sini ..."
          className="note-input__body"
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}

export default NoteInput;
