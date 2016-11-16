import React from 'react';
import icon from '../../img/minus.png';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateItemQuantity} from '../../store/actions';

export class Decrement extends React.Component{

  handleClick(){
    if(this.props.quantity > 1){
      this.props.updateItemQuantity({
        name: this.props.name,
        quantity: this.props.quantity - 1
      })
    }
  }

  render() {
    return (
      <span onClick={this.handleClick.bind(this)}>
        <img src={icon} alt="decrement"/>
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

export default connect(mapStateToProps, matchDispatchToProps)(Decrement);
