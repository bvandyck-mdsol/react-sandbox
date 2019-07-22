import React, { Component } from "react";
import TableRow from "./TableRow";
import TopPanel from './TopPanel';
import MediLoader from './MediLoader'

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
  }

  render() {
    const { headers, values, loading } = this.state;

    return (
      <div>
        {loading ?
          <MediLoader />
        :
        <div>
          <TopPanel />
          <div className="data-table">
            <table>
              <thead>
                <tr>
                  {headers.map(header => (
                    <th> {header} </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {values !== undefined && values.map(val => <TableRow row={val} />)}
              </tbody>
            </table>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default UserTable;
