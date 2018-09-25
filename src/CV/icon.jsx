import React, { Component } from "react";

class Icon extends Component {
  state = {};
  render() {
    return (
      <div className="col text-center">
        <img src={this.props.imgUrl} style={{width:"90px"}} alt="" />
        <br />
        <b>{this.props.title}</b>
      </div>
    );
  }
}

export default Icon;
