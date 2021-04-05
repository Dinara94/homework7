import React, { useEffect, useState } from "react";

import "./User.css";

export default function User({ user }) {
  return (
    <article className="user">
      <div className="logo" />
      <div className="generalInfo">
        <p className="name">{user.name}</p>
        <p className="username">
          {"Username: "}
          {user.username}
        </p>
        <p className="email">{user.email}</p>
        <p className="phone">{user.phone}</p>
        <p className="address">
          {user.address.street}
          {", "}
          {user.address.suite}
          {", "}
          {user.address.city}
        </p>
        <p className="zip">{user.address.zipcode}</p>
        <p className="website">{user.website}</p>
      </div>
      <div className="company">
        <p className="companyName">{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
        <p>{user.company.bs}</p>
      </div>
    </article>
  );
}
