import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div>
        <li>
        <strong>{this.props.todo.title} </strong>
        - {this.props.todo.category}
        </li>
      </div>
    );
  }
}

export default TodoItem;
