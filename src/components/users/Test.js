// rfc
import React from "react";

export default function Test() {
  return <div></div>;
}

// rce
import React, { Component } from "react";

export class Test extends Component {
  render() {
    return <div></div>;
  }
}

export default Test;

// I do not like the functional component.  Arrow please!
