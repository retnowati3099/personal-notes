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

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveEventHandler(id) {
    const notes = this.state.notes;
    const index = notes.findIndex((note) => note.id === id);
    notes[index].archived = !notes[index].archived;
    this.setState({ notes });
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
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveEventHandler}
        />
      </div>
    );
  }
}

export default PersonalNoteApp;
