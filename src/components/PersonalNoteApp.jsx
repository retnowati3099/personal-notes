import React, { Component } from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData, showFormattedDate } from "../utils";

class PersonalNoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
  }
  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveEventHandler(id) {
    // this.setState(this.state.notes);
  }

  render() {
    return (
      <div>
        <NoteAppHeader />
        <NoteAppBody
          notes={this.state.notes}
          format={showFormattedDate}
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveEventHandler}
        />
      </div>
    );
  }
}

export default PersonalNoteApp;
