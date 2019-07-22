import React from "react";

const TableRow = props => {
  return (
    <tr>
      {props.row.map(rowVal => (
        <td> {rowVal} </td>
      ))}
    </tr>
  );
};

export default TableRow;
