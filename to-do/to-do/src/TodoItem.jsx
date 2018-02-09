import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateValue: this.props.todo,
      editing: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.edit = this.edit.bind(this);
  }

  handleChange(e) {
    this.setState({updateValue: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({editing: false});
    this.props.updateTodo(this.state.updateValue);
  }

  edit() {
    this.setState({editing: true});
  }

  display() {
    return(
      <div>
        <li>{this.props.todo}</li>
        <button onClick={() => this.props.deleteTodo(this.props.index)}>Delete Todo</button>
        <button onClick={this.edit}>Edit Todo</button>
      </div>
    );
  }


  renderEdit() {
    return(
      <div>
        <input value={this.state.updateValue} onChange={this.handleChange}></input>
        <input type='submit' onClick={this.handleSubmit}></input>
      </div>
    );
  }


  render() {
    if (this.state.editing) {
      return(
        this.renderEdit()
      );
    } else {
      return(
        this.display()
      );
    }
  }
}
