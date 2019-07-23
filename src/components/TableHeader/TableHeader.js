import React, { useState } from "react";
import "./TableHeader.css";

const TableHeader = props => {
  const [sortAsc, setSortAsc] = useState(true);

  const handleClick = (columnIndex) => {
    setSortAsc(!sortAsc);
    props.sortTable(columnIndex, sortAsc)
  }

  return (
    <thead>              
      <tr className="a-header">
        {props.headers.map((headerValue, index) => (
          <td key={headerValue} onClick={() => handleClick(index)}> {headerValue} </td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
