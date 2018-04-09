import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      numberArr: [],
      inputValues: [],
      finishedMethod: false,
      currentInput: `Sam's calculator`
    }
  }
  inputOneHandler = () => {
    // clears the state to start a new expression. When person enters number after equal sign,
    // it means they want to start a fresh new expression. We only want to though if the equal 
    // sign has been just pressed. 
    if (this.state.finishedMethod) {
      this.state.numberArr = [];
      this.state.inputValues = [];
    }
    this.setState({ currentInput: 1, finishedMethod: false })
    this.state.inputValues.push(1);
  }
  inputTwoHandler = () => {
    if (this.state.finishedMethod) {
      this.state.numberArr = [];
      this.state.inputValues = [];
    }
    this.setState({ currentInput: 2, finishedMethod: false })
    this.state.inputValues.push(2);
  }
  inputThreeHandler = () => {
    if (this.state.finishedMethod) {
      this.state.numberArr = [];
      this.state.inputValues = [];
    }
    this.setState({ currentInput: 3, finishedMethod: false })
    this.state.inputValues.push(3);
  }
  inputFourHandler = () => {
    if (this.state.finishedMethod) {
      this.state.numberArr = [];
      this.state.inputValues = [];
    }
    this.setState({ currentInput: 4, finishedMethod: false })
    this.state.inputValues.push(4);
  }
  inputFiveHandler = () => {
    if (this.state.finishedMethod) {
      this.state.numberArr = [];
      this.state.inputValues = [];
    }
    this.setState({ currentInput: 5, finishedMethod: false })
    this.state.inputValues.push(5);
  }
  inputSixHandler = () => {
    if (this.state.finishedMethod) {
      this.state.numberArr = [];
      this.state.inputValues = [];
    }
    this.setState({ currentInput: 6, finishedMethod: false })
    this.state.inputValues.push(6);
  }
  inputSevenHandler = () => {
    if (this.state.finishedMethod) {
      this.state.numberArr = [];
      this.state.inputValues = [];
    }
    this.setState({ currentInput: 7, finishedMethod: false })
    this.state.inputValues.push(7);
  }
  inputEightHandler = () => {
    if (this.state.finishedMethod) {
      this.state.numberArr = [];
      this.state.inputValues = [];
    }
    this.setState({ currentInput: 8, finishedMethod: false })
    this.state.inputValues.push(8);
  }
  inputNineHandler = () => {
    if (this.state.finishedMethod) {
      this.state.numberArr = [];
      this.state.inputValues = [];
    }
    this.setState({ currentInput: 9, finishedMethod: false })
    this.state.inputValues.push(9);
  }
  inputZeroHandler = () => {
    if (this.state.finishedMethod) {
      this.state.numberArr = [];
      this.state.inputValues = [];
    }
    this.setState({ currentInput: 0, finishedMethod: false })
    this.state.inputValues.push(0);
  }
  dotHandler = () => {
    if (this.state.finishedMethod) {
      this.state.numberArr = [];
      this.state.inputValues = [];
    }
    this.setState({ currentInput: '.', finishedMethod: false })
    this.state.inputValues.push('.');
  }
  inputPlusHandler = () => {
    // Do not reset the state when using an operator because it is used to 
    // continue an expression but never to start a new one
    this.setState({ currentInput: '+', finishedMethod: false })
    this.state.inputValues.push('+');
  }
  inputMinusHandler = () => {
    this.setState({ currentInput: '-', finishedMethod: false })
    this.state.inputValues.push('-');
  }
  inputMultiplyHandler = () => {
    this.setState({ currentInput: '*', finishedMethod: false })
    this.state.inputValues.push('*');
  }
  inputDivideHandler = () => {
    this.setState({ currentInput: '/', finishedMethod: false })
    this.state.inputValues.push('/');
  }
  inputEqualsHandler = () => {
    let totalValue = 0;
    const mathFunction = this.state.inputValues;
    let methodArr = [];
    let tempNum = '';
    // console.log(mathFunction);
   // console.log(totalValue);
    
   // add all operators to one array
    for (let i = 0; i < this.state.inputValues.length; i++) {
      if (mathFunction[i] === '+' ||mathFunction[i] === '-' || mathFunction[i] === '*' || mathFunction[i] ==='/') {
        methodArr.push(this.state.inputValues[i]);
        // send numbers to another array
        this.state.numberArr.push(tempNum);
        tempNum = '';
        continue;
      }
      // concat the numbers until a operator is reached
      tempNum = tempNum.concat(mathFunction[i]);
      if (i === this.state.inputValues.length -1 ) this.state.numberArr.push(tempNum);
    }
    
    // console.log(this.state.numberArr)
    // console.log(methodArr);
    let numCounter = 1;
    totalValue = this.state.numberArr[0];
    // loop through operator array
    for (let i = 0; i < methodArr.length; i++) {
      if (methodArr[i] === '/') {
        // perform matching operation with th set total and the numbers in number array
        totalValue = parseFloat(Number(totalValue) / Number(this.state.numberArr[numCounter]));
        // console.log(totalValue  )
      }
      if (methodArr[i] === '+') {
        // console.log(Number(totalValue));
        totalValue = parseFloat(Number(totalValue) + Number(this.state.numberArr[numCounter]));
        // console.log(totalValue)
      }
      if (methodArr[i] === '*') {
        totalValue = parseFloat(Number(totalValue) * Number(this.state.numberArr[numCounter]));
      }
      if (methodArr[i] === '-') {
        totalValue = parseFloat(Number(totalValue)  - Number(this.state.numberArr[numCounter]));
      }
      numCounter += 1;
    }
    this.state.numberArr = [];
    this.state.inputValues = [];
    this.state.inputValues.push(totalValue);
    this.setState({finishedMethod: true });
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
