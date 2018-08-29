import React, { Component } from "react";
import Section from "./CV/section";
import Header from "./CV/header";
import data from "./data";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Header {...data.header} />
        <div className="card-columns">
          {data.sections.map(section => (
            <Section key={section.id} {...section} />
          ))}
        </div>
        <hr className="bg-info pt-2" />
      </div>
    );
  }
}

export default App;
