import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div>

        <li>
        <i>Titile:<strong>&nbsp;{this.props.todo.title} </strong></i>&nbsp;
        <i>User Id:<strong>&nbsp;{this.props.todo.userId}</strong></i>&nbsp;
        <i>Completed:<strong>&nbsp;{this.props.todo.completed.toString()}</strong></i>
        </li>
        <br />
      </div>
    );
  }
}

export default TodoItem;
