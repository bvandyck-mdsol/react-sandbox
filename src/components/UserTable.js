import React, { Component } from "react";
import TableRow from "./TableRow";

class UserTable extends Component {
  render() {
    const { repos, headers, values } = this.props;

    return (
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
    );
  }
}

export default UserTable;
