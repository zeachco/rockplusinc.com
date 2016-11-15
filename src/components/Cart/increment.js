import React from 'react';
import icon from '../../img/plus.png';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateItemQuantity} from '../../store/actions';

export class Increment extends React.Component{

  handleClick(){
    this.props.updateItemQuantity({
      code: this.props.code,
      quantity: this.props.quantity + 1
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
