import React, { Component } from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData } from "../utils";

class PersonalNoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }
  render() {
    return (
      <div>
        <NoteAppHeader />
        <NoteAppBody notes={this.state.notes} />
      </div>
    );
  }
}

export default PersonalNoteApp;
