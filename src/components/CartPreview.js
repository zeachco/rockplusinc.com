import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {toggleModal} from '../store/actions/cart';

const CartPreview = ({
    count
}) => (
    <a className="cartPreview" onClick={() => toggleModal()}>{count}</a>
);

CartPreview.propTypes = {
    count: PropTypes.number.isRequired
};

export default connect(state => ({
    count: state.cart.totalItems
}))(CartPreview);
