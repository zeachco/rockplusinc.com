import React from 'react';
import icon from '../../img/trash.png';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeFromCart} from '../../store/actions';

export class Remove extends React.Component{

  handleClick(){
    this.props.removeFromCart(this.props.code);
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <img src={icon} alt="delete"/>
      </div>
    );
  }
};

var mapStateToProps = (store) => {
  return{
    cart: store.cart
  };
};

var matchDispatchToProps = (dispatch) => {
  return bindActionCreators({removeFromCart: removeFromCart}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Remove);
