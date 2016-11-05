import React from 'react';
import SkyLight from 'react-skylight';
import Glyph from '../img/cart.png';

export class Cart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick() {
    console.log('Look at Cart');
    this.refs.customDialog.show();
  }

  render() {
    return (
      <span className='cart-modal'>
        <div className='cart' onClick={this.handleClick.bind(this)}>
          <img src={Glyph} alt='glyph-cart'/>
        </div>
        <SkyLight hideOnOverlayClicked ref="customDialog" title='Cart'>

        </SkyLight>
      </span>
    );
  }
};

export default Cart;
