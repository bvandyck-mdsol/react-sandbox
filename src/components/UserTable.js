import React, { Component } from "react";
import TableRow from "./TableRow";
import TopPanel from './TopPanel';
import MediLoader from './MediLoader'
import TableHeader from "./TableHeader/TableHeader";

class UserTable extends Component {
  state = {
    mdsolRepos: [],
    headers: [],
    values: [],
    loading: true
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
          mdsolRepos: gitHubResponse,
          loading: false
        });
      });
  };

  sortTable = (columnIndex, asc) => {

    const direction = asc ? 1 : -1;

    this.setState ({
      ...this.state,
      values: this.state.values.sort((a, b) => a[columnIndex] < b[columnIndex] ? direction : -direction)
    });
  };

  render() {
    const { headers, values, loading } = this.state;

    return (
      <div>
        {loading ? (
          <MediLoader />
        :
        <div>
          <TopPanel />
          <div className="data-table">
            <table className="data-table__table">
              <TableHeader headers = {headers} sortTable={this.sortTable}/>
              <tbody>
                {values !== undefined && values.map(val => <TableRow row={val} />)}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default UserTable;
