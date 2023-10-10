import React from "react";

function ArchiveButton({ id, archived, onArchive }) {
  const text = archived ? "Pindahkan" : "Arsipkan";

  return (
    <button
      id={id}
      className="note-item__archive-button"
      onClick={() => onArchive(id)}
    >
      {text}
    </button>
  );
}

export default ArchiveButton;
