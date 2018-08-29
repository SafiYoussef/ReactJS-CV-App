import React, { Component } from "react";

class SkillsList extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <label className="col-sm-3">{this.props.label}</label>
        <div className="col">
          <div className="progress" style={{ marginTop: 3 }}>
            <div
              className={this.getClasses()}
              role="progressbar"
              style={{ width: this.props.score + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      </div>
    );
  }

  getClasses() {
    const { score } = this.props;
    let c;

    if (score <= 25) {
      c = "danger";
    } else if (score <= 50) {
      c = "warning";
    } else if (score <= 75) {
      c = "success";
    } else {
      c = "info";
    }

    return "progress-bar bg-" + c;
  }
}

export default SkillsList;
