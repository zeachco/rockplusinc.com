import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CartIcon from 'react-icons/lib/md/shopping-cart';
import {toggleModal} from '../store/actions/cart';

const CartPreview = ({
    count
}) => (
    <a className="cartPreview" onClick={() => toggleModal()}><CartIcon />({count})</a>
);

CartPreview.propTypes = {
    count: PropTypes.number.isRequired
};

export default connect(state => ({
    count: state.cart.totalItems
}))(CartPreview);
