import React, { useState, useEffect } from "react";
import { Flex, View } from "@adobe/react-spectrum";
import UserItem from "./UserItem";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div
      style={{
        width: "200px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "1rem",
      }}
    >
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );

  // state = {
  //   users: [
  //     {
  //       id: "1",
  //       login: "ckashby",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/474960?v=4",
  //       html_url: "https://github.com/ckashby",
  //     },
  //     {
  //       id: "2",
  //       login: "pjhyett",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
  //       html_url: "https://github.com/pjhyett",
  //     },
  //     {
  //       id: "3",
  //       login: "vanpelt",
  //       avatar_url: "https://avatars1.githubusercontent.com/u/17?v=4",
  //       html_url: "https://github.com/vanpelt",
  //     },
  //   ],
  // };
};

export default Users;
