import React from "react";

const UserItem = (props) => {
  const { login, html_url, avatar_url } = props.user;

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
};

export default UserItem;
