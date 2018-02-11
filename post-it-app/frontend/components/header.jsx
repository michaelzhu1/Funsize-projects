import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <header className="header">
        <button
          onClick={() => this.props.updateModal(true, 'save')}
          className="add-btn">&#65291; Add Note</button>
      </header>
    );
  }
}

export default Header;
