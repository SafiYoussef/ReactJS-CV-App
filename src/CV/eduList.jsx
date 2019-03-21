import React, { Component } from "react";

class EduList extends Component {
  state = {};
  render() {
    return (
      <div className="col-xs-12">
        <h5>{this.props.degree}</h5>
        <span className="text-primary">@ {this.props.deration}</span>
        <p>
          {this.props.description}
          <br />
          <span className="text-muted text-secondary font-weight-bold">
            {this.props.at}
          </span>
        </p>
      </div>
    );
  }
}

export default EduList;
