import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Users from "./Users";
import styled from "styled-components";

const buttClick = () => {
  alert("You clicked me");
};

const MyButt = styled.button`
  font-size: 36px;
  color: green;
  background: white;
  border-radius: 1em;
  padding: 0.2em;
  box-shadow: 0 4px 8px grey;
`;

export class UserPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <MyButt onClick={buttClick}>Testing</MyButt>
          <Users />
        </div>
      </div>
    );
  }
}

export default UserPage;
