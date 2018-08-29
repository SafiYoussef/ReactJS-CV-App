import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faMobile,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-sm-3">
                <img src={this.props.avatar} className="rounded-circle" />
              </div>
              <div className="col">
                <h4>
                  {this.props.firstName} <b>{this.props.lastName}</b>
                </h4>
                <p>
                  Born on the {this.props.dateofB} in {this.props.placeofB}.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <ul className="list-unstyled p-0">
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> {this.props.email}
              </li>
              <li>
                <FontAwesomeIcon icon={faMobile} /> {this.props.phone}
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarker} /> {this.props.address}
              </li>
              <li>
                <FontAwesomeIcon icon={faAddressCard} /> {this.props.permis}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
