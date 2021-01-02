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
        {users.map((user) => {
          return (
            <div>
              <GithubUser
                key={user.login}
                login={user.login}
                avatar_url={user.avatar_url}
                html_url={user.html_url}
              />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Github;
