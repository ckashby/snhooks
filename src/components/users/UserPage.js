import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Users from "./Users";

export class UserPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default UserPage;
