import React from "react";
import { Link } from "react-router-dom";

const GithubUser = (props) => {
  return (
    <div>
      <img className="round-img" src={props.avatar_url} alt="user avatar" />
      <h3>{props.login}</h3>
      <a href={props.html_url}>More...</a>
    </div>
  );
};

export default GithubUser;
