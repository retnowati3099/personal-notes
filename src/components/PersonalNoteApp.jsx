import React, { Component } from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData, showFormattedDate } from "../utils";

class PersonalNoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: "",
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNoteHandler(id) {
    const notes = this.state.notes;
    const index = notes.findIndex((note) => note.id === id);
    notes[index].archived = !notes[index].archived;
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    const keyword = event.target.value.toLowerCase();
    this.setState({ keyword });
  }

  render() {
    return (
      <div>
        <NoteAppHeader onSearchHandler={this.onSearchHandler} />
        <NoteAppBody
          notes={this.state.notes}
          format={showFormattedDate}
          keyword={this.state.keyword}
          onDelete={this.onDeleteNoteHandler}
          onArchive={this.onArchiveNoteHandler}
          addNote={this.onAddNoteHandler}
        />
      </div>
    );
  }
}

export default PersonalNoteApp;
