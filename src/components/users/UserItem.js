import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { name, email, website } }) => {
  // const { login, html_url, avatar_url } = props.user;
  UserItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  };

  return (
    <div className="card text-center">
      {/* <img
        src={avatar_url}
        alt="user avatar"
        className="img round-img"
        style={{ width: "60px" }}
      /> */}
      <h3>{name}</h3>
      <p>{email}</p>
      <a href={website} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </div>
  );
};

export default UserItem;
