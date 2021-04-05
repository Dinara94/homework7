import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../../App.css";

export default function Home() {
  return (
    <nav className="navBar">
      <Link to="/" className="navBar_link">Dashboard</Link>
      <Link to="/users" className="navBar_link">Users</Link>
      <Link to="/albums" className="navBar_link">Albums</Link>
    </nav>
  );
}
