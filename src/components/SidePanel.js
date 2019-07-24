import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const SidePanelIcons = styled.div`
  width: 85px;
  height: 100%;
  background-color: rgb(34, 34, 34);
`;

const SidePanel = () => {

  const[showMenu, setShowMenu] = useState(true);

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
      <Router>
        <div className="side-panel">
          <SidePanelIcons onClick={handleHideShowMenu} />
          {showMenu ? <SideMenu /> : null}

        </div>
      </Router>
    );
  }

export default SidePanel;
