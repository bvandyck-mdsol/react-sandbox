import React from "react";
import SidePanel from "./components/SidePanel";
import UserTable from "./components/UserTable";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DataIntake from "./components/DataIntake";
import DataQC from "./components/DataQC";
import Users from "./components/Users";
import "./styles/app.scss";


const App = () => {

  return (
    <div className="App flex-row">
      <Router>
        <SidePanel />

        <div className="main-panel">
          <Route path="/" exact component={UserTable} />
          <Route path="/data-intake" exact component={DataIntake} />
          <Route path="/master" component={UserTable} />
          <Route path="/data-qc" component={DataQC} />
          <Route path="/users" component={Users} />
        </div>
      </Router>
    </div>
  );
}

export default App;
