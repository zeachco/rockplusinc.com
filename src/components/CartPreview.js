import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const CartPreview = ({
    count
}) => (
    <a className="cartPreview" href>{count}</a>
);

CartPreview.propTypes = {
    count: PropTypes.number.isRequired
};

export default connect(state => ({
    count: state.cart.totalItems
}))(CartPreview);
