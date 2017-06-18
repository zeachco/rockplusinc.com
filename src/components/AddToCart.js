import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addToCart} from '../store/actions/cart';
import CartIcon from 'react-icons/lib/fa/cart-plus';
          
const AddToCart = ({item}) => (
    <button style={{marginLeft: '1em'}} className="button is-primary is-small" onClick={() => {
      addToCart(item.get('_id'))
    }}><CartIcon /></button>
);

AddToCart.propTypes = {
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(AddToCart);
