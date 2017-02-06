import React from 'react';
import Glyph from 'img/cart.png';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from 'store/actions';

export class AddToCart extends React.Component {
  handleClick() {
    const {item, addToCart} = this.props;
    addToCart(item);
  }

  render() {
    return (
      <div
        className='addToCart'
        onClick={this
        .handleClick
        .bind(this)}>
        <img src={Glyph} alt='glyph-cart'/>
      </div>
    )
  }
};

const mapStateToProps = store => ({cart: store.cart});
const matchDispatchToProps = dispatch => bindActionCreators({
  addToCart
}, dispatch);
export default connect(mapStateToProps, matchDispatchToProps)(AddToCart);