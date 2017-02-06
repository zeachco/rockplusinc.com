import React from 'react';
import SkyLight from 'react-skylight';
import Glyph from '../../img/cart.png';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clearCart, sendCart} from '../../store/actions';
import {currency} from '../../core/utils'

import imgPlus from '../../img/plus.png';
import imgMinus from '../../img/minus.png';

const Cart = ({item, total}) => {
    <pre>Total: {total}\n\n
        {JSON.stringify(item)}</pre>
};

// class Cart extends React.Component {
//     constructor() {
//         super();
//         this.state = {};
//         autoBind(this);
//     }

//     handleClick() {
//         this
//             .refs
//             .customDialog
//             .show();
//     }

//     updateNotes(ev) {
//         this.setState({notes: ev.target.value});
//     }

//     sendOrder() {
//         const preparedItems = this
//             .props
//             .cart
//             .map((i) => {
//                 return {
//                     name: i.name || 'N/A',
//                     code: i.code || 'N/A',
//                     description: i.description || 'N/A',
//                     quantity: i.quantity
//                 }
//             });

//         sendCart({items: preparedItems, notes: this.state.notes});
//         this
//             .props
//             .clearCart();
//         this
//             .refs
//             .customDialog
//             .hide();
//     }

//     increment(item) {
//         return e => {
//             e.preventDefault();
//             item.quantity++;
//             console.log('increment', item);
//         }
//     }

//     decrement(item) {
//         return e => {
//             e.preventDefault();
//             item.quantity--;
//             console.log('decrement', item);
//         }
//     }

//     printRow(i, index) {
//         const {id, name, getPrice, quantity, description} = i;
//         const price = getPrice().value;

//         this.total += (((price > 0)
//             ? price
//             : 0) * quantity)
//         this.totalQty += i.quantity;

//         return (

//         );
//     }

//     render() {
//         this.total = 0;
//         this.totalQty = 0;

//         return (
//             <span className='cart-modal'>
//                 <div className='cart' onClick={this.handleClick}>
//                     Checkout&nbsp;<img src={Glyph} alt='glyph-cart'/>
//                 </div>
//                 <SkyLight hideOnOverlayClicked ref="customDialog" title='Checkout'>
//                     <div className="scrolling-content">
//                         {this
//                             .props
//                             .cart
//                             .map(this.printRow)}
//                     </div>
//                     <div className="row">
//                         <textarea rows="6" onChange={this.updateNotes} placeholder="Notes"></textarea>
//                     </div>
//                     <div className="row summary">
//                         Total = {currency(this.total) + '$'}
//                         for {this.totalQty}
//                         product(s)
//                         <button className="btn-cart" onClick={this.sendOrder}>Send order</button>
//                     </div>
//                 </SkyLight>
//             </span>
//         );
//     }
// };

var mapStateToProps = store => ({
    item: store.cart.item,
    total: store.cart.total
});

var matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        clearCart: clearCart
    }, dispatch)
};

const ConnectedCart = connect(mapStateToProps, matchDispatchToProps)(Cart);
export {ConnectedCart as Cart};
