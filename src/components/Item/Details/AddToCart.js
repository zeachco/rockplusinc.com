import React from 'react';
import Glyph from '../../../img/cart.png';

class AddToCart extends React.Component {

  handleClick() {
    console.log('Added to Cart');
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

export default AddToCart;
