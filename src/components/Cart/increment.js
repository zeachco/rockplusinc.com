import React from 'react';
import icon from '../../img/plus.png';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateItemQuantity} from '../../store/actions';

export class Increment extends React.Component{

  handleClick(){
    var {id, quantity} = this.props.item;
    this.props.updateItemQuantity({
      id: id,
      quantity: quantity + 1
    })
  }

  render() {

    return (
      <span onClick={this.handleClick.bind(this)}>
        <img src={icon} alt="increment"/>
      </span>
    );
  }
};

var mapStateToProps = (store) => {
  return{
    cart: store.cart
  };
};

var matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateItemQuantity: updateItemQuantity}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Increment);
