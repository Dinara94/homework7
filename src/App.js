import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import UserList from "./components/users/UserList";
import AlbumList from "./components/albums/AlbumList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/users" component={UserList} />
          <Route path="/albums" component={AlbumList} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
