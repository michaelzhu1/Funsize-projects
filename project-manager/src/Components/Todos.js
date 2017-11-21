import React, { Component } from 'react';
import TodoItem from './TodoItem';


class Todos extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.projects.map(todo =>
        (
          <TodoItem key={todo.title} todo={todo} />
        )
      );
    }
    return (
      <div>
        <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}


export default Todos;
