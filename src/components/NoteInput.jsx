import React, { Component } from "react";

export default class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "", body: "", remaining: 50 };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.OnSubmitEventHandler = this.OnSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  OnSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const { title, remaining } = this.state;
    const remain = remaining - title.length;

    return (
      <form className="note-input" onSubmit={this.OnSubmitEventHandler}>
        <p className="note-input__title__char-limit">Sisa karakter: {remain}</p>
        <input
          type="text"
          placeholder="Ini adalah judul ..."
          className="note-input__title "
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          placeholder="Tuliskan catatanmu di sini ..."
          className="note-input__body"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}
