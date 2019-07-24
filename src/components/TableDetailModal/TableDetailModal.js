import React from "react";
import "./TableDetailModal.scss";
import styled from "styled-components";

const CloseButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: crimson;
  color: white;
  position: absolute;
  right: 41px;
`;

function TableDetailModal(props) {
  const { details } = props;

  const detailKeys = Object.keys(details);

  return (
    <div className="table-detail-modal">
      <h1 className="table-detail__header">
        {details["name"]} Repository Details
      </h1>
      <div className="table-detail-modal__details">
        <div className="data-details flex-column">
          {detailKeys.map(keyName => (
            <div key={keyName} className="flex-row">
              <span className="data-details__key"> {keyName} </span>
              <span className="data-details__value">
                {typeof details[keyName] === "object" ? "" : details[keyName]}
              </span>
            </div>
          ))}
        </div>
      </div>
      <CloseButton onClick={() => props.closeModal()}>Close</CloseButton>
    </div>
  );
}

export default TableDetailModal;
