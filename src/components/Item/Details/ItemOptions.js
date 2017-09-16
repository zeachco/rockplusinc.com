import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'auto-bind-es5';
import { chooseItemOption } from '../../../store/actions/itemDetails';

function findDefaultForOption(code, options) {
  return options.reduce((defaultValue, opt) => {
    return (opt.code === code && opt.options[0]) ? opt.options[0].code : defaultValue;
  }, '');
}

class ItemOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.options.map(opt => opt.code).reduce((values, code) => {
        values[code] = typeof props.initialValues[code] === 'object' && props.initialValues[code] !== null && typeof props.initialValues[code].code === 'string' ?
          props.initialValues[code].code :
          findDefaultForOption(code, props.options);
        return values;
      }, {})
    };
    autoBind(this);
  }

  handleOptionChange(itemOption, e) {
    e.preventDefault();
    let values = Object.assign({}, this.state.values);
    values[itemOption.code] = e.target.value;
    this.setState({ values });
    chooseItemOption(itemOption.code, e.target.value);
  }

  render() {
    const itemOptions = this.props.options.map(itemOption => {
      const choices = itemOption.options.map((opt, index) => (
        <option value={opt.code} key={`${index}_${opt.code}`}>{opt.code}</option>
      ));

      return (<div className="item-option-select" key={itemOption.code}>
        <label>{itemOption.code}</label>
        <select
          onChange={ this.handleOptionChange.bind(this, itemOption)} 
          value={this.state.values[itemOption.code]}>
          { choices }
        </select>
      </div>);
    });

    return (<div>{ itemOptions }</div>);
  }
}

const optionChoiceShape = PropTypes.shape({
  code: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
});

const itemOptionShape = PropTypes.shape({
  code: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(optionChoiceShape).isRequired
})

ItemOptions.propTypes = {
  options: PropTypes.arrayOf(itemOptionShape).isRequired,
  initialValues: PropTypes.object
};

ItemOptions.defaultProps = {
  initialValues: {}
};

export default ItemOptions;
