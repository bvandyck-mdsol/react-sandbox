import React from "react";

const TableRow = props => {
  const { row } = props;

  return (
    <tr key={row.id} onClick={() => props.openDetailModal(row)}>
      {row.map(rowVal => (
        <td key={rowVal}> {rowVal} </td>
      ))}
    </tr>
  );
};

export default TableRow;
