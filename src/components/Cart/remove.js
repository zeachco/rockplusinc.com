import React from 'react';
import icon from '../../img/trash.png';
import {connect} from 'react-redux';
// import {removeFromCart} from '../../store/actions';

export class Remove extends React.Component{

  handleClick(){

    console.log("item removed");
  }

  render() {

    const {id} = this.props;

    return (
      <div id={id} onClick={this.handleClick.bind(this)}>
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


export default connect(mapStateToProps)(Remove);
