import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faMobile,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <hr className="bg-info row pt-2 m-0" />
        <div className="col-xs-12 col-sm-12 col-md-12">
          <div className="row mb-3 mt-3">
            <div className="col-md">
              <div className="row">
                <div className="col-3 p-0">
                  <img
                    src={this.props.avatar}
                    className="rounded-circle col-md-12 bg-info p-1"
                    alt="Profile"
                  />
                </div>
                <div className="col align-self-center">
                  <h4>
                    {this.props.firstName} <b>{this.props.lastName}</b>
                  </h4>
                  <p>
                    Born on the {this.props.dateofB} in {this.props.placeofB}.
                  </p>
                </div>
              </div>
            </div>
            <hr className="bg-info col-2 d-md-none" />
            <div className="col-md align-self-center">
              <ul className="list-unstyled p-0 m-0">
                <li className="row">
                  <span className="col-1 text-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <div className="col"><a href={'mailto:'+this.props.email}>{this.props.email}</a></div>{" "}
                </li>
                <li className="row">
                  <span className="col-1 text-center">
                    <FontAwesomeIcon icon={faMobile} />
                  </span>
                  <div className="col"><a href={'tel:'+this.props.phone}>{this.props.phone}</a></div>{" "}
                </li>
                <li className="row">
                  <span className="col-1 text-center">
                    <FontAwesomeIcon icon={faMapMarker} />
                  </span>
                  <div className="col">{this.props.address}</div>
                </li>
                <li className="row">
                  <span className="col-1 text-center">
                    <FontAwesomeIcon icon={faAddressCard} />
                  </span>
                  <div className="col">{this.props.permis}</div>
                </li>
                <li className="row">
                  <span className="col-1 text-center">
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                  <div className="col"><a href={'https://github.com/'+this.props.github} target="_blank">@{this.props.github}</a></div>
                </li>
              </ul>
            </div>
          </div>

          <hr className="bg-info row pt-1" />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
