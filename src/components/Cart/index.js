import React from 'react';
import SkyLight from 'react-skylight';
import Glyph from '../../img/cart.png';
import AnR from './addAndRemove';
import Remove from './remove';

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
    var items = [
      {
        _id : '001',
        code : 'DT-06',
        price : 60,
        quantity : 1,
      },
      {
        _id : '002',
        code : 'Flag Nazi',
        price : 10,
        quantity : 100,
      },{
        _id : '003',
        code : 'DT-06',
        price : 60,
        quantity : 1,
      },
      {
        _id : '012',
        code : 'Flag Nazi',
        price : 10,
        quantity : 100,
      },{
        _id : '021',
        code : 'DT-06',
        price : 60,
        quantity : 1,
      },
      {
        _id : '032',
        code : 'Flag Nazi',
        price : 10,
        quantity : 100,
      },{
        _id : '041',
        code : 'DT-06',
        price : 60,
        quantity : 1,
      },
      {
        _id : '52',
        code : 'Flag Nazi',
        price : 10,
        quantity : 100,
      }
    ];

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
            {items.map(i => (
                <tr key={i._id}>
                  <td>{i.code}</td>
                  <td>{currency(i.price) + '$'}</td>
                  <td>{i.quantity}<AnR id={i._id}/></td>
                  <td>{currency(i.price * i.quantity) + '$'}</td>
                  <td><Remove id={i._id}/></td>
                </tr>
              ))}
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

export default Cart;
