import React from 'react';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      color: ''
    };
    this.editNote = this.editNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  editNote() {
    this.props.updateModal(true, 'save', this.props.id);
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
          <span className="note-top">
            {this.props.note.title}
            <span className="icons">
              <i className="fa fa-pencil"
                aria-hidden="true"
                onClick={this.editNote}
                ></i>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </span>
          </span>
        </div>
        <div className="body-section">
          {this.props.note.body}
        </div>
      </div>
    );
  }
}

export default NoteIndexItem;
