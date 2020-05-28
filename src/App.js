/* eslint-disable eqeqeq */
/* eslint-disable no-eval */
import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/input";
import Clear from "./components/clear";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { operator: "", input: "", prevNum: "", curNum: "" };
  }
  isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };
  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };
  addZeroToInput = (val) => {
    if (this.state.input !== "")
      this.setState({ input: this.state.input + val });
  };

  clearInput = () => {
    this.setState({ input: "" });
  };
  addDecimal = (val) => {
    if (this.state.input.indexOf(".") == -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  add = (val) => {
    this.setState({ operator: "+" });
    this.setState({ prevNum: this.state.input });
    this.setState({ input: "" });
  };
  subtract = (val) => {
    this.setState({ operator: "-" });
    this.setState({ prevNum: this.state.input });
    this.setState({ input: "" });
  };

  multiply = (val) => {
    this.setState({ operator: "*" });
    this.setState({ prevNum: this.state.input });
    this.setState({ input: "" });
  };

  divide = (val) => {
    this.setState({ operator: "/" });
    this.setState({ prevNum: this.state.input });
    this.setState({ input: "" });
  };
  positiveNegative = () => {
    if (this.state.input.indexOf("-") == -1) {
      this.setState({ input: "-" + this.state.input });
    } else {
      this.setState({ input: this.state.input.slice(1,) });
    }
  };
  delete = () => {
    this.setState({ input: this.state.input.slice(0,-1) });
  };
  calculate = (val) => {
    if (this.state.operator !== "") {
      if (this.state.operator == "+") {
        this.setState({
          input: parseFloat(this.state.prevNum) + parseFloat(this.state.input),
        });
        this.setState({ prevNum: this.setState.input });
        this.setState({ operator: "" });
      }
      if (this.state.operator == "-") {
        this.setState({
          input: parseFloat(this.state.prevNum) - parseFloat(this.state.input),
        });
        this.setState({ prevNum: this.setState.input });
        this.setState({ operator: "" });
      }
      if (this.state.operator == "*") {
        this.setState({
          input: parseFloat(this.state.prevNum) * parseFloat(this.state.input),
        });
        this.setState({ prevNum: this.setState.input });
        this.setState({ operator: "" });
      }
      if (this.state.operator == "/") {
        this.setState({
          input: parseFloat(this.state.prevNum) / parseFloat(this.state.input),
        });
        this.setState({ prevNum: this.setState.input });
        this.setState({ operator: "" });
      }
    }
  };
  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.add}>+</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.calculate}>=</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.positiveNegative}>+-</Button>
            <Button handleClick={this.delete}>X</Button>
            <Clear handleClick={this.clearInput}>Clear</Clear>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
