import React from 'react';
import {TodoList} from './TodoList';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item : '',
      itemList : ['buy milk', 'get a job']
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({item: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const oldList = this.state.itemList.slice();
    oldList.push(this.state.item);
    this.setState({itemList: oldList, item: ''});
  }

  handleDelete(index) {
    const newList = this.state.itemList.slice();
    newList.splice(index,1);
    this.setState({itemList: newList, item: ''});
  }

  render() {
    return(
      <div>
        <TodoList removeTodo={(index) => this.handleDelete(index)} todos={this.state.itemList}/>
        <form>
          <input type='text' onChange={this.update} value={this.state.item}></input>
          <input type='submit' onClick={this.handleSubmit} ></input>
        </form>
      </div>
    );
  }
}

export default Todo;
