import React from 'react';
import HeaderContainer from "./header_container";
import NoteIndexContainer from "./note_index_container";
import ModalContainer from "./modal_container";

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
        <HeaderContainer />
        <NoteIndexContainer />
        <ModalContainer
          width={840}
          height={920}
          >
          <h1>Modal title</h1>
          <p>hello</p>
        </ModalContainer>
      </div>
    );
  }

}

export default App;
