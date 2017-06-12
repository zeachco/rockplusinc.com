import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CartItem from './CartItem';

const CartList = ({
    items
}) => (
    <div className="box">
        {items.map(item => <CartItem key={item.id} item={item}/>)}
    </div>
);

CartList.propTypes = {
    items: PropTypes.array.isRequired
};

export default connect(state => ({
    items: state.cart.cartItems
}))(CartList);
