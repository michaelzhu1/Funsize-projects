import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div>
      Titile: 
        <li>
        <strong>{this.props.todo.title} </strong>
        - {this.props.todo.userId}
        </li>
      </div>
    );
  }
}

export default TodoItem;
