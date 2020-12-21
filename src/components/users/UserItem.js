import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { login, html_url, avatar_url } = this.props.user;

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="user avatar"
          className="img round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    );
  }
}

export default UserItem;
