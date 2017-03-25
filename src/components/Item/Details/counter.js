import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { updateItemQuantity, removeFromCart } from '../../../store/actions/cart';

class Counter extends React.Component {

  handleClick(e) {
    e.preventDefault();
    const {item} = this.props;
    if (item) {
      if (quantity > 1)
        updateItemQuantity(item, quantity - 1)
      else if (quantity <= 1)
        removeFromCart(item);
      }
    }

  render() {
    const item = this
      .props
      .cart
      .item
      .find((item) => item.id === this.props._id)

    return (
      <div
        className='counter'
        onClick={this
        .handleClick
        .bind(this)}>
        {(item)
          ? <span>{item.quantity}</span>
          : ''}
      </div>
    )
  }
};

const mapStateToProps = store => ({cart: store.cart});

module.exports = connect(mapStateToProps)(Counter);
