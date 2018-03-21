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
    this.inputOneHandler = this.inputOneHandler.bind(this);
    this.inputTwoHandler = this.inputTwoHandler.bind(this);
    this.inputThreeHandler = this.inputTwoHandler.bind(this);
    this.inputFourHandler = this.inputTwoHandler.bind(this);
    this.inputFiveHandler = this.inputTwoHandler.bind(this);
    this.inputSixHandler = this.inputTwoHandler.bind(this);
    this.inputSevenHandler = this.inputTwoHandler.bind(this);
    this.inputEightHandler = this.inputTwoHandler.bind(this);
    this.inputNineHandler = this.inputTwoHandler.bind(this);
    this.inputPlusHandler = this.inputPlusHandler.bind(this);
    this.inputMinusHandler = this.inputMinusHandler.bind(this);
    this.inputMultiplyHandler = this.inputMultiplyHandler.bind(this);
    this.inputDivideHandler = this.inputDivideHandler.bind(this);
  }
  inputOneHandler() {
    this.setState({ currentInput: 1})
  }
  inputTwoHandler() {
    this.setState({ currentInput: 2})
  }
  inputThreeHandler() {
    this.setState({ currentInput: 3})
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
          <button onClick = {this.inputOneHandler}>1</button>
          <button onClick = {this.inputTwoHandler}>2</button>
          <button onClick = {this.inputThreeHandler}>3</button>
        </div>
        <div>
          <button onClick = {this.inputFourHandler}>4</button>
          <button onClick = {this.inputFiveHandler}>5</button>
          <button onClick = {this.inputSixHandler}>6</button>
        </div>
        <div>
          <button onClick = {this.inputSevenHandler}>7</button>
          <button onClick = {this.inputEightHandler}>8</button>
          <button onClick = {this.inputNineHandler}>9</button>
        </div>
        <div>
          <button onClick = {this.inputPlusHandler}>+</button>
          <button onClick = {this.inputMinusHandler}>-</button>
          <button onClick = {this.inputMultiplyHandler}>*</button>
          <button onClick = {this.inputDivideHandler}>/</button>
        </div>
      </div>
    );
  }
}

export default App;
