import React from 'react';
import { currency } from 'cms-core/src/utils';

export const Price = ({ value }) => (
  <span>
    {currency((value > 0) ? value : 0)}$
  </span>
);

Price.propTypes = {
  value: React.PropTypes.number.isRequired
};
