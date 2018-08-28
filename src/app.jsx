import React, { Component } from "react";
import Section from "./CV/section";

var data = {
  title: "Skills",
  content: "test"
};

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Section {...data} />
      </div>
    );
  }
}

export default App;
