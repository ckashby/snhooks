import React from "react";
import PropTypes from "prop-types";
// import { Flex } from "@adobe/react-spectrum";

const Navbar = ({ title, desc }) => {
  // const { title, desc } = props;
  return (
    <nav className="navbar bg-primary">
      <button>{title}</button>
      <button>{desc}</button>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  desc: "Search for users",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default Navbar;
