import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: '',
      num2: '',
      error: ''
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  // your code here
  setNum1(e) {
    e.preventDefault();
    const num1 = e.target.value ? parseInt(e.target.value) : '';
    if (isNaN(num1)) {
      return;
    }
    this.setState({num1});
  }

  setNum2(e) {
    e.preventDefault();
    const num2 = e.target.value ? parseInt(e.target.value) : '';
    if (isNaN(num2)) {
      return;
    } // preventing user inputting characters
    this.setState({num2});
  }

  add(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({result, error: ''});
  }

  subtract(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result, error: ''});
  }

  multiply(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result, error: ''});
  }

  divide(e) {
    e.preventDefault();
    if (this.state.num2 === 0) {
      this.setState({error: 'Can not divide 0'});
      return;
    }
    const result = this.state.num1 / this.state.num2;
    this.setState({result, error: ''});
  }

  clear(e) {
    e.preventDefault();
    this.setState({num1: '', num2: '', result: 0, error: ''});
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <h2>{this.state.error}</h2>
        <input onChange={this.setNum1} value={this.state.num1}/>
        <input onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
