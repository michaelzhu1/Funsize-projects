import React, { Component } from 'react';
import './App.css';
import { Banner } from './Banner.jsx';
import Todo from './Todo.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Todo />
      </div>
    );
  }
}

export default App;
