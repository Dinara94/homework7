import React, { useEffect, useState } from "react";
import Axios from "axios";
import User from "./User";

import "../../App.css";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const USERS_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    Axios.get(USERS_URL).then((resp) => {
      const users = resp.data;
      setUsers(users);
    });
  }, [setUsers]);

  return (
    <div className="wrapper">
      <h1 className="title">Users list</h1>
      <ul className="container">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
