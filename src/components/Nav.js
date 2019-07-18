import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserIcons from "./UserIcons";
import UserTable from "./UserTable";
import Home from "./Home";

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">User Table </Link>
            </li>
            <li>
              <Link to="/users/"> User Icons </Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={UserTable} />
        <Route path="/users/" component={UserIcons} />
      </div>
    </Router>
  );
}

export default AppRouter;
