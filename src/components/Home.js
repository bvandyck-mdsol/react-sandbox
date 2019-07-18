import React from "react";
import SidePanel from "./SidePanel";
import UserTable from "./UserTable";
import TopPanel from "./TopPanel";

const Home = props => {
  const { repos, headers, values } = props;

  return (
    <div className="repos">
      <SidePanel />
      <div className="main-panel">
        <TopPanel />
        <UserTable repos={repos} headers={headers} values={values} />
      </div>
    </div>
  );
};

export default Home;
