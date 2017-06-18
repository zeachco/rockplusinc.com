import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AutoBind from 'auto-bind-es5';

import CartItem from './CartItem';

class CartList extends Component {
    constructor(props) {
        super(props);
        AutoBind(this);
    }

    render() {
        const {items} = this.props;
        return (
            <div>
                {items.map(item => (
                    <CartItem
                        key={item._id}
                        item={item.data || {}}
                        quantity={item.quantity}
                    />
                ))}
            </div>
        );
    }
}

CartList.propTypes = {
    items: PropTypes.array.isRequired
};

export default connect(state => ({
    items: state.cart.cartData.items
}))(CartList);
