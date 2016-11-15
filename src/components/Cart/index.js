import React from 'react';
import SkyLight from 'react-skylight';
import Glyph from '../../img/cart.png';
import Increment from './increment';
import Decrement from './decrement';
import Remove from './remove';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clearCart} from '../../store/actions';

const currency = n => n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

export class Cart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick() {
    this.refs.customDialog.show();
  }

  sendOrder() {
    //send order by e-mail
    console.info('Order should be sent by the API.');
    console.info('Order: ', this.props.cart.map((i) => {
      return {
          name: i.name || 'N/A',
          code: i.code || 'N/A',
          description: i.description || 'N/A',
          quantity: i.quantity
        }
    }));
    this.props.clearCart();
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
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>SubTotal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.cart.map((i) => {
                const {id, name, price, quantity, description} = i;
                total += (((price > 0) ? price : 0) * quantity)
                return (
                  <tr key={id}>
                    <td>{name || '-'}</td>
                    <td>{description || '-'}</td>
                    <td>{currency((price > 0) ? price : 0) + '$'}</td>
                    <td className="addAndRemove">
                      <Increment name={name} quantity={quantity}/> {quantity} <Decrement name={name} quantity={quantity}/>
                    </td>
                    <td>{currency(((price > 0) ? price : 0) * quantity) + '$'}</td>
                    <td><Remove name={name}/></td>
                  </tr>
                )
              })
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

var matchDispatchToProps = (dispatch) => {
  return bindActionCreators({clearCart: clearCart}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Cart);
