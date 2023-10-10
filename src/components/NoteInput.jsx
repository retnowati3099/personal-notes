import React, { Component } from "react";

export default class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", remaining: 50 };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }
  render() {
    const {title, remaining} = this.state
    const remain = remaining - title.length;
    return (
      <div className="note-input">
        <form className="note-input">
          <p className="note-input__title__char-limit">
            Sisa karakter: {remain}
          </p>
          <input
            type="text"
            placeholder="Ini adalah judul ..."
            className="note-input__title "
            onChange={this.onTitleChangeHandler}
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
}
