import React from 'react';
import Glyph from '../../../img/cart.png';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../../store/actions';

export class AddToCart extends React.Component {

  handleClick() {
    const {_id, name, code, price, description} = this.props;
    const item = {id: _id, name: name, code: code, price: price, description:description};
    this.props.addToCart(item);
  }

  render() {
    var item = this.props.cart.find((item) => item.name === this.props.name)

    return (
      <div className='addToCart' onClick={this.handleClick.bind(this)}>
        <img src={Glyph} alt='glyph-cart'/>
        {(item) ? <span>{item.quantity}</span> : ''}
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
