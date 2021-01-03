import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GithubUser from "./GithubUser";
// import { Link } from "@adobe/react-spectrum";

const Github = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <h2>Github User List</h2>
      <Link to="/">Home</Link>
      <hr />
      <ul>
        {users.map(({ login, avatar_url, html_url }) => {
          return (
            <GithubUser
              key={login}
              login={login}
              avatar_url={avatar_url}
              html_url={html_url}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Github;
