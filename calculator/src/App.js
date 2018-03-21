import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValues: [],
      currentInput: `Sam's calculator`
    }
    this.inputHandler = this.inputHandler.bind(this);
  }
  inputHandler(event) {
    this.setState({ currentInput: event.target.value })
    console.log(this.state.currentInput)
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <div>
          <h> {this.state.currentInput} </h>
        </div>
        <div>
          <button onClick = {this.inputHandler} value = {1}>1</button>
          <button onClick = {this.inputHandler}>2</button>
          <button onClick = {this.inputHandler}>3</button>
        </div>
        <div>
          <button onClick = {this.inputHandler}>4</button>
          <button onClick = {this.inputHandler}>5</button>
          <button onClick = {this.inputHandler}>6</button>
        </div>
        <div>
          <button onClick = {this.inputHandler}>7</button>
          <button onClick = {this.inputHandler}>8</button>
          <button onClick = {this.inputHandler}>9</button>
        </div>
        <div>
          <button onClick = {this.inputHandler}>+</button>
          <button onClick = {this.inputHandler}>-</button>
          <button onClick = {this.inputHandler}>*</button>
          <button onClick = {this.inputHandler}>/</button>
        </div>
      </div>
    );
  }
}

export default App;
