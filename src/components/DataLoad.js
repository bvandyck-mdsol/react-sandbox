import React, { Component } from "react";
import Home from "./Home";

class DataLoad extends Component {
  state = {
    mdsolRepos: [],
    headers: []
  };

  async componentDidMount() {
    fetch("https://api.github.com/orgs/mdsol/repos")
      .then(response => {
        return response.json();
      })
      .then(gitHubResponse => {
        const selectedHeaders = Object.keys(gitHubResponse[0]);
        const selectedValues = gitHubResponse.map(res => {
          return Object.values(res).slice(0, 4);
        });

        this.setState({
          headers: selectedHeaders.slice(0, 4),
          values: selectedValues,
          mdsolRepos: gitHubResponse
        });
      });
  }

  render() {
    const { mdsolRepos, headers, values } = this.state;

    return <Home repos={mdsolRepos} headers={headers} values={values} />;
  }
}

export default DataLoad;
