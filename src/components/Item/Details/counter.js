import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateItemQuantity, removeFromCart} from '../../../store/actions';


export class Counter extends React.Component {

  handleClick(e) {
    e.preventDefault();
    var item = this.props.cart.find((item) => item.id === this.props._id)
    if (item) {
        var {id, quantity} = item;
        if(quantity > 1){
        this.props.updateItemQuantity({
            id: id,
            quantity: quantity - 1
        })
        }
        else if (quantity <= 1){
            this.props.removeFromCart(id);
        }
    }
  }

  render() {
    var item = this.props.cart.find((item) => item.id === this.props._id)

    return (
      <div className='counter' onClick={this.handleClick.bind(this)}>
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
  return bindActionCreators({updateItemQuantity: updateItemQuantity, removeFromCart: removeFromCart}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Counter);
