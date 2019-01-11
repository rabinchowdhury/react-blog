import React, { Component } from "react";

import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}
