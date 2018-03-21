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
    this.inputThreeHandler = this.inputThreeHandler.bind(this);
    this.inputFourHandler = this.inputFourHandler.bind(this);
    this.inputFiveHandler = this.inputFiveHandler.bind(this);
    this.inputSixHandler = this.inputSixHandler.bind(this);
    this.inputSevenHandler = this.inputSevenHandler.bind(this);
    this.inputEightHandler = this.inputEightHandler.bind(this);
    this.inputNineHandler = this.inputNineHandler.bind(this);
    this.inputPlusHandler = this.inputPlusHandler.bind(this);
    this.inputMinusHandler = this.inputMinusHandler.bind(this);
    this.inputMultiplyHandler = this.inputMultiplyHandler.bind(this);
    this.inputDivideHandler = this.inputDivideHandler.bind(this);
    this.inputEqualsHandler = this.inputEqualsHandler.bind(this);
  }
  inputOneHandler() {
    this.setState({ currentInput: 1})
    this.state.inputValues.push(1);
  }
  inputTwoHandler() {
    this.setState({ currentInput: 2})
    this.state.inputValues.push(2);
  }
  inputThreeHandler() {
    this.setState({ currentInput: 3})
    this.state.inputValues.push(3);
  }
  inputFourHandler() {
    this.setState({ currentInput: 4})
    this.state.inputValues.push(4);
  }
  inputFiveHandler() {
    this.setState({ currentInput: 5})
    this.state.inputValues.push(5);
  }
  inputSixHandler() {
    this.setState({ currentInput: 6})
    this.state.inputValues.push(6);
  }
  inputSevenHandler() {
    this.setState({ currentInput: 7})
    this.state.inputValues.push(7);
  }
  inputEightHandler() {
    this.setState({ currentInput: 8})
    this.state.inputValues.push(8);
  }
  inputNineHandler() {
    this.setState({ currentInput: 9})
    this.state.inputValues.push(9);
  }
  inputPlusHandler() {
    this.setState({ currentInput: '+'})
    this.state.inputValues.push('+');
  }
  inputMinusHandler() {
    this.setState({ currentInput: '-'})
    this.state.inputValues.push('-');
  }
  inputMultiplyHandler() {
    this.setState({ currentInput: '*'})
    this.state.inputValues.push('*');
  }
  inputDivideHandler() {
    this.setState({ currentInput: '/'})
    this.state.inputValues.push('/');
  }
  inputEqualsHandler() {
    let currentPostion = 0;
    let totalValue = 0;
    let currentValue = 0;
    let newValue = 0;
    let otherValue = 0;
    //console.log('hello')
    for (let i = 0; i < this.state.inputValues.length; i++) {
      if (this.state.inputValues[i] === '+') {
        currentValue = this.state.inputValues.splice(currentPostion, i)
        newValue = parseInt(currentValue.join(''))
        otherValue = this.state.inputValues.splice(i+1)
        otherValue = parseInt(otherValue.join(''))
        totalValue = newValue + otherValue;
        this.setState({currentInput: totalValue, inputValues: [] })
        break;
      }
      if (this.state.inputValues[i] === '-') {
        currentValue = this.state.inputValues.splice(currentPostion, i)
        newValue = parseInt(currentValue.join(''))
        otherValue = this.state.inputValues.splice(i+1)
        otherValue = parseInt(otherValue.join(''))
        totalValue = newValue - otherValue;
        this.setState({currentInput: totalValue, inputValues: []})
        break;
      }
      if (this.state.inputValues[i] === '*') {
        currentValue = this.state.inputValues.splice(currentPostion, i)
        newValue = parseInt(currentValue.join(''))
        otherValue = this.state.inputValues.splice(i+1)
        otherValue = parseInt(otherValue.join(''))
        totalValue = newValue * otherValue;
        this.setState({currentInput: totalValue, inputValues: []})
        break;
      }
      if (this.state.inputValues[i] === '/') {
        currentValue = this.state.inputValues.splice(currentPostion, i)
        newValue = parseInt(currentValue.join(''))
        otherValue = this.state.inputValues.splice(i+1)
        otherValue = parseInt(otherValue.join(''))
        totalValue = newValue / otherValue;
        this.setState({currentInput: totalValue, inputValues: []})
        break;
      }
    }
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
          <button onClick = {this.inputEqualsHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
