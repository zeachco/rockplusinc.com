import React from 'react';
import { currency } from 'n3000/shared';

export const Price = ({ value }) => (
  <span>
    {currency((value > 0) ? value : 0)}$
  </span>
);

Price.propTypes = {
  value: React.PropTypes.number.isRequired
};
