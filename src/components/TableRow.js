import React from "react";

const TableRow = props => {
  console.log(props.row);

  return (
    <tr>
      {props.row.map(rowVal => (
        <td> {rowVal} </td>
      ))}
    </tr>
  );
};

export default TableRow;
