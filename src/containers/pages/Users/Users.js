import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Path = /testUsers!!!!!!!!

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      console.log("testing ", response.data);
    });
  }, []);

  return (
    <>
      <h3>Users</h3>
      <Link to="/">Home</Link>
      <hr />
      {users.map((user) => {
        return (
          <p key={user.id}>
            <strong>{user.name} :</strong> {user.email} <br />
            {user.address.city}
            <br />
            {user.company.catchPhrase}
          </p>
        );
      })}
    </>
  );
}

export default Users;
