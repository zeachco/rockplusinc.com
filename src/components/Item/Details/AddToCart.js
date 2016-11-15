import React from 'react';
import Glyph from '../../../img/cart.png';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../../store/actions';

export class AddToCart extends React.Component {

  handleClick() {
    const {_id, code, price} = this.props;
    const item = {id: _id, code: code, price: price};
    this.props.addToCart(item);
  }

  render() {
    return (
      <div className='addToCart' onClick={this.handleClick.bind(this)}>
        {this.props.children}
        <img src={Glyph} alt='glyph-cart'/>
      </div>
    )
  }
};

var mapStateToProps = (store) => {
  return{
    cart: store.cart
  };
};

var matchDispatchToProps = (dispatch) => {
  return bindActionCreators({addToCart: addToCart}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(AddToCart);
