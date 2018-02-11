import React from "react";
import NoteIndexItem from "./note_index_item";

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-container">
        <div className="note-index">
          {this.props.note.map((note, index) => (
            <NoteIndexItem key={index} id={index} note={note} />
          ))}
        </div>
      </div>
    );
  }
}

export default NoteIndex;
