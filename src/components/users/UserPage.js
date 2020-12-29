import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Users from "./Users";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: salmon;
  margin: auto;
  padding: 1em;
`;

const MyButt = styled.button`
  color: yellow;
  font-size: 24px;
  font-weight: bold;
  min-width: fit-content;
  margin: 32px;
  background-color: blue;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 4px 8px grey;
`;

const Title = styled.h1`
  color: green;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
`;

const alertMe = () => {
  alert("No is the time...");
};

export class UserPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <MyButt onClick={alertMe}>Hola mi amigos</MyButt>
          <Wrapper>
            <Title>Welcome</Title>
          </Wrapper>
          <Users />
        </div>
      </div>
    );
  }
}

export default UserPage;
