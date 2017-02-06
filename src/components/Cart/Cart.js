import React from 'react';
import {connect} from 'react-redux';
import {CartRow, Price} from 'components';
import imgCart from 'img/cart.png';

const Cart = ({cartItems, cartTotal}) => (
    <div className="cart">
        <h3>Cart</h3>
        {cartItems.map(item => (<CartRow key={item.getCartId()} item={item} />))}
        <hr />
        Total: <Price value={cartTotal} />
    </div>
);

var mapStateToProps = store => ({
    cartItems: store.cart.items,
    cartTotal: store.cart.total
});

// var matchDispatchToProps = dispatch => ({clearCart: clearCart});
const ConnectedCart = connect(mapStateToProps, null)(Cart);
export {ConnectedCart as Cart};
