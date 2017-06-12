import React from 'react';
import {connect} from 'react-redux';

import CartItem from './CartItem';

const CartList = ({
    items
}) => (
    <div className="box">
        {items.map(item => <CartItem item={item}/>)}
    </div>
);

export default connect(state => ({
    items: state.cart.cartItems
}))(CartList);
