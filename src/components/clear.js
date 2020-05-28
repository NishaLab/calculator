import React, { Component } from "react";
import "./clear.css";

class Clear extends Component {
  render() {
    return (
      <div
        className="clear"
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Clear;
