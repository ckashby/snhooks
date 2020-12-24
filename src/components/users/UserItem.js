import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, html_url, avatar_url } }) => {
  // const { login, html_url, avatar_url } = props.user;
  UserItem.propTypes = {
    login: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  };

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
