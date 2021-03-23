import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <hr />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/users">
            <p>Users</p>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
