import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      color: ''
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }

  updateBody(e){
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    const { updateTitle, updateBody, updateColor, addNote } = this.props;
    e.preventDefault();
    // updateTitle(this.state.title);
    // updateBody(this.state.body);
    // updateColor(this.state.color);
    addNote(this.state);
    this.setState({title: '',
          body: '',
          color: ''});
    this.props.onClose();
  }

  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    };

    if (this.props.width && this.props.height) {
      modalStyle.width = this.props.width + 'px';
      modalStyle.height = this.props.height + 'px';
      modalStyle.marginLeft = '-' + (this.props.width/2) + 'px',
      modalStyle.marginTop = '-' + (this.props.height/2) + 'px',
      modalStyle.transform = null;
    }

    if (this.props.style) {
      for (let key in this.props.style) {
        modalStyle[key] = this.props.style[key];
      }
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    };

    if (this.props.backdropStyle) {
      for (let key in this.props.backdropStyle) {
        backdropStyle[key] = this.props.backdropStyle[key];
      }
    }

    return (
      <div className={this.props.containerClassName}>
        <div className="modal" style={modalStyle}>
          <div className="note-color"
            style={{backgroundColor: this.props.color}}>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <button className="color-btn">red</button>
              <button className="color-btn">green</button>
              <button className="color-btn">yellow</button>
              <button className="color-btn">blue</button>
            </div>
            <input
              type="text"
              placeholder="Untitled"
              defaultValue={this.state.title}
              onChange={this.updateTitle}>
            </input>
            <textarea
              type="text"
              placeholder="Just start typing here"
              onChange={this.updateBody}></textarea>
            {this.props.children}
            <input type="submit" value="Add"/>
          </form>
          <button onClick={() => this.props.onClose()}>Cancel</button>
        </div>
        {!this.props.noBackdrop &&
            <div className={this.props.backdropClassName} style={backdropStyle}
                 onClick={e => this.close(e)}/>}
      </div>
    );
  }

  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}

export default Modal;
