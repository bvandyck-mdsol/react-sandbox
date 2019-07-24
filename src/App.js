import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserTable from "./components/UserTable";
import DataIntake from "./components/DataIntake";
import DataQC from "./components/DataQC";
import Users from "./components/Users";
import "./styles/app.scss";
import styled from "styled-components";

const App = () => {

  const SidePanelIcons = styled.div`
  width: 85px;
  height: 100%;
  background-color: rgb(34, 34, 34);
`;

  const [showMenu, setShowMenu] = useState(true);

  const handleHideShowMenu = () => {
    setShowMenu(!showMenu);
  }

  const SideMenu = () => {
    return (<div className="side-panel__options flex-column">
      <div className="client-name">Client Name</div>

      <div>
        <Link to="/data-intake">
          <div className="side-panel__route side-panel__route--selected">
            Data Intake
        </div>
        </Link>

        <Link to="/data-qc">
          <div className="side-panel__route"> Data QC </div>
        </Link>

        <Link to="/master">
          <div className="side-panel__route"> Master </div>
        </Link>

        <Link to="/users">
          <div className="side-panel__route"> Users </div>
        </Link>
      </div>

    </div>)
  }
  return (
    <div className="App flex-row">
      <Router>
        <div className="side-panel">
          <SidePanelIcons onClick={handleHideShowMenu} />
          {showMenu ? <SideMenu /> : null}
        </div>        
        <div className="main-panel">
          <Route path="/" exact component={UserTable} />
          <Route path="/data-intake" exact component={DataIntake} />
          <Route path="/master" component={UserTable} />
          <Route path="/data-qc" component={DataQC} />
          <Route path="/users" component={Users} />
        </div>
      </Router>
    </div>)
}

export default App;
