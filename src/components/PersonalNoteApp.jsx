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
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
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

  onAddNoteHandler({ title, body, remaining }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: "2022-04-14T04:27:34.572Z",
            archived: false,
          },
        ],
      };
    });
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
          addNote={this.onAddNoteHandler}
        />
      </div>
    );
  }
}

export default PersonalNoteApp;
