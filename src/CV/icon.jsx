import React, { Component } from "react";

class Icon extends Component {
  state = {};
  render() {
    return (
      <div className="col text-center">
        <img src={this.props.imgUrl} />
        <br />
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default Icon;
