import React from 'react';
import Header from "./header";
import NoteIndexContainer from "./note_index_container";
import Modal from "./modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div>
        <Header addNote={this.openModal}/>
        <NoteIndexContainer />
        <button onClick={() => this.openModal()}>Open modal</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h1>Modal title</h1>
          <p>hello</p>
          <p><button onClick={() => this.closeModal()}>Close</button></p>
        </Modal>
      </div>
    );
  }

}

export default App;
