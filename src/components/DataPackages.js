import React from 'react';

const DataPackages = (props) => {
  const packageRows = props.dataPackages.map((dataPackage, idx) => {
    return (
      <tr key={idx}>
        <td>{dataPackage.name}</td>
        <td>{dataPackage.version}</td>
      </tr>
    );
  });

  return (
    <div>
      <h3 className="env-title">Data Package</h3>
      <table className="modal-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Ver.</td>
          </tr>
        </thead>
        <tbody>
          {packageRows}
        </tbody>
      </table>
    </div>
  );
}

export default DataPackages;