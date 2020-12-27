import React from "react";
import PropTypes from "prop-types";
import { colors, Flex, View } from "@adobe/react-spectrum";

const Navbar = ({ title, desc }) => {
  // const { title, desc } = props;
  const colors = [
    {
      color: "celery-600",
    },
    { color: "celery-600" },
    { color: "celery-600" },
  ];
  return (
    <nav className="navbar bg-primary">
      <button>{title}</button>
      <Flex direction="row" gap="size-100" wrap>
        {colors.map((color) => (
          <View
            key={color}
            backgroundColor={color}
            width="size-800"
            height="size-800"
          />
        ))}
      </Flex>
      <button onClick={() => alert("Hola amigos")}>{desc}</button>
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
