import React, { Component } from "react";

class Section extends Component {
  state = {};
  render() {
    return (
      <div className="col">
        <h3>{this.props.title}</h3>
        <div>{this.props.content}</div>
      </div>
    );
  }
}

export default Section;
