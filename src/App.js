import React, { Component } from 'react';
import './App.css';

import UserList from "./components/users/UserList";
import AlbumList from "./components/albums/AlbumList";


function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <a className="navBar_link">Dashboard</a>
        <a className="navBar_link">Users</a>
        <a className="navBar_link">Albums</a>
      </nav>

      <UserList />
      <AlbumList />
    </div>
  );
}

export default App;
