import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

class DotedList extends Component {
  state = {};
  render() {
    return (
      <div className="col">
        <div className="row">
          <div className="col-xs-1">
            <FontAwesomeIcon icon={faDotCircle} />
          </div>
          <div className="col">
            <h5>{this.props.title}</h5>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DotedList;
