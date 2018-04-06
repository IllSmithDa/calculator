import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      inputValues: [],
      currentInput: `Sam's calculator`
    }
  }
  inputOneHandler = () => {
    this.setState({ currentInput: 1})
    this.state.inputValues.push(1);
  }
  inputTwoHandler = () => {
    this.setState({ currentInput: 2})
    this.state.inputValues.push(2);
  }
  inputThreeHandler = () => {
    this.setState({ currentInput: 3})
    this.state.inputValues.push(3);
  }
  inputFourHandler = () => {
    this.setState({ currentInput: 4})
    this.state.inputValues.push(4);
  }
  inputFiveHandler = () => {
    this.setState({ currentInput: 5})
    this.state.inputValues.push(5);
  }
  inputSixHandler = () => {
    this.setState({ currentInput: 6})
    this.state.inputValues.push(6);
  }
  inputSevenHandler = () => {
    this.setState({ currentInput: 7})
    this.state.inputValues.push(7);
  }
  inputEightHandler = () => {
    this.setState({ currentInput: 8})
    this.state.inputValues.push(8);
  }
  inputNineHandler = () => {
    this.setState({ currentInput: 9})
    this.state.inputValues.push(9);
  }
  inputZeroHandler = () => {
    this.setState({ currentInput: 0})
    this.state.inputValues.push(0);
  }
  dotHandler = () => {
    this.setState({ currentInput: '.' })
    this.state.inputValues.push('.');
  }
  inputPlusHandler = () => {
    this.setState({ currentInput: '+'})
    this.state.inputValues.push('+');
  }
  inputMinusHandler = () => {
    this.setState({ currentInput: '-'})
    this.state.inputValues.push('-');
  }
  inputMultiplyHandler = () => {
    this.setState({ currentInput: '*'})
    this.state.inputValues.push('*');
  }
  inputDivideHandler = () => {
    this.setState({ currentInput: '/'})
    this.state.inputValues.push('/');
  }
  inputEqualsHandler = () => {
    let currentPostion = 0;
    let totalValue = 0;
    let currentValue = 0;
    let newValue = 0;
    let otherValue = 0;
    //console.log('hello')
    for (let i = 0; i < this.state.inputValues.length; i++) {
      if (this.state.inputValues[i] === '+') {
        currentValue = this.state.inputValues.slice(currentPostion, i)
        newValue = parseFloat(currentValue.join(''))
        console.log(newValue);
        otherValue = this.state.inputValues.slice(i + 1)
        otherValue = parseFloat(otherValue.join(''))
        totalValue = newValue + otherValue;
        this.setState({currentInput: totalValue, inputValues: [] })
        break;
      }
      if (this.state.inputValues[i] === '-') {
        currentValue = this.state.inputValues.slice(currentPostion, i)
        newValue = parseFloat(currentValue.join(''))
        otherValue = this.state.inputValues.slice(i + 1)
        otherValue = parseFloat(otherValue.join(''))
        totalValue = newValue - otherValue;
        this.setState({currentInput: totalValue, inputValues: []})
        break;
      }
      if (this.state.inputValues[i] === '*') {
        currentValue = this.state.inputValues.slice(currentPostion, i)
        newValue = parseFloat(currentValue.join(''))
        // console.log(newValue);
        otherValue = this.state.inputValues.slice(i + 1)
        // console.log(otherValue);
        otherValue = parseFloat(otherValue.join(''))
        // console.log(otherValue);
        totalValue = newValue * otherValue;
        this.setState({currentInput: totalValue, inputValues: []})
        break;
      }
      if (this.state.inputValues[i] === '/') {
        currentValue = this.state.inputValues.slice(currentPostion, i)
        newValue = parseFloat(currentValue.join(''))
        // console.log(newValue);
        otherValue = this.state.inputValues.slice(i + 1)
        // console.log(otherValue);
        otherValue = parseFloat(otherValue.join(''))
        // console.log(otherValue);
        totalValue = newValue / otherValue;
        this.setState({currentInput: totalValue, inputValues: []})
        break;
      }
    }
  }
  clearHandler = () => {
    this.setState({ inputValues: [], currentInput: "Sam's Calculator" });
  }
  deleteHandler = () => {
    this.state.inputValues.pop();
    if (this.state.inputValues.length === 0) {
      this.setState({ currentInput: "Sam's Calculator" })
    }
    this.setState({ inputValues: this.state.inputValues })
  }
  render = () => {
    return (
      <div>
        <div>
          <h1> {this.state.inputValues.join('')}</h1>
          <h1> {this.state.currentInput} </h1>
        </div>
        <div>
          <button className="App-button" onClick = {this.inputOneHandler}><p className="App-button-text">1</p></button>
          <button className="App-button" onClick = {this.inputTwoHandler}><p className="App-button-text">2</p></button>
          <button className="App-button" onClick = {this.inputThreeHandler}><p className="App-button-text">3</p></button>
          <button className="App-button" onClick = {this.deleteHandler}><p className="App-button-text">Del</p></button>
        </div>
        <div>
          <button className="App-button" onClick = {this.inputFourHandler}><p className="App-button-text">4</p></button>
          <button className="App-button" onClick = {this.inputFiveHandler}><p className="App-button-text">5</p></button>
          <button className="App-button" onClick = {this.inputSixHandler}><p className="App-button-text">6</p></button>
        </div>
        <div>
          <button className="App-button" onClick = {this.inputSevenHandler}><p className="App-button-text">7</p></button>
          <button className="App-button" onClick = {this.inputEightHandler}><p className="App-button-text">8</p></button>
          <button className="App-button" onClick = {this.inputNineHandler}><p className="App-button-text">9</p></button>
        </div>
        <div>
          <button className="App-button" onClick = {this.inputZeroHandler}><p className="App-button-text">0</p></button>
          <button className="App-button" onClick = {this.dotHandler}><p className="App-button-text">.</p></button>
          <button className="App-button" onClick = {this.inputPlusHandler}><p className="App-button-text">+</p></button>
        </div>
        <div>
          <button className="App-button" onClick = {this.inputMinusHandler}><p className="App-button-text">-</p></button>
          <button className="App-button" onClick = {this.inputMultiplyHandler}><p className="App-button-text">*</p></button>
          <button className="App-button" onClick = {this.inputDivideHandler}><p className="App-button-text">/</p></button>
          <button className="App-button" onClick = {this.inputEqualsHandler}><p className="App-button-text">=</p></button>
        </div>
        <div>
          <button className="App-button" onClick = {this.clearHandler}><p className="App-button-text">Clear</p></button>
        </div>
      </div>
    );
  }
}
//   <button className="App-special-button" onClick = {this.factHandler}><p className="App-button-text">Give me a random fact!</p></button>
export default App;
