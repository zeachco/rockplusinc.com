import React from 'react';
import SkyLight from 'react-skylight';
import Glyph from '../../img/cart.png';
import AnR from './addAndRemove';
import Remove from './remove';
import {connect} from 'react-redux';

const currency = n => n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

export class Cart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick() {
    console.log('Look at Cart');
    this.refs.customDialog.show();
  }

  sendOrder() {
    //send order by e-mail
    console.log('Order sent');
    //clear cart
    this.refs.customDialog.hide();
  }

  render() {
    var total = 0;

    return (
      <span className='cart-modal'>
        <div className='cart' onClick={this.handleClick.bind(this)}>
          <img src={Glyph} alt='glyph-cart'/>
        </div>
        <SkyLight hideOnOverlayClicked ref="customDialog" title='Cart'>
        <table>
          <thead>
            <tr>
              <th>Code</th>{/* code + loupe(img/link) */}
              <th>Price</th>
              <th>Quantity</th>{/* Qty + [+][-] */}
              <th>SubTotal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.cart.map(i => (
                  <tr key={i.id}>
                    <td>{i.code}</td>
                    <td>{currency(i.price) + '$'}</td>
                    <td>{i.quantity}<AnR id={i._id}/></td>
                    <td>{currency(i.price * i.quantity) + '$'}</td>
                    <td><Remove id={i._id}/></td>
                  </tr>
                ))
            }
          </tbody>
          <tfoot>
            <tr>
              <td>Total = {currency(total) + '$'}</td>
              <td><button onClick={this.sendOrder.bind(this)}>Send order</button></td>
            </tr>
          </tfoot>
        </table>
        </SkyLight>
      </span>
    );
  }
};

var mapStateToProps = (store) => {
  return{
    cart: store.cart
  };
};

export default connect(mapStateToProps)(Cart);
