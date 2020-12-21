import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "ckashby",
        avatar_url: "https://avatars0.githubusercontent.com/u/474960?v=4",
        html_url: "https://github.com/ckashby",
      },
      {
        id: "2",
        login: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett",
      },
      {
        id: "3",
        login: "vanpelt",
        avatar_url: "https://avatars1.githubusercontent.com/u/17?v=4",
        html_url: "https://github.com/vanpelt",
      },
    ],
  };

  render() {
    const userStyle = {
      // width: "1000px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: "1rem",
    };

    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }

  // return (
  //     <div>
  //       {this.state.users.map((user) => (
  //         <div className="card text-center">
  //           <img
  //             src={user.avatar_url}
  //             alt="user avatar"
  //             className="img round-img"
  //             style={{ width: "160px" }}
  //           />
  //           <h3>{user.login}</h3>
  //         </div>
  //       ))}
  //     </div>
  //   );
}

export default Users;
