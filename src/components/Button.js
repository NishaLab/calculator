import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  isOperator = (val) => {
    return val === "+" || val === "-" || val ==="*" || val ==="/";
  };
  render() {
    let data = this.props.data;
    if(data === undefined){
      data = "";
    }

    return (
      <div
        className={`button ${
          this.isOperator(this.props.children) ? "operator" : data
        }`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Button;
