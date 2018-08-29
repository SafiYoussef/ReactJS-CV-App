import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Stars extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <label className="col-sm-2 font-weight-bold">{this.props.lang}</label>
        <div className="col">{this.getLevel()}</div>
      </div>
    );
  }

  getLevel() {
    let level = [];
    let count = 0;
    for (let i = 0; i < this.props.level; i++) {
      level.push(this.getStar("Red"));
      count++;
    }
    for (let i = count; i < 5; i++) level.push(this.getStar("#eee"));

    return level;
  }

  getStar(c) {
    return (
      <FontAwesomeIcon
        key={Math.random()}
        style={{ color: c, marginRight: 10 }}
        icon={faStar}
        inverse
        size="lg"
      />
    );
  }
}

export default Stars;
