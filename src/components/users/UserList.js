import React, { useEffect, useState } from "react";
import useData from "../services/useData";
import User from "./User";

import "./UserList";

export default function UserList() {
  const { users } = useData();

  return (
    <div className="wrapper">
      <h1 className="title">All users</h1>
      <ul className="container">
        {users.map((item) => (
          <User key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

