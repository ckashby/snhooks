import React from "react";
import { Link } from "react-router-dom";

const GithubUser = ({ login, avatar_url, html_url }) => {
  return (
    <div className="card">
      <img
        className="round-img"
        style={{ width: "160px" }}
        src={avatar_url}
        alt="user avatar"
      />
      <h3 style={{ color: "green" }}>{login}</h3>
      <a href={html_url}>More...</a>
    </div>
  );
};

export default GithubUser;
