import React from 'react';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  editNote() {

  }

  removeNote() {

  }

  render() {
    const { color, title, body } = this.props.note;
    return(
      <div className="note">
        <div className="note-color"
          style={{backgroundColor: color}}>
        </div>
        <div className="title-section">
          <span>
            {this.props.note.title}
          </span>
        </div>
      </div>
    );
  }
}

export default NoteIndexItem;
