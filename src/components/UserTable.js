import React, { Component } from "react";
import TableRow from "./TableRow";
import TopPanel from "./TopPanel";
import MediLoader from "./MediLoader";
import TableHeader from "./TableHeader/TableHeader";
import TableDetailModal from "./TableDetailModal/TableDetailModal";

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdsolRepos: [],
      headers: [],
      values: [],
      details: [],
      rowClicked: false,
      loading: true
    };
  }

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

  sortTable = (columnIndex, asc) => {
    const direction = asc ? 1 : -1;

    this.setState({
      ...this.state,
      values: this.state.values.sort((a, b) =>
        a[columnIndex] < b[columnIndex] ? direction : -direction
      )
    });
  };

  handleOpenDetailModal = row => {
    const { mdsolRepos } = this.state;

    const rowDetails = mdsolRepos.find(repo => {
      return repo.id === row[0];
    });

    this.setState({
      rowClicked: true,
      details: rowDetails
    });
  };

  closeModal = () => {
    this.setState({ rowClicked: false });
  };

  render() {
    const { headers, values, loading, details, rowClicked } = this.state;

    return (
      <div>
        {loading ? (
          <MediLoader />
        ) : (
          <div>
            <TopPanel />
            <div className="data-table">
              <table>
                <TableHeader headers={headers} sortTable={this.sortTable} />
                <tbody>
                  {values !== undefined &&
                    values.map(val => (
                      <TableRow
                        key={val.id}
                        openDetailModal={this.handleOpenDetailModal}
                        row={val}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {rowClicked && (
          <TableDetailModal closeModal={this.closeModal} details={details} />
        )}
      </div>
    );
  }
}

export default UserTable;
