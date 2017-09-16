import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addToCart} from '../store/actions/cart';
import CartIcon from 'react-icons/lib/fa/cart-plus';

function formatOptions(options) {
  return Object.keys(options)
    .reduce((acc, key) => {
      if (key !== '_data')
        acc[key] = options[key].code;
      return acc;
    }, {});
}

const AddToCart = ({item}) => (
    <button style={{marginLeft: '1em'}} className="button is-primary is-small" onClick={() => {
      addToCart(item.get('_id'), 1, formatOptions(item.selectedOptions));
    }}><CartIcon /></button>
);

AddToCart.propTypes = {
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(AddToCart);
