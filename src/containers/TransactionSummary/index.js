import React, { PropTypes } from 'react';
import Grid from 'components/Grid';

const { string, shape, arrayOf, object } = PropTypes;

const TransactionSummary = (props) => {
  const { fields, data } = props;
  return (
    <Grid.Footer>
      <Grid.Row>
        { fields.map((field, index) => {
          return (<Grid.Cell
            text={data[field.mapping]}
            className={field.className}
            key={`tf${index}`} />);
        })
}
      </Grid.Row>
    </Grid.Footer>
  );
};

TransactionSummary.propTypes = {
  fields: arrayOf(shape({ mapping: string, className: string })).isRequired,
  data: object
};

export default TransactionSummary;
