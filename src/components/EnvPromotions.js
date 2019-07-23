import React from 'react';
import { toFormattedDateString } from '../utils/utils';

const EnvPromotions = (props) => {
  const promotionRows = props.promotions.map((promotion, idx) => {
    return (
      <tr key={idx}>
        <td>{promotion.user}</td>
        <td>{toFormattedDateString(promotion.date)}</td>
        <td>{promotion.version}</td>
      </tr>
    );
  });

  return (
    <div>
      <h3 className="env-title">{props.envName}</h3>
      <table className="modal-table env-promo-table">
        <thead>
          <tr>
            <td>User</td>
            <td>Date</td>
            <td>Version</td>
          </tr>
        </thead>
        <tbody>
          {promotionRows}
        </tbody>
      </table>
    </div>
  );
}

export default EnvPromotions;