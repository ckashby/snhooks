import React from "react";
import { Link } from "react-router-dom";

const GithubUser = ({ login, avatar_url, html_url }) => {
  return (
    <>
      <img
        // style={{ width: "160px" }}
        // className="round-img"
        src={avatar_url}
        alt="user avatar"
      />
      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark">
        More...
      </a>
    </>
  );
};

export default GithubUser;
