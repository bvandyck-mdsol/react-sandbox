import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DataIntake from "./DataIntake";
import Master from "./Master";
import DataQC from "./DataQC";
import Users from "./Users";

const SidePanelIcons = styled.div`
  width: 85px;
  height: 100%;
  background-color: rgb(34, 34, 34);
`;

class SidePanel extends Component {
  render() {
    return (
      <Router>
        <div className="side-panel">
          <SidePanelIcons />

          <div className="side-panel__options flex-column">
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

              <Route path="/data-intake" exact component={DataIntake} />
              <Route path="/master" component={Master} />
              <Route path="/data-qc" component={DataQC} />
              <Route path="/users" component={Users} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default SidePanel;
