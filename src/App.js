import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Team from "./component/Team";
import Header from "./component/Header";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
        </div>
      </Router>
    );
  }
}
